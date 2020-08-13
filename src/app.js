import react from 'react'
import { Switch, Route } from 'react-router'
import Home from './pages/homePage'

class App extends React.Component {
    render() {
        return(
            <Switch>
                <Route path="/" render={ props => {
                    <Home {...props} />
                }} />
            </Switch>
        )
    }
}

export default App