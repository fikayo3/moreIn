import Sidebar from "./sidebar"
import Dashboardheader from "./dashboardheader"
import Rightside from "./rightside"
import "./../assets/css/index.css"
import { useState } from "react"
import { useEffect } from "react"

function Investment(){
    
  
    const [data, setData] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))


    const getdata = () => {
      const token = localStorage.getItem('token')
      console.log(token)
      fetch("http://localhost:5000/api/invest/getAll", {
         method: 'GET',
         headers: { "Content-Type": "application/json","x-auth-token": token }
      }).then(res => {
          return res.json()
      }).then(res => {
          console.log(res)
          setData(res)
      })
  } 

  useEffect(() =>{
      getdata()
  }, [])
    
    return (
        <div className = "wrapper">
          <Sidebar />
        <div id="center">
        <div class="container">
        <Dashboardheader user={user} />
            <main id="main">
            <div id="dashboard">
            <div class="container">
            <div class="recent">
            <div class="heading">
            Investment
            </div>
            {data.length > 0?(
                        <div id="list-active">
                        <table class="table table-hover table-responsive" style={{height:'100vh',marginTop:'30px'}}>
                        <thead style={{color:'#426842e0',fontFamily:'cursive',fontSize:'25px'}}>
                        <tr>
                        <th  scope="col">amount </th>
                        <th  scope="col">plans </th>
                        <th  scope="col">roi</th>
                        <th  scope="col">returns</th>
                        <th  scope="col">created at</th>
                        </tr>
                        </thead>
                        <tbody id="data" style={{color:"#606060d1",fontSize:'20px',fontFamily:'monospace'}} >
                        {data && data.map(data => (
                            <tr>
                            <td>{data.amount}</td>
                            <td>{data.plan}</td>
                            <td>{data.roi}</td>
                            <td>{data.returns}</td>
                            <td>{data.createdAt}</td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        </div>
                    ):(
                        <div class="list-empty">
                        <img id="info" src="assets/info.svg"></img>
                        <span class="message">You have no investment</span>
                        </div>
                    )}
            </div>
            </div>
           </div>
           </main>

        </div>
       
       </div>    
         <Rightside />
        </div>

    )
}

export default Investment