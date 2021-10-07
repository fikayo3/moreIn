
import Sidebar from "./sidebar"
import Rightside from "./rightside"
import Dashboardheader from "./dashboardheader"
import { useEffect, useState } from "react"



function Dashboard(){
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
        <div id="centerContent">
            <Dashboardheader user={user} />
            <main id="main">
                    <div id="dashboard">
                    <div class="stats">
                        <div class="row">
                            <div class="col-md-4">
                            <div class="stat-card">
                                    <div class="left"><div>₦</div></div>
                                    <div class="right">
                                        <div class="number">0.00</div>
                                        <div class="title">amount</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="left"><div>₦</div></div>
                                    <div class="right">
                                        <div class="number">0.00</div>
                                        <div class="title">Total Profits</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="stat-card">
                                    <div class="left"><div>₦</div></div>
                                    <div class="right">
                                        <div class="number">0.00</div>
                                        <div class="title">Expected Returns</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="recent">
                    <div class="heading">
                     Recent Investment
                    </div>
                    {data.length > 0?(
                        <div id="list-active">
                        <table class="table table-hover table-responsive" style={{height:'100vh'}}>
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
                    
            
           </main>

        </div>
       
       </div> 
         
         <Rightside />
        
        </div>

    )
}

export default Dashboard