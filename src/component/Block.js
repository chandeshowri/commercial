import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Block() {
    let [banner, setBanner]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => {
          console.log(res.data.products);
            setBanner(res.data.products);
        });
    },[])
  return (
    <div>
      <div className='container border-top py-4'>
        <div className='row'>
        <h3>Deals of the Week</h3>
        {banner.slice(0,4).map((a)=>
              <div className='col-lg-3 border'>
              <img src={a.thumbnail} class='w-100'/>
              <h5>{a.title}</h5>
                <p>{a.brand}</p>
                <p>{a.category}</p>
              <p>{a.description}</p>
          </div>

                )}
               
            
           
        </div>
      </div>
    </div>
  )
}

export default Block
