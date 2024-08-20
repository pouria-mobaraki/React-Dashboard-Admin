import React from 'react'
import { useState } from 'react'
import { products } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import "./Products.css"
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';



export default function UsersList() {

 const [productsDatas,setProductsDatas]= useState(products)

 const productsDelete = (productsId)=>{
  setProductsDatas(productsDatas.filter(user => productsId !== user.id))
 }

 const columns = [
  {
    field: 'id',
    headerName:'ID',
    width: 90
  },
  {
    field: 'title',
    headerName:'Name',
    width: 200,
    renderCell: (params) => {
     return (
      <Link to={`/product/${params.row.id}`} className="link"> 
      <div className="userListUser">
       <img src={params.row.avatar} alt="" className="userListImg" />
        {params.row.title}
      </div>
      </Link>
     )
     
    }
  },

  {
    field:'price',
    headerName:'Price',
    width:120
  },
  {
    field:'action',
    headerName:'Action',
    width:150,
    renderCell:(params)=>{
      return (
        < div className="editDeleteContainer">
        <Link to={`/product/${params.row.id}`} className="link">
          <button className='userListEdit'>Edit</button>
        </Link>
        <DeleteOutline className='userListDelete' onClick={()=>productsDelete(params.row.id)}/>
        </div>
      )
    }
  }
 
 ]

  return (
    <div className='userList'>
      <DataGrid
     rows={productsDatas}
     columns={columns}
     disableSelectionOnClick
    //  pageSize={3}
    initialState={{
      pagination: {
        paginationModel: { pageSize: 3, page: 0 },
      },
    }}
    checkboxSelection
     />
     </div>
  )
}
