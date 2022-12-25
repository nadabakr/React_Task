import React from 'react'
import logo from '../sdai-logo.png'
function ReqFooter() {
  return (
    <div className='text-white text-center p-2'>
      <div className='w-50' style={{ margin: 'auto' }}>
        <p>تطوير الهيئه السعودية للبيانات و الذكاء الاصطناعي
          <img src={logo} style={{ width: '15%', marginRight: '1rem' }} />
        </p>
      </div>
      <hr></hr>
      <p>جميع الحقوق محفوظة للمركز السعودي للإعمال الاقتصادية 2021©</p>
    </div>
  )
}

export default ReqFooter