
export default function SubComponent(props){

    return <div className='sub-component'>
        <div className='title'>Io sono un sottotitolo</div>
        <button onClick={props.onClickOnButton}>Bottone nel sub component</button>
        <hr />
    </div>
}