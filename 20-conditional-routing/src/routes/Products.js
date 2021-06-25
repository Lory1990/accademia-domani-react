import {
    Switch,
    Route
} from 'react-router-dom'
import ProductsList from '../pages/ProductList'
import ProductForm from '../pages/ProductForm'
import NotFoudPage from '../routes/NotFoudPage'


export default function Products(props){

    return <Switch>
        <Route exact path="/products/list" component={ProductsList} />
        <Route exact path="/product/:id" component={ProductForm} />
        <Route exact path="*" component={NotFoudPage} />
    </Switch>
}