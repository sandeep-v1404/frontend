import React, { useState } from 'react'
import './orgSignUp.scss'
import step1img from '../../images/nftHero.png'
import { toast } from 'react-toastify'

function OrgSignUp() {

    const [currentStep, setCurrentStep] = useState(0);
    const [orgForm, setOrgForm] = useState({});
    const steps =
        [
            <Step1 setCurrentStep={setCurrentStep} orgForm={orgForm} setOrgForm={setOrgForm} />,
            <Step2 setCurrentStep={setCurrentStep} orgForm={orgForm} setOrgForm={setOrgForm} />,
            <Step3 setCurrentStep={setCurrentStep} orgForm={orgForm} setOrgForm={setOrgForm} />,
            <Step4 setCurrentStep={setCurrentStep} orgForm={orgForm} setOrgForm={setOrgForm} />,
        ]

    return (
        <div className={"signUpPage"}>
            <div className={"signUpCon"}>
                <div className="signUpProgress">
                    <h1 className="progTitle">Welcome</h1>
                    <p className="progSub">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus fuga nisi eveniet sint atque nulla ratione nemo commodi unde error!
                    </p>
                    <div className="imgSec">
                        <img src={step1img} alt="" />
                    </div>
                    <div className="progressBar">
                        <div style={{ width: `${((currentStep + 1) / 4) * 100}%` }} className="progressInner">

                        </div>
                    </div>
                </div>
                <div className="signUpSteps">
                    {steps[currentStep]}
                </div>
            </div>
        </div>
    )
}

function Step1({ setCurrentStep, orgForm, setOrgForm }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Enter the name of your Organization</p>
                <input className={"input"} type="text" name={"orgName"} value={orgForm.orgName} onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }} />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Organization website</p>
                <input className={"input"} type="text" name={"website"} value={orgForm.website} onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }} />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Email address</p>
                <input className={"input"} type="text" name={"email"} value={orgForm.email} onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }} />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => {
                        if ((orgForm.orgName?.length > 0) && (orgForm.website?.length > 0) && (orgForm.email?.length > 0)) { setCurrentStep(currentStep => currentStep + 1) }
                        else {
                            toast.error("Please fill the details")
                        }
                    }}>Continue</button>
            </span>
        </div>
    )
}


function Step2({ setCurrentStep, orgForm, setOrgForm }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Tagline</p>
                <input className={"input"} name={"tagline"} type="text" value={orgForm.tagline}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Describe your Cause in detail</p>
                <textarea className={"inputTextarea"} name={"cause"} type="text" rows="10" value={orgForm.cause}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => {
                        if ((orgForm.tagline?.length > 0) && (orgForm.cause?.length > 0)) { setCurrentStep(currentStep => currentStep + 1) }
                        else {
                            toast.error("Please fill the form");
                        }
                    }}>
                    Continue</button>
            </span>
        </div>
    )
}

function Step3({ setCurrentStep, orgForm, setOrgForm }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Phone number</p>
                <input className={"input"} type="text" name={"phone"} value={orgForm.phone}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Address</p>
                <textarea className={"inputTextarea"} rows="10" type="text" name={"address"} value={orgForm.address}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => {
                        if ((orgForm.phone?.length > 0) && (orgForm.address?.length > 0)) { setCurrentStep(currentStep => currentStep+1) }
                        else {
                            toast.error("Please fill the form");
                        }
                    }}>
                    Continue</button>
            </span>
        </div>
    )
}


function Step4({ setCurrentStep, orgForm, setOrgForm }) {
    return (
        <div className="steps">
             <span className={"inputCon"}>
                <p className={"label"}>Wallet address</p>
                <input className={"input"} type="text" name={"wallet"} value={orgForm.wallet}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Found goal</p>
                <input className={"input"} type="text" name={"goal"} value={orgForm.goal}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Target date</p>
                <input className={"input"} type="text" name={"date"} value={orgForm.date}
                    onChange={(e) => { setOrgForm((form) => { form[e.target.name] = e.target.value; return form }) }}
                />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => {
                        if ((orgForm.phone?.length > 0) && (orgForm.address?.length > 0)) { }
                        else {
                            toast.error("Please fill the form");
                        }
                    }}>
                    Continue</button>
            </span>
        </div>
    )
}

export default OrgSignUp
