import React from 'react'

function Beneficiary() {
  let title = 'تحديد المستفيد من الخدمة';
  let sectionTitle = 'مفوض عن مالك المؤسسة';
  let content = "التخزين في الموانئ و المناطق الجمركية او الحره"
  let transferStatus = " نقل جوي"
  let typeOfActivity = "صناعات تحويليه"

  return (
    <div className='m-4 p-4' style={{ backgroundColor: '#EEF2F9' }}>
      <div className='row  d-flex justify-content-between pb-4'>
        <h1 className='col-md-6'>{title}</h1>
        <a type='button' className='col-md-1 text-decoration-none'>تعديل <i className="fa fa-pencil" aria-hidden="true"></i>
        </a>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <h6>{sectionTitle}</h6>
          <div className='border bg-white p-3'>
            <p>{content}</p>
            <div className='row d-flex justify-content-between'>
            <span className="col-sm-6 text-muted">{typeOfActivity}</span>
            <span className="col-sm-6 text-muted">{transferStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beneficiary