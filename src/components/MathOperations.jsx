import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

const MathOperations = ({onClickOperarion, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperarion}/>
        <Button text="-" clickHandler={onClickOperarion}/>
        <Button text="*" clickHandler={onClickOperarion}/>
        <Button text="/" clickHandler={onClickOperarion}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </section>
)

MathOperations.propTypes = {
    onClickOperarion: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations;