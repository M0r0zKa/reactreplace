import React from 'react';
import {RickAndMortyCharacter} from "../RickAndMortyCharacter/RickAndMortyCharacter";

function RickAndAorty(props) {
    return (
        <div>
            <RickAndMortyCharacter id={1} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={"Male"}
                                   image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
        </div>
    );
}

export {RickAndAorty};