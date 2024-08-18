import React from 'react'
import Feature from '../../components/features/Feature'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
      <Feature/>
      <Chart grid title='Month sale' data={xAxisData} dataKey='sale'/>
      <div className='homeWidges'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
   
  )
}
