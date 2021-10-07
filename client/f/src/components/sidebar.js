import { Link } from "react-router-dom"
import { useState } from "react"

function Sidebar(){
    const [isActive,setActive] = useState(false)
    


    return(
        <aside id="leftSide">
        <div id="sideBarContent">
        <div className="sidebar">
        <ul>
            <li>
                   <Link to = "/dashboard">
                    <img src="assets/home.svg"></img>
                    <h class="item">Dashboard</h>
                    </Link>
            </li>

            <li>
                <Link to= "/investment">
                <img src="assets/investment.svg" ></img>
                    <h class="item">investments</h>
                    </Link>
            </li>
            <li>
               <Link to = "/invest">
                <img src="assets/invest.svg" ></img>
                    <h class="item">invest</h>
                 </Link>
            </li>
            <li>
               <Link to = "/profile">
                   <img src="assets/profile.svg"></img>
                    <h class="item">profile</h>
                </Link>
            </li>
            <li id ="toggler" onClick={()=>{
                if(isActive){
                    setActive(false)
                }else{
                    setActive(true)
                }
                let rightsidebar = document.getElementById("r-side")
                let computedCssStyle = window.getComputedStyle(rightsidebar)
                if(computedCssStyle.display.toString() === "none"){
                    rightsidebar.style.display = 'block'
                }else{
                    rightsidebar.style.display = 'none'
                }
                return false
            }}>
               <Link to = "#">
                   <img src="assets/toggle2.svg"></img>
                    <h class="item">rightSide</h>
                </Link>
            </li>
            <li id="last-item">
                <Link to = "/signin">
                   <img src="assets/logout.svg" ></img>
                    <h class="item">Logout</h>
                 </Link>
            </li>
        </ul>
        </div>
        </div>
        </aside>
    )
}

export default Sidebar