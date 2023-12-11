import React,{useState} from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
const Header = () => {
    const [menu,setMenu] = useState(false) 
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={Logo} alt="" />
            <span>eCommerce</span>
        </div>
        <div className={css.right}>
            <div className={css.bars}>
                <GoThreeBars onClick={() => setMenu(!menu)}/>
            </div>
        {menu && <div className={css.menu}>
            <ul className={css.list}>
                <li>Collections</li>
                <li>Brands</li>
                <li>News</li>
                <li>Sales</li>
                <li>EN</li>
            </ul>
            </div>}
            <input type="text" className={css.input} placeholder='Search Products...'/>
            <div className={css.icon}>
                <CgShoppingBag />
            </div>
        </div>
    </div>
  )
}

export default Header
