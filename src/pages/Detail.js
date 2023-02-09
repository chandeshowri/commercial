import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Detail() {
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
      <div className='container'>
        <div className='row '>
        {banner.slice(0,10).map((a)=>
                 <div className='col-lg-4'>
                 <img src={a.thumbnail}/>
                 <h3></h3>
                 <ul>
                     <li>Brand:{a.brand}</li>
                     <li>Category:{a.category}</li>
                     <li>Price:{a.price}</li>
                     <li>Rating:{a.rating}</li>
                     <li>Discout %:{a.discountPercentage}</li>
                     <li>Stock:{a.stock}</li>
                     
                 </ul>
                 <img src={a.images}/>
 
             </div>
                )}
            
            
        </div>
      </div>
    </div>
  )
}

export default Detail
