import React, { useState } from 'react';
import{BuyBook} from '../redux';
import {connect} from 'react-redux';
function BookContainer(props){
    const[number,setNumber]=useState(1)
    return(
    <div>
        <h1>BookComponent</h1>
    <h1>Number of Books-{props.numberOfBooks}</h1>
    <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
    <button onClick={()=>props.BuyBook(number)}>Buy  {number}  Book</button>

    </div>
    )
}

const mapStatetoPops=(state)=>{
    return{
        numberOfBooks:state.numberOfBooks
        
    }

}
const mapDispatchtoprops=(dispatch)=>{
    return{
        BuyBook:function(number){
            dispatch(BuyBook(number));
            console.log('button clicked');

        }
    }

}
export default connect(mapStatetoPops,mapDispatchtoprops)(BookContainer);