import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
const Hero = () => {
    const transition = {duration:3,type:"spring"}
  return (
    <div className={css.hero}>
        {/* Left Sides */}

        <div className={css.h_sides}>
            <span className={css.text}>Skin Protection</span>
            <div className={css.text2}>
                <span>Trendy Collection</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quas impedit dicta.</span>
            </div>
        </div>

        {/* Middle Hero Section */}
        <div className={css.wrapper}>
            <motion.div 
            className={css.blueCircle}
            initial={{ bottom:"2rem" }}
            whileInView={{ bottom:"0rem" }}
            transition={transition}></motion.div>
            <motion.img src={HeroImg}
             width='600' alt="" 
             initial={{ bottom:"-2rem" }}
            whileInView={{ bottom:"0rem" }}
            transition={transition}/>
            <motion.div className={css.cart2}
            initial={{ right:"10%" }}
            whileInView={{ right:"5%" }}
            transition={transition}
            >
                
                <RiShoppingBagFill />
                <div className={css.signup}
                
                >
                    <span>Best Signup Offers</span>
                    <div className={css.cart2Icon}>
                        <BsArrowRight />
                    </div>
                </div>
            </motion.div>
        </div>


        {/* Left Sidex */}
        <div className={css.h_sides}>
            <div className={css.trafic}>
                <span>1.5m</span>
                <span>Monthly Trafic</span>
            </div>
            <div className={css.customer}>
                <span>100K</span>
                <span>Happy Customer</span>
            </div>
        </div>
    </div>
  )
}

export default Hero