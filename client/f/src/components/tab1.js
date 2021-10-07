import "../assets/css/tabs.css";
import { useState } from "react";

const Tab1 = () => {

   const  [fullname,setFullname] = useState("");
    const [ProfEmailAddr,setProfEmailAddr] = useState("");
    const [phoneNum,SetPhoneNum] = useState(0);
    const [gender,SetGender] = useState("please Select")
    const [dob,setDob] = useState() 
    const [address,setAddress] = useState("")
    const [state,setState] = useState("please select")
    const [country,setCountry] = useState("please select")


    return(
            <form class="user">
              <div class="sub-heading first">General Settings</div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="photo">Profile Picture</label>
                                    <div class="info">Update Picture</div>
                                </div>
                                <div class="col-xl-6">
                                    <input id="photo" type="file" name="photo" class="display-none"
                                     />
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label>Edit Full Name</label>
                                    <div class="info">This is the name that appears on every transaction</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div class="info">First Name*</div>
                                            <input id="name" type="text" name="name" placeholder="Full Name" class="form-control"
                                             required="" 
                                             value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Email Address</label>
                                    <div class="info">This is the mail we send transaction notifications and other updates</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Email*</div>
                                    <input id="account-email" type="email" name="email" placeholder="Email Address" class="form-control" 
                                    value={ProfEmailAddr} onChange={(e)=> setProfEmailAddr(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Phone Number</label>
                                    <div class="info">This is the mail we send transaction notifications and other updates</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Phone Number*</div>
                                    <input id="phone_number" type="number" name="phone_number" placeholder="phone Number"
                                     class="form-control" required="" 
                                     value={phoneNum} onChange={(e) =>SetPhoneNum(e.target.value) }/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Gender</label>
                                    <div class="info">Gender</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Gender*</div>
                                    <select value={gender} class="form-control " name="gender" id="gender" onChange={(e)=> SetGender(e.target.value)}>
                                        <option value="" disabled="" selected="">Please select</option>
                                         <option value="male">Male</option>
                                         <option value="female">Female</option>
                                     </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">DOB</label>
                                    <div class="info">Date of Birth</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Date</div>
                                    <input class="form-control date" type="date" value={dob} onChange={(e)=> setDob(e.target.value)} name="dob" id="dob"/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">Address</label>
                                    <div class="info">Address</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Address*</div>
                                    <input class="form-control" type="text" name="address" id="address" value={address}
                                    onChange={(e)=> setAddress(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">State</label>
                                    <div class="info">State</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">State*</div>
                                    <select class="form-control select2 " name="state_id" id="state_id" value={state} onChange={(e)=>setState(e.target.value)}>
                                    <option value="" selected="">Please select</option>
                                    <option value="1">Abuja</option>
                                    <option value="2">Abia</option>
                                    <option value="3">Adamawa</option>
                                    <option value="4">Akwa Ibom</option>
                                    <option value="5">Anambra</option>
                                    <option value="6">Bauchi</option>
                                    <option value="7">Bayelsa</option>
                                    <option value="8">Benue</option>
                                    <option value="9">Borno</option>
                                    <option value="10">Cross River</option>
                                    <option value="11">Delta</option>
                                    <option value="12">Ebonyi</option>
                                    <option value="13">Edo</option>
                                    <option value="14">Ekiti</option>
                                    <option value="15">Enugu</option>
                                    <option value="16">Gombe</option>
                                    <option value="17">Imo</option>
                                    <option value="18">Jigawa</option>
                                    <option value="19">Kaduna</option>
                                    <option value="20">Kano</option>
                                    <option value="21">Katsina</option>
                                    <option value="22">Kebbi</option>
                                    <option value="23">Kogi</option>
                                    <option value="24">Kwara</option>
                                    <option value="25">Lagos</option>
                                    <option value="26">Nassarawa</option>
                                    <option value="27">Niger</option>
                                    <option value="28">Ogun</option>
                                    <option value="29">Ondo</option>
                                    <option value="30">Osun</option>
                                    <option value="31">Oyo</option>
                                    <option value="32">Plateau</option>
                                    <option value="33">Rivers</option>
                                    <option value="34">Sokoto</option>
                                    <option value="35">Taraba</option>
                                    <option value="36">Yobe</option>
                                    <option value="37">Zamfara</option>
                            </select>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">Country</label>
                                    <div class="info">Country</div>

                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Country*</div>
                                    <select class="form-control select2 " name="country_id" id="country_id" 
                                    value={country} onChange={(e=>setCountry(e.target.value))}>
                                     <option value="" selected="">Please select</option>
                                     <option value="154">Nigeria</option>
                                  </select>
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

export default Tab1