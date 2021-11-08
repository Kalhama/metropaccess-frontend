import React from 'react'

export const NetworkProvider = ({ error, loading, children }) => {
    if (error) {
        return (
            <>
                <p>error</p>
                <p>{error.message}</p>
                <p>{error?.response?.data?.message}</p>
            </>
        )
    } else if (loading) {
        return 'Loading'
    } else {
        return children
    }
}
