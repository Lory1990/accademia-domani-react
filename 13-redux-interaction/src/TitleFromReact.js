import { useSelector } from 'react-redux'

export default function TitleFromReact(props){

    const title = useSelector(state => state.theme.title)

    return <p>{title}</p>
}