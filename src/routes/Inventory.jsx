import React from 'react';
import Notification from '../components/notification/Notification';
import "../style/style_inventory.css";
import Common from '../images/inventory/Common.png';
import Rare from '../images/inventory/Rare.png';
import Uncommon from '../images/inventory/Uncommon.png';
import Legendary from '../images/inventory/Legendary.png';
import logo from '../images/Navbar.png';

const items = [
  {
    id: 123456789,
    rarity: 'Uncommon',
    name: 'Triple Cheese Burger',
    score: 7.5,
    image: Uncommon,
    state: 'infinite',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 'temporal',
    rarity: 'Rare',
    name: 'Triple Cheese Burger',
    score: 11.1,
    image: Rare,
    state: 'temporal',
    progressBar: 275,
    progressBarMax: 500
  },
  {
    id: 'temporal',
    rarity: 'Uncommon',
    name: 'Triple Cheese Burger',
    score: 7.5,
    image: Uncommon,
    state: 'temporal',
    progressBar: 25,
    progressBarMax: 300,
  },
  {
    id: 4022981,
    rarity: 'Legendary',
    name: 'Home Made Burger',
    score: 30,
    image: Legendary,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 'temporal',
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'temporal',
    progressBar: 60,
    progressBarMax: 100
  },
  {
    id: 3618110,
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 3618110,
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 3618110,
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 3618110,
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  },
  {
    id: 3618110,
    rarity: 'Common',
    name: 'Clasic Burger',
    score: 5.1,
    image: Common,
    state: 'infinte',
    progressBar: 100,
    progressBarMax: 100
  }

]


export default function Inventory() {
  const notification = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus placeat in repudiandae fugiat rerum impedit aliquid, quibusdam veniam ex, iusto facilis? Ducimus voluptas repudiandae repellendus enim porro? Minus, perspiciatis?"


  return (
    <section className="content-side-inventory">
      <Notification notification={notification} />
      <div className='inventory-selection row'>
        {items.map((item) => (
          <div className='inventory-item' key={item.id}>
            <div className='inventory-item-image'>
              <img src={item.image} alt={item.name} />
            </div>
            <div className='inventory-item-info'>
              <div className='inventory-item-header'>
                <div className='inventory-item-info-rarity'>
                  {item.rarity}
                </div>
                <div className='inventory-item-info-id'>
                  # {item.id}
                </div>
                </div>
                <div className='inventory-item-info-name'>
                  {item.name}
                </div>

                <div className='inventory-item-info-score'>
                <img src={logo} alt="logo"/>
                  {item.score}
                </div>
                {item.id === 'temporal' ?
                <>
                <div className='progress-box'>
                <div className='inventory-item-progressBar'>
                </div>
                </div>
                <div className='inventory-item-actualprogress'>
                {item.progressBar}/{item.progressBarMax}
                </div>
                </>
                :
                <div className='inventory-item-sellbtn'>
                  <button>Sell</button>
                </div>
              }
              </div> {/*item info */}
            </div>
        ))}
          </div>
    </section>
  )
}
