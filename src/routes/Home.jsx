import React from 'react'
import Notification from '../components/notification/Notification'
import "../style/style_home.css"
export default function Home() {

  const notification = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus placeat in repudiandae fugiat rerum impedit aliquid, quibusdam veniam ex, iusto facilis? Ducimus voluptas repudiandae repellendus enim porro? Minus, perspiciatis?"

  return (
    <section className='content-side-home'>
    <Notification notification={notification} />
    <div className='selection'>
    <div id='box1' className='box'>
      <h2>INVENTORY</h2>
    </div>
    <div id='box2' className='box'>
    <h2>TOOLS</h2>
    </div>
    <div id='box3' className='box'>
    <h2>DELIVERY</h2>
    </div>
    </div>
    </section>
  )
}
