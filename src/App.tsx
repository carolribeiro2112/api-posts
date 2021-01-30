import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UserData, PostsData} from './types/User'



function App() {

  const [users,setUsers] = useState([]);

  const [id, setId] = useState<Number>();
  

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => setUsers(response.data))
  },[])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(response => setPosts(response.data))
  },[id])

  return (
    <div className="App">
      <h1>Lista de usuários</h1>
      <ul>
        {
          users!==undefined && 
          users.map((data:UserData)=>(
            <li key={data.id}>
              <p onClick={()=> setId(data.id)}>{data.name} <span>({data.id})</span></p>
            </li>
          ))
        }
      </ul>

      <h2>Mostrar Posts</h2>
        {
        posts !== undefined && posts.map((data: PostsData)=> (
          <ul key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
          </ul>
          ))
        }
    </div>
  );
}

export default App;
