import { createSlice } from "@reduxjs/toolkit";
import iPhone from '../assets/iPhone.jpg'
import samsung from '../assets/samsung.jpg'
import redmi from '../assets/redmi.jpg'
import oppo from '../assets/oppo.jpg'
import vivo from '../assets/vivo.jpg'

export const slice = createSlice({
    name:"product",
    initialState:{
        slice:[
            {id:1,title:"phone",description:"An apple phone which is nothing like apple",price:50000,brand:"Apple",category:"smartPhone",imageUrl:iPhone},
            {id:2,title:"phone",description:"An apple phone which is nothing like apple",price:25000,brand:"Redmi",category:"smartPhone",imageUrl:redmi},
            {id:3,title:"phone",description:"An apple phone which is nothing like apple",price:30000,brand:"Samsung",category:"smartPhone",imageUrl:samsung},
            {id:4,title:"phone",description:"An apple phone which is nothing like apple",price:20000,brand:"Oppo",category:"smartPhone",imageUrl:oppo},
            {id:5,title:"phone",description:"An apple phone which is nothing like apple",price:30000,brand:"Vivo",category:"smartPhone",imageUrl:vivo},
        ]
    },
    reducers:{
        postDataSuccess(state,action) {
            console.log("action",action)
            state?.slice?.push(action?.payload);
        },
        addProduct:(state,action) => {
            state.slice.push(action?.payload)
        },
        removeProduct:(state,action) => {
            state.slice.push(action?.payload)
        }
    }
})

export const {postDataSuccess,addProduct,removeProduct} = slice?.actions


export default slice.reducer