import './Home.css'
import { useHistory } from 'react-router-dom'

export default function Home(props){

	const history = useHistory()

	const onGoToAdmin = () =>{
		props.history.push("/admin/user-list")
	}

	const onGoToProducts = () =>{
		history.push("/products/list")
	}

	return <div className='home'>
		<button onClick={onGoToProducts}>Go to products</button>
		<button onClick={onGoToAdmin}>Go to admin</button>
	</div>
}				