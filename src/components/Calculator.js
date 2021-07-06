import { useState, useEffect } from 'react';

import UnderWeight from "assets/images/underWeight.svg";
import NormalWeight from "assets/images/normalWeight.svg";
import OverWeight from "assets/images/overWeight.svg";
import ObeseWeight from "assets/images/obeseWeight.svg";
import ExtraObeseWeight from "assets/images/extraObeseWeight.svg";
import User from "assets/images/user.png";

function Calculator(){

    const title = "Let's calculate Body Mass Index";
    const Description = "Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.";
    const FormTitle = "Welcome to BMI";

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [bodyType, setBodyType] = useState('normal');
    const [gender, setGender] = useState('male');
    const [bmr, setBmr] = useState(0);
    const [age, setAge] = useState(0);
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [tdee, setTdee] = useState(0);

    const tdeeMultiplierValues = {
      sedentary : 1.2,
      lightlyActive : 1.375,
      moderatelyActive : 1.55,
      veryActive : 1.725,
      extraActive : 1.9
    }

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleActivityLevelChange = (e) => {
       setActivityLevel(e.target.value);
    }


    const handleTdeeCalculation = () => {
        let heightInMeter = height/100;
        let bmi = weight/(heightInMeter ^ 2);
        setBmi(bmi.toFixed(1));
        setBodyType(bodyType);
    }


    useEffect(() =>{
        if(bmi <= 18.5){
            setBodyType('under Weight');
        };
        if(bmi > 18.5 && bmi <= 24.9){
            setBodyType('Nomal')
        };
        if(bmi >= 25 && bmi <= 29.9){
            setBodyType('Over Weight')
        };
        if(bmi >= 30 &&  bmi <= 34.9){
            setBodyType('Obese')
        };
        if(bmi > 35){
            setBodyType('Extra Obese')
        }
    }, [weight, height, bmi]);

    useEffect(() => {
      let bmr = 0, tdee = 0, tdeeMultiplier = 1;
      if(gender == 'male' && weight && height){
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
      }

      if(gender == 'female' && weight && height){
        bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
      }

      if(tdeeMultiplierValues.hasOwnProperty(activityLevel)){
        tdeeMultiplier = tdeeMultiplierValues[activityLevel];
      }

      tdee = tdeeMultiplier * bmr;

      setTdee(tdee.toFixed(2));
      setBmr(bmr.toFixed(2));


    }, [weight, height, bmi, gender, activityLevel])


    return(
        <>
            <div className="calMain">
                <div className="container">
                    <div className="topSec">
                        <div className="topcont">
                            <h1 data-aos="fade-up" data-aos-duration="1000">{title}</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">{Description}</p>
                        </div>
                    </div>
                    <div className="calSec">
                        <div className="calFormSec" data-aos="zoom-in-right" data-aos-duration="800" data-aos-delay="1000">
                            <div className="calForm">
                                <div className="userSec">
                                    <img src={User} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200"/>
                                    <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">{FormTitle}</h2>
                                </div>
                                <form>
                                    <div className="formGroup">
                                        {/* <label htmlFor="height">Gender</label> */}
                                        <div className="radioSelector">
                                            <div className="radioCol">
                                                <input type="radio" name="optradio" value='male' onChange={(e) => {handleGenderChange(e)}} checked={gender == 'male'} />
                                                <label>Male</label>
                                            </div>
                                            <div className="radioCol">
                                                <input type="radio" name="optradio" value='female' onChange={(e) => {handleGenderChange(e)}} checked={gender == 'female'} />
                                                <label>Female</label>
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="weight">Age</label>
                                        <input type="number" id="age" onChange={(e) => {handleAgeChange(e)}} value={age}/>
                                    </div>
                                    <div className="formGroup">
                                      <label htmlFor="lifestyle">Lifestyle</label>
                                      <select className="form-control" id="lifestyle" onChange={(e) => {handleActivityLevelChange(e)}} value={activityLevel}>
                                        <option value="sedentary">Sedentary</option>
                                        <option value="lightlyActive">Lightly Active</option>
                                        <option value="moderatelyActive">Moderately Active (Office Job)</option>
                                        <option value="veryActive">Very Active (Field Job)</option>
                                        <option value="extraActive">Extra Active (with Workout)</option>
                                      </select>
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="weight">Weight<span>/kg</span></label>
                                        <input type="number" id="weight" onChange={(e) => {handleWeightChange(e)}} value={weight}/>
                                    </div>
                                    <div className="formGroup">
                                        <label htmlFor="height">Height<span>/cm</span></label>
                                        <input type="number" id="height" onChange={(e) => {handleHeightChange(e)}} value={height}/>
                                    </div>
                                    <div className="formGroup">
                                        <button type="button" onClick = {handleTdeeCalculation}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="calImg">
                            <div className="bmiImgs" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">
                                {(bmi <= 18.5) ? <img src={UnderWeight} /> : " "}
                                {(bmi > 18.5 && bmi <= 24.9) ? <img src={NormalWeight} /> : " "}
                                {(bmi >= 25 && bmi <= 29.9) ? <img src={OverWeight} /> : " "}
                                {(bmi >= 30 &&  bmi <= 34.9) ? <img src={ObeseWeight} /> : " "}
                                {(bmi > 35) ? <img src={ExtraObeseWeight} /> : " "}
                            </div>
                            
                            <div className="calBmiSec">
                                    <div className="calBmi">BMI :<br/> <span>{bmi}</span></div>
                                    <div className="bmiType">bodyType :<br/> <span>{bodyType}</span></div>
                                    <div className="bmiType">BMR :<br/> <span>{bmr} Kcal/Day</span></div>
                                    <div className="bmiType">TDEE :<br/> <span>{tdee} Kcal/Day</span></div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Calculator;
