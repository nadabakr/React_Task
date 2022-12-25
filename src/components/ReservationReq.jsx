import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

const ReservationReq = () => {
  const { t } = useTranslation();
  const [reqInfo, setReqInfo] = useState('');

  return (

    <div className='mx-4 p-4 bg-white'>
      <div className='row'>
        <span className=' col-sm-1'> {t('MainPage')}
        </span>
        <i className="fa fa-chevron-left chervon col-sm-1" aria-hidden="true"></i>
        <span className='text-muted col-sm-4'>{t('RequestToReserveATradeName')}</span>
      </div>
      <h1 >{t('RequestToReserveATradeName')}</h1>
      <form>
        <div className="form-group row">
          <span className='lavender-circle circle1 col-sm-1 mt-2 '>1</span>
          <label className="col-sm-2 col-form-label">{t('EnterTheRequestInformation')}</label>
          <div className="col-sm-4">
            <input type="text" className="form-control line-input" value={reqInfo} onChange={e => setReqInfo(e.target.value)}/>
          </div>
          <span className='lavender-circle col-sm-1 mt-2 text-muted'>2</span>
          <a href='#' className='col-sm-4 text-dark text-decoration-none mt-2'>{t('SendReq')}</a>
        </div>
      </form>
    </div>
  )
}

export default ReservationReq
