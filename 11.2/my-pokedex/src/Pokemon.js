import React, { Component } from 'react';
import './App.css';

class Pokemon extends Component {
    
    render() {
        const { name, type, averageWeight, image } = this.props

        return (
            <div className='container'>
                <div>
                    <p>Nome: {name}</p>
                    <p>Tipo: {type}</p>
                    <p>AverageWeight: {averageWeight.value}{averageWeight.measurementUnit}</p>
                </div>
                <div>
                    <img src={image}/>
                </div>
                <br />
            </div>
        )
    }
}

export default Pokemon