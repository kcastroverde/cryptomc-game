import React from "react"

export default function Notification({notification}) {
  return (
    <div className='header'>
    <div className='notification'>
      <p>{notification}</p>
    </div>
    <div className='market-link'>
      <h4>Market</h4>
    </div>
    </div>
  )
}
