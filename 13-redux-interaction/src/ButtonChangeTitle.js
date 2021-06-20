import { useDispatch } from 'react-redux'
import { setTitle } from './slices/theme.slice'

export default function ButtonChangeTitle(props){

    const dispatch = useDispatch()

    const onClickTitle = (title) =>{
        console.log("Title to set", title)
        dispatch(setTitle({title}))
    }

    return <p>
        <button onClick={()=>onClickTitle("React")}>Set title A</button>
        <button onClick={()=>onClickTitle("Redux")}>Set title B</button>
    </p>
}