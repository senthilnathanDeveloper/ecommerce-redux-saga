import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../redux/slice'

const initialState = {
    brand:"",
    description:"",
    price:"",
    id:""
  }

const AddProduct = () => {
    const dispatch = useDispatch()
    const [form,setForm] = useState(initialState)
    const {brand,description,price,id} = form;
    const [errorObj, setErrorObj] = useState({})
    const navigate = useNavigate()


    const handleChange = (e) => {
        let errors = { ...errorObj }
        const {name,value} = e.target;
        errors[e.target.name] = e.target.value ? "":`Please enter ${name}` 
        setForm({
            ...form,
            [name]:value,
        })
        setErrorObj({...errors})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
            return
          }
        if(brand && description && price && id){
            dispatch(addProduct(form))
            navigate("/")
            
          }
        //   console.log("form",form)
    }

    const validate = () => {
        let hasError = false;
        let errors = {...errorObj}
        if(!form?.brand){
          errors[`brand`] = "Product is Required";
          hasError = true
        }
      
        if(!form?.description){
          errors[`description`] = "Description is Required";
          hasError = true
        }
      
        if(!form.price){
          errors[`price`] = "Price is Required";
          hasError = true
        }
        if(!form?.id){
            errors[`id`] = "Product id is Required";
            hasError = true
          }
        
        setErrorObj({...errors})
        return hasError;
      
      }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mt-5'>
                    <div className="mb-3">
                            <label className="form-label">Product ID</label>
                            <input type="number" className="form-control" name='id' onChange={handleChange} value={id ||""} />
                            {errorObj && errorObj["id"] && <span style={{color:"red"}}>{errorObj["id"]}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Brand</label>
                            <input type="text" className="form-control" name='brand' onChange={handleChange} value={brand ||""} />
                            {errorObj && errorObj["brand"] && <span style={{color:"red"}}>{errorObj["brand"]}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' onChange={handleChange} value={description || ""} />
                            {errorObj && errorObj["description"] && <span style={{color:"red"}}>{errorObj["description"]}</span>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" name='price' onChange={handleChange} value={price || ""}  />
                            {errorObj && errorObj["price"] && <span style={{color:"red"}}>{errorObj["price"]}</span>}
                        </div>
                        <div className='mb-3'>
                            <button type='button' className='btn btn-success' onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct