import Sidebar from "./sidebar"
import Dashboardheader from "./dashboardheader"
import Rightside from "./rightside"
import {useState} from "react"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"

function Profile(){

  const [activeTab,setActiveTab] = useState('tab1')

  const handleTab1 = () => {
       setActiveTab("tab1")
  }
  const handleTab2 = () => {
    setActiveTab("tab2")
}
const handleTab3 = () => {
  setActiveTab("tab3")
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
            <div class="box">

            <div id="tabheading">
            <div class="title">Settings</div>
            <ul className="tabs">
              <li onClick={handleTab1} className={activeTab === "tab1" ? "active" : ""}> profile  </li>
              <li  onClick={handleTab2} className={activeTab === "tab2" ? "active" : ""}> bankDetails </li>
              <li onClick={handleTab3} className={activeTab === "tab3" ? "active" : ""}> security </li>
            </ul>
            </div>
            <div class="content">
               {activeTab === "tab1" ? <Tab1 /> : activeTab === "tab2" ? <Tab2 />:<Tab3/>} 
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

export default Profile