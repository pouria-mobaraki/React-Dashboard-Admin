import React from 'react'
import { ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, Tooltip } from 'recharts';


export default function Chart({title,data,dataKey,grid}) {
  return (
    <div className='chart'>
     <h3 className="chartTitle">{title}</h3>
     <ResponsiveContainer width="100%" aspect={4}>
     <LineChart width={600} height={300} data={data} >
    <XAxis dataKey='name' stroke="#5550bd"/>
    <Line dataKey={dataKey} stroke="#5550bd" />
    <Tooltip/>
    {grid && <CartesianGrid stroke="#ccc" strokeDasharray="10" />}
  </LineChart>
     </ResponsiveContainer>
    </div>
  )
}
