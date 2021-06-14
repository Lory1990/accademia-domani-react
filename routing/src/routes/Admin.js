import {
    Switch,
    Route
} from 'react-router-dom'
import AdminUserList from '../pages/AdminUserList'
import NotFoudPage from '../routes/NotFoudPage'


export default function Admin(props){

    const evaluateAdmin = () =>{
        // ....
        return false
    }

    if(!evaluateAdmin()) return <div>Forbidden</div>

    return <Switch>
        <Route exact path="/admin/user-list" component={AdminUserList} />
        <Route exact path="*" component={NotFoudPage} />
    </Switch>
}