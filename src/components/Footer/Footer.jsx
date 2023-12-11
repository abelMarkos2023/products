import React from 'react'
import css from './Footer.module.css'
import {LocationMarkerIcon,PhoneIcon,InboxIcon,LoginIcon,LinkIcon,UserIcon}from "@heroicons/react/outline"
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr />
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>eCommerce</span>
            </div>
            <div className={css.contact}>
                <h2 className={css.title}>Contact us</h2>
                <div className={css.contactItem}>
                    <LocationMarkerIcon className={css.icon}/>
                    <span>New Yourk City 11th st fifth avenue</span>
                </div>
                <div className={css.contactItem}>
                    <PhoneIcon className={css.icon}/>
                    <span>+20 122 632 851 3</span>
                </div>
                <div className={css.contactItem}>
                    <InboxIcon className={css.icon}/>
                    <span>abelmarkos2023@gmail.com</span>
                </div>
            </div>
            <div className={css.account}>
                <h2 className={css.title}>Account</h2>
                <div className={css.contactItem}>
                    <LoginIcon className={css.icon}/>
                    <span>Login</span>
                </div>
            </div>
            <div className={css.company}>
            <h2 className={css.title}>Company</h2>
                <div className={css.contactItem}>
                    <UserIcon className={css.icon}/>
                    <span>About us</span>
                </div>
            </div>
            <div className={css.resource}>
            <h2 className={css.title}>Company</h2>
                <div className={css.contactItem}>
                    <LinkIcon className={css.icon}/>
                    <span>Resource</span>
                </div>
            </div>
        </div>
        <p className={css.copyright}>
            &copy; Copyright 2023-2024 By Markos.Ink All Right Reserved
        </p>
    </div>
  )
}

export default Footer