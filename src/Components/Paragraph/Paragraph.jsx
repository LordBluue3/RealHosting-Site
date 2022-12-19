import './Paragraph.css'

export const Paragraph = ({color, text, size}) =>{
    return(
        <p className={color} style={{fontSize: {size}}}>{text}</p>
    )
}

export default Paragraph