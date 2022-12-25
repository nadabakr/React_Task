import React, { useState } from 'react';
import i18n from '../i18n/i18n';

function AppHeader() {
    const [lanText, setLanText] = useState('ENGLISH');
    function changeLocale(lan) {
        i18n.changeLanguage(lan);
        lanText == 'ENGLISH' ? setLanText('ARABIC') : setLanText('ENGLISH')
        // lanText == 'ENGLISH' ? document.body.style.direction = 'ltr':  document.body.style.direction = 'rtl'
    }
    return (
        <div className='row text-white d-flex justify-content-between req-header'>
            <div className='col-md-4 text-center d-flex flex-row p-3'>
                <i className="fa fa-user-o pt-1" aria-hidden="true"></i>
                <p className='px-3'>أحمد خالد الغامدي</p>
                <i className="fa fa-chevron-down pt-1" aria-hidden="true"></i>
            </div>
            <div className='col-md-4' style={{ textAlign: 'left' }}>
                <button type='button' className='btn btn-link text-white text-decoration-none' onClick={() => changeLocale(lanText == 'ENGLISH' ? 'en' : 'ar')} >{lanText}</button>
            </div>
        </div>)
}

export default AppHeader