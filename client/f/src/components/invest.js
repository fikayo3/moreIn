import Sidebar from "./sidebar"
import Dashboardheader from "./dashboardheader"
import Rightside from "./rightside"
import "./../assets/css/index.css"
import { useState } from "react"

function Invest(){
    const [amount,setAmount] = useState("")
    const [plan,setPlan] = useState("")
    const [errorMessage,setError] = useState('');
    
    const SubmitInvest = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')
        console.log(token)
        fetch('http://localhost:5000/api/invest/add', {
            method: 'POST',
            headers: { "Content-Type": "application/json", "x-auth-token": token },
            body: JSON.stringify({amount,plan})
          }).then(res => {
              if(res.status){
                return res.json()
              } else{
                  setError(res.msg)
              }
          }).catch(err => {
            console.log(err.status)
          });
    }
    return (
        <div className = "wrapper">
          <Sidebar />
        <div id="center">
        <div class="container">
            <Dashboardheader />
            <main id="main">
            <div id="dashboard">
            <div class="container">
            <div class="recent">
            <div id="Investheading">Investment plans </div>
            <div class="row" id ="investRow">
            <div class="col-md-3 plan">
                    <div class="title">Regular Networth Investment</div>
                    <div class="duration">6 working day(s) - 20% per investment</div>
                    <hr/>
                    <div class="plan-body">
                        <div style={{display: "flex"}}>
                            <div class="plan-body-left">
                                <div>Min Investment</div>
                                <div>₦ 10,000</div>
                                <div>Max Investment</div>
                                <div>₦ 200,000</div>
                            </div>
                            <div class="plan-body-right">
                            
                            </div>
                        </div>
                        <div class="link">
                        <button type="button" id="iplans" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        select Plan
                        </button>
                        <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <div style={{color:'red'}}>{errorMessage}</div>
                            <h5 class="modal-title" id="exampleModalLabel"> ENTER AMOUNT TO INVEST </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <form id="modalForm" onSubmit={SubmitInvest}>
                            <div class="input-group mb-3">
                            <div class="form-group">
                            <input id="amount" name="amount" required="" type="text" class="form-control" placeholder="Amount NGN"
                            value={amount} onChange={(e)=> setAmount(e.target.value)}></input>
                            </div>
                            <div class="form-group">
                            <label>Plans</label>
                            <select required="" class="form-control" id="invest_plan" name="plan_id" value={plan} onChange={(e)=> setPlan(e.target.value)}>
                            <option>Regular </option>
                            <option>Gold </option>
                            <option>Diamond</option>
                            <option>Partnership</option>
                            </select>
                            </div>
                            <div class="form-group">
                            <button id="proceed-button" class="btn btn-primary">Proceed</button>
                             </div>
                            </div>
                            </form>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 plan">
                    <div class="title">Gold Networth &nbsp; Investment</div>
                    <div class="duration">6 working day(s) - 30% per investment</div>
                    <hr/>
                    <div class="plan-body">
                    <div style={{display: "flex"}}>
                            <div class="plan-body-left">
                                <div>Min Investment</div>
                                <div>₦ 210,000</div>
                                <div>Max Investment</div>
                                <div>₦ 500,000</div>
                            </div>
                            <div class="plan-body-right">
                           
                            </div>
                        </div>
                        <div class="link">
                        <button type="button" id="iplans" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        select Plan
                        </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 plan">
                    <div class="title">Diamond Networth Investment</div>
                    <div class="duration">10 working day(s) - 35% per investment</div>
                    <hr/>
                    <div class="plan-body">
                    <div style={{display: "flex"}}>
                            <div class="plan-body-left">
                                <div>Min Investment</div>
                                <div>₦ 510,000</div>
                                <div>Max Investment</div>
                                <div>₦ 1,000,000</div>
                            </div>
                            <div class="plan-body-right">
                           
                            </div>
                        </div>
                        <div class="link">
                        <button type="button" id="iplans" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        select Plan
                        </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 plan">
                    <div class="title">Partnership Networth Investment</div>
                    <div class="duration">18 working day(s) - 50% per investment</div>
                    <hr/>
                    <div class="plan-body">
                    <div style={{display: "flex"}}>
                            <div class="plan-body-left">
                                <div>Min Investment</div>
                                <div>₦ 1,000,000</div>
                                <div>Max Investment</div>
                                <div>₦ 1,000,000 - Above</div>
                            </div>
                            <div class="plan-body-right">
                             
                            </div>
                        </div>
                        <div class="link">
                             <button type="button" id="iplans" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        select Plan
                        </button>
                        </div>
                    </div>
                </div>

            </div>
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

export default Invest;