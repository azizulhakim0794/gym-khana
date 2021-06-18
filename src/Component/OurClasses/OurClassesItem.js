import React from 'react';
import Loading from '../CommonComponent/Loading/Loading';

const OurClassesItem = ({ data ,handleExercise}) => {
    return (
        <div className="col-md-4 col-sm-6 col-6 text-center ">
            {data.image ? <div className="col">
                <div className="h-100">
                    <img src={data.image} className="card-img-top h-300" alt="..." />
                   <div className="card-body">
                   <div className="exercise-btn">
                        <button className="btn-gym-session  btn-warning" onClick={() => handleExercise(data._id)}>{data.training} <span className="ms-3">➜</span></button>
                    </div>
                   </div>
                </div>
            </div>: <Loading/>}
        </div>
    );
};

export default OurClassesItem;