import { UserList } from "./UserList"
import React, { useState,useEffect } from "react"

export function User() {
    
    const [user, setUser] = useState([
        {
            id: 1,
            username: "john.doe",
            fullname: "John Doe",
            created: 1666729360
        },
        {
            id: 2,
            username: "marry.doe",
            fullname: "Marry Ross",
            created: 1666729360
        }
    ]);

    const [userName, setUserName] = useState('');

    const [fullName, setFullName] = useState('');

    const [dev,setDev] = useState({name:"",avatar:""});

    function handleNewUser() {
        const newUser = {
            id: Number(user.length)+1,
            username: userName,
            fullname: fullName,
            created: Math.floor(+new Date() / 1000)
        };
        setUser(prevState => [...prevState,newUser]);        
    }

    useEffect(
        ()=>{
            fetch("http://api.github.com/users/gleidsonlm")
            .then((res)=>res.json())
            .then((data)=>{
                setDev({
                        name: data.name,
                        avatar: data.avatar_url
                    })
            })
        },
        );

    return (
        <section className="section" id="user">
            <h2 className="title">User Management</h2>
            <div className="row">
                <figure>
                    <img src={dev.avatar} alt={dev.name} />
                    <figcaption>{dev.name}</figcaption>
                </figure>
            </div>
            <div className="nav-group row">     
                <nav className="nav navbar navbar-">
                    <ul>
                        <li className="nav-item">
                            <a href="#createUser" className="nav-link">
                                <span>Create</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#updateUser" className="nav-link">
                                <span>Update</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#deleteUser" className="nav-link">
                                <span>Delete</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row">
                <h2>Users</h2>
                <ul>
                {
                    user.map(user=> <UserList id={user.id} username={user.username} fullname={user.fullname} created={user.created}  key={user.id} />)
                }
                </ul>
            </div>
            <div className="row" id="createUser">
                <form>
                    <fieldset>
                        <label htmlFor="username">User Name</label><br />
                        <input type="text" id="username" onChange={u => setUserName(u.target.value)} /><br />
                        <label htmlFor="fullname">Full Name</label><br />
                        <input type="text" id="fullname" onChange={f => setFullName(f.target.value)} /><br />
                        <button type="submit" onClick={handleNewUser}>Submit</button>
                    </fieldset>
                </form>
            </div>
        </section>
        )
}