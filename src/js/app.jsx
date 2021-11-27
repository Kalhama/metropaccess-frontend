import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Map } from './components/Map'
import { Credits } from './components/Credits'
import { Menu } from './components/Menu'
import { NotFound } from './components/NotFound'
import ReactGA from 'react-ga';

ReactGA.initialize('G-JPMWTY28WQ');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    return (
        <>
            <Menu />
            <div id="page-wrap">
                <Router>
                    <Switch>
                        <Route component={Map} exact path="/" />
                        <Route component={Credits} path="/credits" />
                        <Route component={NotFound} path="*" />
                    </Switch>
                </Router>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
