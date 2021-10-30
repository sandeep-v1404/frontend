import React, { useState } from 'react'
import './orgSignUp.scss'
import step1img from '../../images/nftHero.png'
function OrgSignUp() {

    const [currentStep, setCurrentStep] = useState(0);

    const steps =
        [
            <Step1 setCurrentStep={setCurrentStep} />,
            <Step2 setCurrentStep={setCurrentStep} />,
            <Step3 setCurrentStep={setCurrentStep} />
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
                        <div className="progressInner">

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

function Step1({ setCurrentStep }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Enter the name of your Organization</p>
                <input className={"input"} type="text" />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Organization website</p>
                <input className={"input"} type="text" />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => { setCurrentStep(currentStep => currentStep + 1) }}>Continue</button>
            </span>
        </div>
    )
}


function Step2({ setCurrentStep }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Tagline</p>
                <input className={"input"} type="text" />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Describe your Cause in detail</p>
                <textarea className={"inputTextarea"} type="text" rows="10" />
            </span>
            <span className="navBtns">
                <button
                    className={"btn"}
                    onClick={() => { setCurrentStep(currentStep => currentStep + 1) }}>Continue</button>
            </span>
        </div>
    )
}

function Step3({ setCurrentStep }) {
    return (
        <div className="steps">
            <span className={"inputCon"}>
                <p className={"label"}>Tagline</p>
                <input className={"input"} type="text" />
            </span>
            <span className={"inputCon"}>
                <p className={"label"}>Describe your Cause in detail</p>
                <textarea className={"inputTextarea"} type="text" rows="10" />
            </span>
            <span className="navBtns">
                <button className={"btn"}>Continue</button>
            </span>
        </div>
    )
}

export default OrgSignUp
