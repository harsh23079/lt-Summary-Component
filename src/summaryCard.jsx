
import React from 'react'
import { Memory, Reaction, Verbal, Visual } from './assets/index'

const summaryCard = () => {
  return (
    <div>
      <div className='summary sizeCard'>

        <h4 style={{ textAlign: 'left' }}>Summary</h4>
        <div className='score'>
          <div className='score1 flex-row'>
            <div style={{ display: 'flex' }}> <img src={Reaction} /><span>&nbsp; Reaction</span> </div>

            <div><span className='black'>80<span className='gray'>/100</span></span></div>
          </div>
          <div className='score2 flex-row'>
            <div style={{ display: 'flex' }}> <img src={Memory} /><span>&nbsp; Memory</span> </div>

            <div><span className='black'>92<span className='gray'>/100</span></span></div>
          </div>
          <div className='score3 flex-row'>
            <div style={{ display: 'flex' }}> <img src={Verbal} /><span>&nbsp; Verbal</span> </div>

            <div><span className='black'>61<span className='gray'>/100</span></span></div>
          </div>
{/*           80 92 61 72 */}
          <div className='score4 flex-row'>
            <div style={{ display: 'flex' }}> <img src={Visual} /><span>&nbsp; Visual</span> </div>

            <div><span className='black'>72<span className='gray'>/100</span></span></div>
          </div>
        </div>
        <button className='button' >Continue</button>


      </div>
    </div>
  )
}

export default summaryCard