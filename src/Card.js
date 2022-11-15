import classes from './Card.css'

const Card = (props) =>{
    return (
        <div className="Card">
            <p className='Card-name'>{props.name}</p>
            <img className='Card-img' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}>{props.img}</img>
            <p className='Card-type'>Type: {props.type}</p>
            <p className='Card-base-exp'>Exp: {props.base_experience}</p>
        </div>
    )
}

export default Card;