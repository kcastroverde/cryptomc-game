import React, { useState, useEffect } from 'react';
import MotoA from '../../images/tools/MotoA.png';
import MotoB from '../../images/tools/MotoB.png';
import MotoC from '../../images/tools/MotoC.png';
import plus from "../../images/svg/pluschoice.svg";
import { motion, AnimatePresence } from 'framer-motion';
import SelectBurger from './SelectBurger';

export default function BykeforRun(props) {
    const [backgroundByke, setBackgroundByke] = useState(null);
    const [burgerBag, setBurgerBag] = useState([]);
    const [currentSpace, setCurrentSpace] = useState([]);
    const [spaceDisponible, setSpaceDisponible] = useState([]);
    const [showBurger, setShowBurger] = useState(false);
    const customSpace = 3;

    useEffect(() => {
        if (props.byke.level === 1) {
            setBackgroundByke(MotoA);
        }
        if (props.byke.level === 2) {
            setBackgroundByke(MotoB);
        }
        if (props.byke.level === 3) {
            setBackgroundByke(MotoC);
        }
        emptySpace();
        disponibleSpace();
    }, [props.byke])

    const emptySpace = () => {
        let spaceCounter = [];
        const counter = customSpace - props.byke.level
        for (let i = 0; i < counter; i++) {
            spaceCounter.push([{space:i}]);
        }
        setCurrentSpace(spaceCounter);
    }

    const disponibleSpace = () => {
        let spaceCounter = [];
        let burger = burgerBag.length
        const counter = props.byke.level - burger
        for (let i = 0; i < counter; i++) {
            spaceCounter.push([{space:i}]);
        }
        setSpaceDisponible(spaceCounter);
    }

    const showBurgerInventory = () => {
        setShowBurger(true);
    }



    return (
    <>
        <SelectBurger showBurger={showBurger} />

        <AnimatePresence>
            {props.byke &&(
        <motion.div 
        className='byke-menu'
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, y:200, transition: { duration: 0.5 } }}
        >
            <div className='byke-menu-img'>
                <div className='bag-burgers'>
            {spaceDisponible.map((space, index)=>
                <div className='freeBox' key={index}></div>)}
            {currentSpace.map((space, index)=>
                <div className='closeBox' id={`space${index}`} key={index}></div>)}
                </div>
                
                 <img id='bgdByke' src={backgroundByke} alt={backgroundByke} /> 
                

                <div onClick={showBurgerInventory} className='choose-burger'>
                    <p>Select Burgers</p>
                    <div className='imgbox2'>
                        <img src={plus} alt={plus} />
                    </div>
                </div>
            </div>
            <div className='byke-info'>

            </div>

        </motion.div>
        )}
        </AnimatePresence>
    </>
    )
}
