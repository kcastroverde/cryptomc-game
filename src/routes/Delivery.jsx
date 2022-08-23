import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react';
import BykeforRun from '../components/delivery/BykeforRun';
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
  const [selectedByke, setSelectedByke] = useState(null);

  const openInventoryBykes = () => {
    setChoiceEmpty(false);
    setShowBykes(true);
  }

  const closeInventoryBykes = () => {
    if(selectedByke === null){
    setChoiceEmpty(true);
    }
    setShowBykes(false);
  }

  const selectedBykeHandler = (bike) => {
    setSelectedByke(bike);
    setChoiceEmpty(false);
    setShowBykes(false);
  }

  useEffect(()=>{
    if(selectedByke === null){
      setChoiceEmpty(true);
    }else{
      console.log(selectedByke)
    }
    
  },[selectedByke])

  
  return (
    <section className='content-side-delivery'>
      {choiceEmpty? <StartBox openBykes={openInventoryBykes}/>:null}
      <SelectByke selectByke={selectedBykeHandler} showBykes={showBykes} bikes={bikes} close={closeInventoryBykes}/>
      {selectedByke? <BykeforRun byke={selectedByke} />:null}
    </section>
  )
}
