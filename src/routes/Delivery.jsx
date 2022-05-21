import React from 'react'
import SelectByke from '../components/delivery/SelectByke';
import StartBox from '../components/delivery/StartBox';
import "../style/style_delivery.css";

let bikes = [
  {
    id: 4567653,
    status: "temporal",
    level: 1,
    progressBar: 100,
    progressBarMax: 100,
  },
  {
    id: 34212346,
    status: "temporal",
    level: 2,
    progressBar: 100,
    progressBarMax: 100,
  },
  {
    id: 12345678,
    status: "temporal",
    level: 3,
    progressBar: 100,
    progressBarMax: 100,
  },
  {
    id: 4567653,
    status: "temporal",
    level: 1,
    progressBar: 100,
    progressBarMax: 100,
  },
  {
    id: 34212346,
    status: "temporal",
    level: 2,
    progressBar: 100,
    progressBarMax: 100,
  },
  {
    id: 12345678,
    status: "temporal",
    level: 3,
    progressBar: 100,
    progressBarMax: 100,
  }
]

export default function Delivery() {
  return (
    <section className='content-side-delivery'>
      {/* <StartBox/> */}
      <SelectByke bikes={bikes}/>
    </section>
  )
}
