import iconX from '../assets/x-thin.svg'

export const Word = (props) =>{
    return(
        <li className="border-b  my-2 px-4 py-2 flex items-center justify-between">
            <span>{props.text}</span>
            <img src={iconX} alt="" className='cursor-pointer' onClick={() => props.deleteFun(props.id)} width={25} />
        </li>
    )
}