import './style.css';

export const LoginButton = (props) => {
    return ( 
        <button className="login">{props.name}</button>
     );
}
export const ShortButton = (props) => {
    return ( 
        <button className="short">{props.name}</button>
     );
}
export const MediumButton = (props) => {
    return ( 
        <button className="mid">{props.name}</button>
     );
}
export const LiteButton = (props) => {
    return ( 
        <button className="mid lite">{props.name}</button>
     );
}


export const LongButton = () => {
    return ( 
        <button className="long">Add & Install Extension</button>
     );
}
 