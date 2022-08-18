import React from 'react';

function RickAndMortyCharacter({id,name,status,species,gender,image}) {
    return (
        <div>
            <h2>id:{id}</h2>
            <p><b>Name: </b>{name}</p>
            <img src={image}/>
            <p><b>Status: </b>{status}</p>
            <p><b>Species: </b>{species}</p>
            <p><b>Gender: </b>{gender}</p>
            <hr/>
        </div>
    );
}

export {RickAndMortyCharacter};