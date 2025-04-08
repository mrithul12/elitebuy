
import React, { useEffect, useState } from 'react'
import './Shope.css'
import { filter } from 'framer-motion/client'
const Shope = () => {

  const [product,setProduct] = useState([])
  
  console.log("product",product)

  useEffect(()=>{
    const getProduct = async () => {
      try{
       const res =await fetch('https://dummyjson.com/products')
       const data = await res.json()
      //  console.log("data",data)
       setProduct(data.products)
      }catch(error){
       console.log("fetch api not working",error)
      }
 }

    getProduct()
    
  },[])

  return (
       <div className='box-container '>
            {product.map((item,index)=>{
                return(
                  <div key={index} className='box'>
                    <div className="box-image d-flex justify-content-center">
                      <img  src={item.images} alt="images" />
                    </div>
                    <div className="box-tittle">
                    <p className='m-0'>{item.title}</p>
                    </div>
                    <div className="box-rating">
                      <p className='m-0'>{item.rating}</p>
                    </div>
                    <div className="box-description">
                      <p className='m-0'>{item.description}</p>
                    </div>
                    <div className="box-button d-flex justify-content-center">
                      <button className='btn'>add to cart</button>
                    </div>
                   
                  </div>
                )
            })}
       </div>
  )
}

export default Shope