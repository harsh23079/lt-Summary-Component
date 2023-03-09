
import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='result sizeCard'>
        <p className='gray'>Your Result</p>
        <div className='numberInCard1'>
          <div className='circle'>
            <p className='text_sz margin'>76</p>
            <p className='margin1'>of 100</p>
          </div>


        </div>
        <h2 style={{ color: 'white', fontSize: '35px' }} >Great</h2>
        <p className='gray'>You scored higher than 65% of<br></br> the people who have taken <br></br> these tests.</p>
      </div>


    </div>
  )
}

export default Card
