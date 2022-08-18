import React from "react";

function User({user,fxUser}){
    let {id,name,username,email} = user;
    return(
        <div>
            <h2>{name}</h2>
            <p><b>ID: </b>{id}</p>
            <p><b>username: </b>{username}</p>
            <p><b>email: </b>{email}</p>
           <button onClick={()=>{fxUser(user)}}>Clic!</button>
           </div>
    )
}


export {User};