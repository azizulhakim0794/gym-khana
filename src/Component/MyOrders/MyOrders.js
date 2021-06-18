import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import BlackNav from '../CommonComponent/BlackNav/BlackNav';
import Loading from '../CommonComponent/Loading/Loading';
import MyOrderList from './MyOrderList';

const MyOrders = () => {
    const [userData] = useContext(UserContext)
    const [orders , setOrders] = useState([])
    useEffect(() =>{
        fetch('https://damp-meadow-37150.herokuapp.com/myOrders',{
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email:userData.email})
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[userData.email])
    return (
        <div className="container">
            <BlackNav/>
            {userData.email ? <h2 className="text-center my-5">My Orders</h2> : <p className="text-center my-5 h2">You Have to login first</p>}
           { 
               userData.email &&  (orders.length ? orders.map(data => <MyOrderList data={data} key={data._id}/> ): <Loading/>)
           }
        </div>
    );
};

export default MyOrders;