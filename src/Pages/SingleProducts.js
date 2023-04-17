import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postDataSuccess } from '../redux/slice'

const initialState = {
    brand:"",
    desicription:"",
    price:""
  }

const SingleProducts = () => {
    const { id } = useParams()
    const { slice } = useSelector((state) => state?.data)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [form,setForm] = useState(initialState)
    const {brand,description,price} = form;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if(id){
          const singleProd = slice?.find((item) => item?.id == id)
          setForm({...singleProd})
        }
      },[id])

      const handleChange = (e) => {
        let {name,value} = e.target
        setForm({
          ...form,
          [name]:value
        })
       }

       const handleSubmit = (e) => {
        e.preventDefault()
        if(brand && description && price){
            dispatch(postDataSuccess(form))
            setOpen(false)
          }
          console.log("form",form)
       }

    const getProdcuts = () => {
        let val = slice?.length ? slice?.filter((i => i?.id == id)) : "";
        return val?.map((item, index) => {
            return (
                <>
                    <div className='card mt-5'>
                        <img src={item?.imageUrl} className='card-img-top' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>
                                <p className="card-text">{item?.description}.</p>
                            </h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Brand: <span className='fw-bold'>{item?.brand}</span></li>
                            <li className="list-group-item">Category: <span className='fw-bold'>{item?.category}</span></li>
                            <li className="list-group-item">Price: <span className='fw-bold'>{item?.price}</span></li>
                        </ul>
                        <div className='card-body'>
                            <button type="button" className='btn btn-outline-info' data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleOpen}>Edit</button>
                        </div>
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        {getProdcuts()}
                    </div>
                </div>
                <div open={open} onClose={handleClose} className="modal fade" id="staticBackdrop" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" htmlFor="exampleModalLabel">Edit Product</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                               
                                <div className="mb-3">
                                    <label  className="form-label">Brand</label>
                                    <input type="text"  name="brand" onChange={handleChange} value={brand || ""} className="form-control" htmlFor="exampleFormControlInput1" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Brand</label>
                                    <input type="text"  name="description" onChange={handleChange} value={description || ""} className="form-control" htmlFor="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Brand</label>
                                    <input type="text"  name="price" onChange={handleChange} value={price || ""} className="form-control" htmlFor="exampleFormControlInput1" />
                                </div>
                               
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProducts