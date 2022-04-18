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

  const common = 'rgb(106,106,106)'
  const uncommon = 'linear-gradient(90deg, rgba(38,32,208,1) 0%, rgba(5,3,74,1) 86%)';
  const rare = 'linear-gradient(90deg, rgba(167,32,208,1) 0%, rgba(46,3,74,1) 86%)';
  const legendary = 'linear-gradient(90deg, rgba(208,178,32,1) 0%, rgba(74,72,3,1) 86%)';

  return (
    <section className="content-side-inventory">
      <Notification notification={notification} />
      <div className='inventory-selection row'>
        {items.map((item) => (
          <div className='inventory-item' key={item.id}
          style={{
            background:{
              'Common': common,
              'Uncommon': uncommon,
              'Rare': rare,
              'Legendary': legendary
            }[item.rarity]
          }}
          >
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
                  <div className='inventory-item-progressBar-fill' style={{width: `${item.progressBar/item.progressBarMax*100}%`}}></div>
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
