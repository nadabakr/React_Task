import React from 'react'
import { useTranslation } from "react-i18next";
import logo from '../logo.svg'

export const ReqNav = () => {
    const { t } = useTranslation();

    return (
        <div className=' d-flex felx-row justify-content-between header pt-5 '>
            <ul className=" nav justify-content-start">
                <li className="nav-item">
                    <a className="nav-link active text-white" href="#">{t('BusinessPlatform')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">{t('ElectronicServices')}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">{t('ContactUs')}</a>
                </li>
            </ul>
            <img src={logo}  alt="Logo" className='logo' />
        </div>

    )
}
