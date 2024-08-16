import React from 'react'
import './Feature.css'
import { ArrowDownward } from '@mui/icons-material'
import { ArrowUpward } from '@mui/icons-material'

export default function Feature() {
  return (
    <div className='features'>
        <div className="featureItem">
            <span className="featureTitle">Revanue</span>
            <div className="featureContent">
                <span className="featureMoney">$2,564</span>
                <span className="featureRate">
                    -11.4 <ArrowDownward className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featureItem">
            <span className="featureTitle">Sales</span>
            <div className="featureContent">
                <span className="featureMoney">$4,465</span>
                <span className="featureRate">
                    -1.2 <ArrowDownward className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featureItem">
            <span className="featureTitle">Cost</span>
            <div className="featureContent">
                <span className="featureMoney">$2,229</span>
                <span className="featureRate">
                    +2.4 <ArrowUpward className='featureIcon '/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
    </div>
  )
}
