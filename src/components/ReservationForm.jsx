import axios from 'axios';
import React, { useState } from 'react'
let id = 0;
function ReservationForm() {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [nameType, setNameType] = useState('');
    const [prevWord, setPrevWord] = useState('');
    const [nextWord, setNextWord] = useState('');
    const reqObj = [{
        nameType: nameType,
        prevWord: prevWord,
        nextWord: nextWord,
        names: names
    }]
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(reqObj);
        
        axios.post("json/formData.json", reqObj)
        .then(response => {
            response.json()
        })
    }
    return (
        <div className='m-4 p-4 bg-white'>
            <div className='d-flex d-flex-row '>
                <h1 className='mb-4'>الاسم التجاري</h1>
                <i className="fa fa-exclamation-circle warrning-icon " aria-hidden="true"></i>
            </div>
            <form onSubmit={handleSubmit}>
                <h6 >حدد نوع الاسم التجاري</h6>
                <div className='row'>
                    <div className="form-check col-md-4 border py-2 my-4">
                        <input className="form-check-input radio-btn" type="radio" name="nameType" value={'اسم خاص'} onChange={e => setNameType(e.target.value)} />
                        <label className="form-check-label" >اسم خاص</label>
                        <i className="fa fa-exclamation-circle warrning-icon" aria-hidden="true"></i>


                    </div>
                    <div className="form-check form-check-inline col-md-4 border py-2 my-4">
                        <input className="form-check-input radio-btn" type="radio" name="nameType" value={'اسم مقترح'} onChange={e => setNameType(e.target.value)} />
                        <label className="form-check-label">اسم مقترح</label>
                        <i className="fa fa-exclamation-circle warrning-icon" aria-hidden="true"></i>


                    </div>
                </div>
                <h6>اختر الكلمه السابقه و الكلمه اللاحقه التي ستضاف الي الاسم التجاري</h6>
                <div className='row'>
                    <div className='form-group col-md-4 my-4'>
                        <label className='text-muted'>نوع المنشأه "الكلمه السابقه"</label>
                        <select className="form-select rounded-0"  value={prevWord} onChange={e => setPrevWord(e.target.value)}>
                            <option >مركز</option>
                            <option >One</option>
                            <option >Two</option>
                            <option >Three</option>
                        </select>
                    </div>
                    <div className='form-group col-md-4 my-4'>
                        <label className='text-muted'>نوع النشاط "الكلمه اللاحقه"</label>
                        <select className="form-select rounded-0"  value={nextWord} onChange={e => setNextWord(e.target.value)}>
                            <option>للتجاره</option>
                            <option >One</option>
                            <option >Two</option>
                            <option >Three</option>
                        </select>
                    </div>
                </div>

                <div className='row mb-5'>
                    <div className="form-group col-md-4">
                        <label className='text-muted'>اسم المالك "اسم الكيان"</label>
                        <input type="ownerName" className="form-control rounded-0" value={newName} onChange={e => setNewName(e.target.value)} />
                    </div>
                    <button type='button' className='add-btn col-md-4' onClick={() => {
                        setNewName('');
                        names.push({
                            id: id++,
                            newName: newName
                        })
                    }}><i className="fa fa-plus" aria-hidden="true"></i>
                        اضافه اسم</button>
                </div>
                <div className='row'>
                    {names.map(name => (
                        <div className='col-md-5 m-2 text-white p-2' style={{ backgroundColor: 'rgb(7, 7, 88)' }} key={name.id}>
                            <div className='row d-flex justify-content-between'>
                                <p className='col-md-4'>الاسم التجاري الكامل</p>
                                <button type='button' className='col-md-4 btn btn-link text-decoration-none text-white' style={{ textAlign: 'left' }} onClick={() => { setNames(names.filter(selectedName => selectedName.id !== name.id)) }} >
                                    حذف
                                    <i className="fa fa-times mx-2" aria-hidden="true"></i>
                                </button>
                            </div>
                            <h5>{name.newName}</h5>
                        </div>
                    ))
                    }
                </div>
                <button type="submit" className="btn btn-primary rounded-0 next-btn">التالي</button>
            </form>
        </div>
    )
}

export default ReservationForm