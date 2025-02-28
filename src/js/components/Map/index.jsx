import React, { useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer, Marker, GeoJSON } from 'react-leaflet'
import Axios from 'axios'
import { NetworkProvider } from '../NetworkProvider'
let colormap = require('colormap')

// TODO select different data
// TODO select fromId or toID?

const MapRenderer = ({initialYKR, initialMarker, initialSelectedYKR}) => {
    const [marker, setMarker] = useState(initialMarker)
    const [selectedYKR, setSelectedYKR] = useState(initialSelectedYKR)
    const [YKR, setYKR] = useState(initialYKR)
    const [loading, setLoading] = useState(true)
    const [geoJSONKey, refreshGeoJSON] = useState(0)
    
    const colors = useMemo(() => {
        return colormap({
            colormap: 'jet',
            nshades: 100,
            format: 'hex'
        })
    }, [])

    const getColor = (val) => {
        return val !== null ? colors[Math.min(val, 99)] : colors[0]
    }

    useEffect(() => {
        setLoading(true)
        Axios.get(`${process.env.REACT_APP_API_URL}/travelTime?id=${selectedYKR}&column=pt_r_t`)
            .then(({data}) => {
                return YKR.map(el => {
                    el.properties.travelTime = data[el.properties.YKR_ID]
                    return el
                })
            })
            .then(YKR => {
                refreshGeoJSON(Math.random())
                setYKR(YKR)
                setLoading(false)
            })
    }, [selectedYKR])

    return (
        <>
        {loading ? <div id="loading-overlay">Loading</div> : null}
            <MapContainer id={'map'} center={[60.17, 24.94]} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                    url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                    maxZoom={18}
                    id={'mapbox/light-v10'}
                    tileSize={512}
                    zoomOffset={-1}
                    accessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                    />
                <Marker position={marker} />
                    <GeoJSON 
                        key={geoJSONKey}
                        style={(feature) => {
                            let { travelTime } = feature.properties
                            return {
                                "stroke": false,
                                "color": getColor(travelTime),
                                "fillOpacity": 0.4
                            }
                        }} 
                        data={YKR} 
                        eventHandlers={{
                            click: (e) => {
                                setLoading(true)
                                setMarker(e.latlng)
                                setSelectedYKR(e.layer.feature.properties.YKR_ID)
                            }
                        }}
                        />
            </MapContainer>
        </>
    )
}

export const Map = () => {
    const [YKR, setYKR] = useState([])
    const [loading, setLoading] = useState(true)
    const initialSelectedYKR = 5977005

    useEffect(() => {
        setLoading(true)
        Axios.get(`${process.env.REACT_APP_API_URL}/YKRgrid`)
            .then(res => {
                setYKR(res.data.features)
                setLoading(false)
            })

    }, [])

    return (
        <>
            <NetworkProvider loading={loading}>
                <MapRenderer 
                    initialYKR={YKR}
                    initialMarker={{
                        lat: 60.16815846879989,
                        lng: 24.931411743164066
                    }}
                    initialSelectedYKR={initialSelectedYKR}
                    />
            </NetworkProvider>
        </>
    )
}
