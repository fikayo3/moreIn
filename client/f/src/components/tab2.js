import "../assets/css/tabs.css";
import { useState } from "react";

const Tab2 = () => {
    
    const [bank,SetBank] = useState("");
    const[accName,setAccName] = useState("");
    const [accNum,setAccNum] = useState("");
    
    return(
        <form class="user">
                       <div class="sub-heading first">Bank Settings</div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="address">Bank</label>
                                    <div class="info">Select your bank</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Bank*</div>
                                    <select value={bank} onChange={(e)=>SetBank(e.target.value)} class="form-control select2 " name="bank_id" id="bank_id">
                                    <option value="">Please select</option>
                                    <option value="1">First Bank of Nigeria</option>
                                    <option value="2">Access Bank Plc</option>
                                    <option value="3">Fidelity Bank Plc</option>
                                    <option value="4">First City Monument Bank Limited</option>
                                    <option value="5">Guaranty Trust Bank Plc</option>
                                    <option value="6">Union Bank of Nigeria Plc</option>
                                    <option value="7">United Bank for Africa Plc</option>
                                    <option value="8">Zenith Bank Plc</option>
                                    <option value="9">Citibank Nigeria Limited</option>
                                    <option value="10">Ecobank Nigeria Plc</option>
                                    <option value="11">Heritage Banking Company Limited</option>
                                    <option value="12">Keystone Bank Limited</option>
                                    <option value="13">Polaris Bank Limited</option>
                                    <option value="14">Stanbic IBTC Bank Plc</option>
                                    <option value="15">Standard Chartered</option>
                                    <option value="16">Sterling Bank Plc</option>
                                    <option value="17">Unity Bank Plc</option>
                                    <option value="18" selected="">Wema Bank Plc</option>
                                    <option value="19">Providus Bank Limited</option>
                                    <option value="20">Jaiz Bank Plc</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <input name="name" type="hidden" value="fikayo"/>
                        <input name="phone_number" type="hidden" value=""/>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Account Name</label>
                                    <div class="info">Bank Account Name</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Account Name*</div>
                                    <input class="form-control " type="text" name="account_name" id="account_name" value={accName}
                                    onChange={(e)=> setAccName(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="row">
                                <div class="col-xl-6">
                                    <label for="account-email">Account Number</label>
                                    <div class="info">Bank Account Numbers</div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="info">Account Number*</div>
                                    <input class="form-control " type="number" name="account_number" id="account_number" value={accNum}
                                    onChange={(e)=>setAccNum(e.target.value)}/>
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

export default Tab2