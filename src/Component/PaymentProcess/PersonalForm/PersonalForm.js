import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import WhiteNav from '../../CommonComponent/WhiteNav/WhiteNav';
import HomeFooter from '../../CommonComponent/HomeFooter/HomeFooter';
import PaymentProcess from '../PaymentProcess';
import { UserContext } from '../../../App';


import './PersonalForm.css'

const PersonalForm = () => {
    const [userData] = useContext(UserContext)
    const [info, setInfo] = useState({ gender: ''})
    const [shippingData, setShippingData] = useState(null)
    const history = useHistory()
    const [success, setSuccess] = useState(false)
    let {id} = useParams()
    const handleBlur = (e) => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handleChange = (e) => {
        if (e.target.name === 'gender') {
            const newInfo = { ...info }
            newInfo.gender = e.target.value
            setInfo(newInfo)
        }
    }
    const handleHome = () => {
        history.push('/home')
    }
    // console.log(personGender)
    const handleSubmit = (e) => {
        const shippingData = { ...info }
        setShippingData(shippingData)
        console.log(shippingData)
        e.preventDefault()
    }
    const handlePaymentOfOrder = (e,paymentId) => {

        const allData = { ...info, date: new Date(), paymentId: paymentId,plans:id,userEmail:userData.email}
        fetch('https://damp-meadow-37150.herokuapp.com/addPerson', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ data: allData })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setSuccess(true)
                }
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <>
            <div>
                <div className="main-bg-classes">
                    <div className="container text-white">
                        <WhiteNav />
                        <p className="margin-auto text-center h1">
                            PERSONAL INFORMATION
                    </p>
                    </div>
                </div>
            </div>
            <div style={{ display: shippingData ? 'none' : 'block' }}>
                <div className="container top-margin">
                    <form onSubmit={handleSubmit} className="row g-3 ">
                        <div className="col-md-6">
                            <label className="form-label">First name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="firstName" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="lastName" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input type="email" name="email" defaultValue={userData.email} className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Mobile Number</label>
                            <input onBlur={handleBlur} type="text" name="mobile" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date of Birth</label>
                            <input onBlur={handleBlur} type="date" name="date-of-birth" className="form-control" required />
                        </div>
                        <div className="col-md-5 row ms-3 mt-5" >
                            <div className="form-check col-md-4 ">
                                <input className="form-check-input" value="Male" onChange={handleChange} type="radio" name="gender" id="flexRadioDefault1" required />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                    </label>
                            </div>
                            <div className="form-check col-md-4 ">
                                <input className="form-check-input" type="radio" onChange={handleChange} value="Female" name="gender" id="flexRadioDefault2" required />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                 </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">City</label>
                            <input onBlur={handleBlur} type="text" name="city" className="form-control" required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Zip</label>
                            <input onBlur={handleBlur} type="text" name="zip" className="form-control" required />
                        </div>
                        <div className="col-12">
                            <button className="plans-btn btn-warning" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ display: shippingData ? 'block' : 'none' }}>
                <PaymentProcess handlePaymentOfOrder={handlePaymentOfOrder} />
                <br/><br/>
                {
                    success && <div className="text-center"><button className="btn btn-warning" onClick={handleHome}>Go Home</button></div>
                }
            </div>

            <HomeFooter />
        </>
    );
};

export default PersonalForm;