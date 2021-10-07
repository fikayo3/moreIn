import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";



function SignUp() {
      const [phoneNum,setPhone] = useState(0);
      const [emailaddress,setSignUpEmail] = useState('');
      const [password,setSignUpPass] = useState('');
      const [reEnterPass,setreEnter] = useState('');
      const [errorMessage,setError] = useState('');
      const history = useHistory();
      
      const handleSubmit = async(e) => {
          // validations 
        if (password !== reEnterPass){
            alert("pls enter correct ensure passwords match")
            return
        } 
        e.preventDefault();
         await fetch('http://localhost:5000/signing/signup', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( {emailaddress,phoneNum,password })
        }).then(res =>{  
          return res.json()
          })
        .then(res => {
          if(res.status){
            let token = res.token;
            console.log(token)
            localStorage.setItem('token', JSON.stringify(token))
            history.push("/dashboard")
          }else{
            setError(res.msg)
          }
        })
        .catch(err => {
          console.log(err.status)
        });
      }

    return (
        <div className="Container">
         <nav  id="header" class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">Investify </a>


           <div id="navLeft" class="collapse navbar-collapse d-flex justify-content-end">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
             <p>  have an account ? </p>
            </li>
            <li class="nav-item">
            <Link to = "/signin">
            <button class="btn  btn-outline-success my-2 my-sm-0" id="hBtn" type="submit">Login</button> 
            </Link>
            </li>
            </ul> 
           </div>
           </nav>
        <main id ="main">
        <section id="login">
        <div  id="SignInBox" >
        <form onSubmit={handleSubmit}>
          <div style={{color:'red'}}>{errorMessage}</div>
            <div className="form-Wrap">
                <label for="exampleInputEmail1" class="form-label">Enter Phone Number</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value ={phoneNum} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="form-Wrap">
                <label for="exampleInputEmail1" class="form-label">Enter Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={emailaddress} onChange={(e) => setSignUpEmail(e.target.value)} />
            </div>
            <div className="form-Wrap">
                <label for="exampleInputPassword1" class="form-label">Enter Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"
                value={password} onChange={(e) => setSignUpPass(e.target.value)} />
            </div>
            <div className="form-Wrap">
                <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" 
                value={reEnterPass} onChange={(e) => setreEnter(e.target.value)}/>
            </div>
            <div className="addText"><p class="addtextp">by Registering you agree to our terms and conditions</p></div>
            <div className="buttonDiv"><button type="submit" id ="loginBtn" class="btn btn-primary">Create Account</button></div>
            <h2 id="forgotp"><a href="forgotP.html"> Forgot Password</a> </h2>
        </form>
            </div>
        </section>
           </main>
          
      </div>
    );
  }
  
  export default SignUp;