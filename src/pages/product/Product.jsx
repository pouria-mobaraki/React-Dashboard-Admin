import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productsData } from '../../datas'
import "./Product.css"

export default function Product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
             <Link to="/newProduct">
             <button className='productAddButton'>Create </button>
             </Link>
        </div>

        <div className="productTop">

            <div className="productTopLeft">
                <Chart title='Sale In Month' data={productsData} dataKey="sales"/>
            </div>

            <div className='productTopRight'>
              <div className="productInfoTop">
                <img src="images/Asus.jpg" alt="laptop"  className="productInfoImg"/>
                <span className="productName">Asus Laptop</span>
              </div>

              <div className="productInfoBottom">
               <div className="productInfoItem">
                <div className="productInfoKey">ID:</div>
                <div className="productInfoValue">132</div>
               </div>
              </div>
               <div className="productInfoBottom">
               <div className="productInfoItem">
                <div className="productInfoKey">Name</div>
                <div className="productInfoValue">Asus Laptop</div>
               </div>
              </div>
              <div className="productInfoBottom">
               <div className="productInfoItem">
                <div className="productInfoKey">Sales</div>
                <div className="productInfoValue">$90000</div>
               </div>
              </div>
              <div className="productInfoBottom">
               <div className="productInfoItem">
                <div className="productInfoKey">Active</div>
                <div className="productInfoValue">Yes</div>
               </div>
              </div>
              <div className="productInfoBottom">
               <div className="productInfoItem">
                <div className="productInfoKey">In Stock</div>
                <div className="productInfoValue">No</div>
               </div>
              </div>

            </div>
        </div>
    </div>
  )
}
