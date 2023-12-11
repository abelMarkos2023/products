import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'
const Products = () => {
    const [menuData,setMenuData] = useState(ProductsData)
    const [parent] = useAutoAnimate()

    const filterProducts = type => {
        if(type === 'all'){
            setMenuData(ProductsData)
            return;
        }
        setMenuData(ProductsData.filter(p => p.type === type))
    }
    console.log(menuData)
  return (
    <div className={css.container}>
        <div className={css.header}>
            <img src={Plane} alt="" />
            <h3>Our Featured Products</h3>
        </div>
        <div className={css.list}>
        <ul className={css.menu} >
        <span>Filter Product</span>

            <li onClick = {() => filterProducts('all')}>All</li>
            <li onClick = {() => filterProducts('skin care')}>Skin Care</li>
            <li onClick = {() => filterProducts('conditioner')}>Conditioners</li>
            <li onClick = {() => filterProducts('foundation')}>Foundation</li>
        </ul>
        <div className={css.products} ref={parent}>
            {
                menuData.map((product,i) => (
                    <div className={css.product} key={i}>
                        <div className='left'>
                <div className='name'>
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span className="price">{product.price}$</span>
                <div className="more">Shop Now</div>
              </div>
              <img src={product.img} alt="" 
              className="swiper-img"/>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Products