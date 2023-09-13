import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import avatar1 from "../assets/avatar-1.jpg";

async function loginUser(credentials) {
 return fetch('http://localhost:8080/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password
    // });
    const token = "qwertyuisdfnbmpGGGGtyuiop"

    if (username == "dyke"){
      if (password == "password"){
        setToken(token);
      }
      else {
        return<h1>Username or password incorrect</h1>
      }
    }
    else {
      return<h1>Username or password incorrect</h1>
    }
    setToken(token);
  }

  return(
    // <div className="login-wrapper">
    //   <h1>Please Log In</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       <p>Username</p>
    //       <input type="text" onChange={e => setUserName(e.target.value)} />
    //     </label>
    //     <label>
    //       <p>Password</p>
    //       <input type="password" onChange={e => setPassword(e.target.value)} />
    //     </label>
    //     <div>
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h1>Telone Task Mangement System
          </h1>
          <div style={{ textAlign: "center" }}>
          <img
            src={avatar1}
            alt="cat"
            style={{ width: 200, height: 200, display: "inline-block;" }}
          />
          </div>

          <form onSubmit={handleSubmit}>
            <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" onChange={e => setUserName(e.target.value)} />
            <br/>
            <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <br/>
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

        </div>
      </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};