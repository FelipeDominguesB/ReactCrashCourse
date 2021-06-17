import PropTypes from 'prop-types'
const Button = ({color, text, onClickFn}) =>{
    
    return (
    <div>
    <button onClick={onClickFn}
            style={{backgroundColor: color}} 
            className="btn">{text}</button>
    </div>

    )
}

Button.defaultProps = {
    color: 'steel blue'
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClickFn: PropTypes.func
}
export default Button