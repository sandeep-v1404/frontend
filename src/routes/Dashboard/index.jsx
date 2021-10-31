import React from 'react'
import './dashboard.scss'
import placeholder from './../../images/imgPlaceholder.png'
import { useState,useRef } from 'react/cjs/react.development'

function Dashboard() {

    const [dashForm, setDashForm] = useState({});
    const imgPre = useRef(null);

    return (
        <div className={"dashboardPage"}>
            <div className={"dashboardCon"}>
                <div className="imgPre">
                    <img src={placeholder} alt="" ref={imgPre}/>
                    <label htmlFor="imgUpload">
                        <p>Upload Image</p>
                        <input id={"imgUpload"} style={{ display: "none" }} type="file"
                            onChange={(evt) => {
                                const file = evt.target.files[0]
                                console.log(evt);
                                if (file) {
                                    console.log(file);
                                    imgPre.current.src = URL.createObjectURL(file)
                                }
                            }}
                        />
                    </label>

                </div>
                <div className="mintForm">
                    <span className={"inputConExt"}>
                        <p className={"label"}>Asset name</p>
                        <input className={"input"} type="text" name={"assetName"}
                            value={dashForm.assetName}
                            onChange={(e) => { setDashForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                        />
                    </span>
                    <span className={"inputConExt"}>
                        <p className={"label"}>Asset description</p>
                        <textarea className={"textarea"} type="text" name={"assetDescription"}
                            onChange={(e) => { setDashForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                            rows={"8"} />
                    </span>
                    <span className={"inputConExt"}>
                        <p className={"label"}>Asset price in ETH</p>
                        <input className={"input"} type="text" name={"priceETH"}
                            onChange={(e) => { setDashForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                        />
                    </span>
                    <span className="navBtns">
                        <button className={"btn"}>
                            Mint NFT</button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
