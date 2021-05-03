import React from 'react';

const MyOrderList = ({ data }) => {
    return (
        <div>
            <div class="alert alert-warning my-3" role="alert">
              <p>{data.firstName}  <span className="ms-5"><b>{data.plans}</b></span></p> 
            </div>
        </div>
    );
};

export default MyOrderList;