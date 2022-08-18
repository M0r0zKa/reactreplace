import React from 'react';  
import { useEffect, useState } from 'react';
import { getUserPost, getUsers } from '../../services/users.axios.api.services';
import { User } from '../user/User';

function Users  () {  
   let [users,setUsers] = useState([]);
   let [posts,setPosts] = useState([]);

    useEffect(() => {
    getUsers().then(response => setUsers([...response.data]))
    },[]);

    let userFx = (user)=>getUserPost(user.id).then(response => setPosts([...response.data]))
    console.log(posts);

  
 return(
 <div>
{
 users.map(user => <User key={user.id} user={user}  fxUser={userFx}/>)
}
{
    posts && posts.map(post => <p>{post.body}</p>)
}
 </div>
 )
 }

export {Users}