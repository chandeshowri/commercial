import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Banner() {
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
      <div className='container py-4'>
        <div className='row'>
            <div className='col-lg-3'>
                <h5>All Categories</h5>
                {banner.slice(0,10).map((a)=>
                 <ul>
                 <li>{a.title}</li>
             </ul>
                )}
               
            </div>

            <div className='col-lg-9'>
                <img src='https://cdn11.bigcommerce.com/s-247kf1um74/images/stencil/original/carousel/7/slide2-850x392.jpg?c=2' class='w-100'/>
            </div>

        </div>
        <img src='https://cdn11.bigcommerce.com/s-247kf1um74/content/site/banner/home3/bn1.png' class='w-100'/>
      </div>
      
      </div>
      
  )
}

export default Banner
