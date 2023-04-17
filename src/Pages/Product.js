import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeProduct } from '../redux/slice'

const Product = () => {
    const { slice } = useSelector((state) => state?.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = () => {
        navigate("/addProduct")
    }

    const handleDelete = (id) => {
        // console.log("id",id)
        alert("Are you sure want to delete it")
        let del = slice.filter((i => i?.id !== id))
        // console.log("del",del)
        dispatch(removeProduct({del}))
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 mt-3'>
                        <button type='button' className='btn btn-primary' onClick={handleNavigate}>Add Product</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row '>
                    <div className='col col-lg-3'>
                        {slice?.length ? slice?.map((item, index) => {
                            // console.log("ite", item)
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
                                        <div className="card-body">
                                            <Link to={`/list/${item?.id}`} className="card-link text-decoration-none">Edit</Link>
                                            <button type='button' className='btn btn-danger ms-5' onClick={() => handleDelete(item?.id)}>Delete</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : ""}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product