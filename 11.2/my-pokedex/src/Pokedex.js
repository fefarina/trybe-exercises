import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon'
import './App.css'

class Pokedex extends Component {
    render() {
        return (
            <div>
                <h1>Pokedex</h1>
                <div className='main'>
                    {pokemons.map((pokemon, index) => {
                        return <Pokemon 
                        key={index}
                        name={pokemon.name}
                        type={pokemon.type}
                        averageWeight={pokemon.averageWeight}
                        image={pokemon.image}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Pokedex