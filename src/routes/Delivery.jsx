import React from 'react'
import {useState} from 'react'
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
  const [choiceEmpty, setChoiceEmpty] = useState(true);
  const [showBykes, setShowBykes] = useState(false);

  const openInventoryBykes = () => {
    setChoiceEmpty(false);
    setShowBykes(true);
  }

  const close = () => {
    setChoiceEmpty(true);
    setShowBykes(false);
  }

  return (
    <section className='content-side-delivery'>
      {choiceEmpty? <StartBox openBykes={openInventoryBykes}/>:null}
      {showBykes?<SelectByke bikes={bikes} close={close}/>:null}
    </section>
  )
}
