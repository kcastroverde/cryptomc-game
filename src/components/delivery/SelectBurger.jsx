import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'

export default function SelectBurger(props) {
    const burgers = useSelector(state => state.inventory.burgers);
    const bykes = useSelector(state => state.inventory.bykes);


    return (
        <AnimatePresence>
            {props.showBurger && (
                <motion.div
                    className='invetoryOpen'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ opacity: 0, y: 200, transition: { duration: 0.5 } }}
                    transition={{ type: 'spring', stiffness: 80 }}
                >
                    <div className='closeButton' onClick={() => props.close()}>X</div>
                    <h2>Motor Bike Inventory</h2>
                    <div className='inventory-select'>
                        {burgers.map((burger, index) => (
                            <div className='invetory-item' key={index}>
                                <div className='item-header'>
                                    <div className='stars'>
                                        <p>level: </p>
                                    </div>
                                    <div className='progress-box'>
                                        <div className='inventory-item-progressBar'>
                                            <div className='inventory-item-progressBar-fill' style={{ width: `${burger.progressBar / burger.progressBarMax * 100}%` }}></div>
                                        </div>
                                    </div>

                                    <div className='id'><p>ID:{burger.id}</p></div>
                                </div>
                                <div className='item-body'>
                                    <div className='item-img'>
                                        <img src="" alt='' />
                                    </div>
                                </div>
                                <div className='item-footer'>
                                    <button className='btn-select'>Select</button>

                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
