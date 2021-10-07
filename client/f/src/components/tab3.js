import "../assets/css/tabs.css";
import { useState } from "react";
const Tab3 = () => {
    const[oldPass,setOldPass] = useState("");
    const[newPass,setNewPass] = useState("");
    const[confirmPass,setConfirmPass] = useState("");

    return(
        <form class="user">
                       <div class="sub-heading first">Password Settings</div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">Old Password</label>
                                    
                                </div>
                                <div class="col-xl-6">
                                  
                                    <input class="form-control" type="password" name="old_password" id="old_password" placeholder="********"
                                    value={oldPass} onChange={(e) => setOldPass(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">New Password</label>
                                  
                                </div>
                                <div class="col-xl-6">
                                   
                                    <input class="form-control" type="password" name="password" id="password" placeholder="********"
                                    value={newPass} onChange={(e) => setNewPass(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Confirm Password</label>
                                   
                                </div>
                                <div class="col-xl-6">
                                    <input class="form-control" type="password" name="password_confirmation" id="password_confirmation" placeholder="********"
                                      value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                </div>
                                <div class="col-xl-6">
                                    <button class="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
    )
}

export default Tab3