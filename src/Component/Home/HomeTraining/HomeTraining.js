import React from 'react';
import './HomeTraining.css'
import yoga from '../../../Image-&-Icon/yoga.jpg'
import wells from '../../../Image-&-Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg'
import { useHistory } from 'react-router';

const HomeTraining = () => {
    const  history = useHistory()
    const handleTrainingYOGA = () =>{
        history.push('/ourClasses')
    }
    const handleTrainingCARDIO = () =>{
        history.push('/ourClass/608456673958183ccf6a7d3f')
    }
    return (
        <div>
            <div className="container top-margin margin-auto">
            <p className="h2 mb-5 text-center">OUR <span className="text-warning">PROGRAMS</span></p>
            <div className="row">
                <div className="col-md-5  margin-auto mb-5">
                    <img src={yoga} alt="" />
                    <div className="img-btn"><button className="btn-gym-session img-btn btn-warning" onClick={handleTrainingYOGA}>YOGA TRAINING SESSION<span className="ms-2">➜</span></button></div>
                </div>
                <div className="col-md-5  margin-auto  mb-5">
                    <img src={wells} alt="" />
                    <div className="img-btn"><button className="btn-gym-session img-btn btn-warning" onClick={handleTrainingCARDIO}>CARDIO TRAINING SESSION<span className="ms-2">➜</span></button></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeTraining;