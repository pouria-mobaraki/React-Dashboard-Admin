import React from 'react'
import "./Sidebar.css"
import { LineStyle } from '@mui/icons-material'
import { Timeline } from '@mui/icons-material'
import { TrendingUp } from '@mui/icons-material'
import { PermIdentity } from '@mui/icons-material'
import { Storefront } from '@mui/icons-material'
import { AttachMoney } from '@mui/icons-material'
import { BarChart } from '@mui/icons-material'
import { MailOutline } from '@mui/icons-material'
import { DynamicFeed } from '@mui/icons-material'
import { ChatBubbleOutline } from '@mui/icons-material'
import { MessageOutlined } from '@mui/icons-material'
import { WorkOutline } from '@mui/icons-material'
import { Report } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
         <Link to="/" className='link'> <li className="sidebarList_item active"><LineStyle className='sidebarIcon'/> Home</li></Link>
          <li className="sidebarList_item"><Timeline className='sidebarIcon'/> Analytics</li>
          <li className="sidebarList_item"><TrendingUp className='sidebarIcon'/> Sales</li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
        <Link to="/users"  className='link'><li className="sidebarList_item "><PermIdentity className='sidebarIcon'/> Users</li></Link>
        <Link to="/newUser"  className='link'> <li className="sidebarList_item"><Storefront className='sidebarIcon'/> New User</li></Link>
        <Link to="/products"  className='link'><li className="sidebarList_item"><AttachMoney className='sidebarIcon'/> Products</li></Link>
          <li className="sidebarList_item"><BarChart className='sidebarIcon'/> Transaction</li>
          <li className="sidebarList_item"><MailOutline className='sidebarIcon'/> Reports</li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Notifications</h3>
        <ul className="sidebarList">
          <li className="sidebarList_item "><DynamicFeed className='sidebarIcon'/> Mail</li>
          <li className="sidebarList_item"><ChatBubbleOutline className='sidebarIcon'/> Feedback</li>
          <li className="sidebarList_item"><MessageOutlined className='sidebarIcon'/> Message</li>
        </ul>
      </div>

      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Staff</h3>
        <ul className="sidebarList">
          <li className="sidebarList_item "><WorkOutline className='sidebarIcon'/> Manage</li>
          <li className="sidebarList_item"><Timeline className='sidebarIcon'/> Analytics</li>
          <li className="sidebarList_item"><Report className='sidebarIcon'/> Report</li>
        </ul>
      </div>

     </div>
    </div>
  )
}
