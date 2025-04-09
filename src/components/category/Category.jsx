import React from 'react'
import './Category.css'
import CategoryData from '../product/CategoryData'
export const Category = () => {
  return (
    <div className='container-fluid '>
    <h1 className='m-0'>Product Category</h1>
    <div className='category-box m-0'>
     
        {CategoryData.map((item,index)=>{
           return (
            <div className='category-box-container d-sm-flex justify-content-between' key={index}>
              <div className="category-heading d-flex flex-column justify-content-between text-nowrap">
              <p className='m-0'>{item.title}</p>
              <p className='m-0'>{item.offer}</p>
              <hr className='line p-2'/>
              <div className="category-btn">
              <button className='category-btn  text-nowrap'>order now</button>
              </div>
              
              </div>
              <div className="category-image d-flex justify-content-center">
                <img src={item.image} alt="image" />
              </div>

              

            </div>
           )
        })}
    </div>
    </div>
  )
}

export default Category;
