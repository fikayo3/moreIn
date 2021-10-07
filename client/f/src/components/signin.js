import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Signin() {
    const [emailaddress,setEmail] = useState('');
    const [password,setPass] = useState(''); 
    const history = useHistory();
    const [errorMessage,setError] = useState('');

    const handlelogin = (e) => {
       
        e.preventDefault();
        fetch('http://localhost:5000/signing/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( {emailaddress,password })
          }).then(res => {
              return res.json()
          }).then(res => {
            if(res.status){
              let token = res.token;
              console.log(token)
              localStorage.setItem('token', JSON.stringify(token))
              history.push("/")
            }else{
              setError(res.msg)
            }
          }).catch(err => {
            console.log(err.status)
          });
    }

    


    return (
      <div className="Container">
        <nav  id="header" class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Investify </a>
           <div id="navLeft">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
             Dont have an account ? 
            </li>
            <li class="nav-item">
            <Link to = "/signup">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">SignUp</button> 
            </Link>
            </li>
            </ul> 
           </div>
           </nav>
        <main id ="main">
        <section id="login">
        <div  id="loginBox" >
        <form onSubmit={handlelogin}>
        <div style={{color:'red'}}>{errorMessage}</div>
            <div className="form-Wrap">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={emailaddress} 
                onChange = {(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-Wrap">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                value={password} onChange={(e) => setPass(e.target.value)}/>
            </div>
            <div className="addText"><p class="addtextp">by signin in you agree to our terms and conditions</p></div>
            <div className="buttonDiv"><button type="submit" id ="loginBtn" class="btn btn-primary">login</button></div>
            <h2 id="forgotp"><a href="forgotP.html"> Forgot Password</a> </h2>
        </form>
            </div>
        </section>
           </main>
          
      </div>
    );
  }
  
  export default Signin;
  