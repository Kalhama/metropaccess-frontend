import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Map } from './components/Map'
import { Credits } from './components/Credits'
import { Menu } from './components/Menu'

const App = () => {
    return (
        <>
            <Menu />
            <div id="page-wrap">
                <Router>
                    <Route component={Map} exact path="/" />
                    <Route component={Credits} exact path="/credits" />
                </Router>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
