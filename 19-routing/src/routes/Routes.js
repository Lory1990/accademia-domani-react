import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Products from './Products'
import Admin from './Admin'
import NotFoudPage from './NotFoudPage'
import Home from '../pages/Home'

export default function Routes(){
    return <Router>
        <Switch>
            <Route path="/admin*" component={Admin} />
            <Route path="/product*" component={Products} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFoudPage} />
        </Switch>
    </Router>
}