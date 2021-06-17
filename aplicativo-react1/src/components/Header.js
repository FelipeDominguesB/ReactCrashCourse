import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) =>{


    const HelloThere = () =>{
        console.log("Hello there!");
    }
    return(

        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClickFn={HelloThere}/>
        </header>

    )
}


Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Fazendo CSS em javascript
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black'
// }
export default Header;