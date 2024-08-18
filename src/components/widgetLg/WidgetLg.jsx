import React from 'react'
import "./WidgetLg.css"
import { transactions } from '../../datas'


export default function WidgetLg() {
  const Button = ({type})=>{
    return <button className={'widgetLgButton '+ type}>{type}</button>
  }

  return (
    <div className='WidgetLg'>
        <h3 className="widgetLgTitle">Latest Transaction</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
          {transactions.map(user=>(
              <tr key={user.id} className="widgetLgTr">
              <td className="widgetLgUser">
                  <img src={user.img} alt="" className="widgetLgImg"/>
                  <span className="widgetLgName">{user.customer}</span>
              </td>
              <td className="widgetLgData">{user.date}</td>
              <td className="widgetLgAmount">${user.amount}</td>
              <td className="widgetLgStatus">
                  <Button type={user.status} />
              </td>

          </tr>
          ))}
        </table>
    </div>
  )
}
