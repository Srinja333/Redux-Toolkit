import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import {STATUSES, fetchProducts} from '../store/productSlice'


function Products() {
    // const [products, setProducts] = useState([])
    const dispatch=useDispatch()
    const {data:products,status}=useSelector((state)=>state.product)

    useEffect(() => {

        dispatch(fetchProducts())
        // const fetchProducts = async () => {
        //     const res = await fetch("https://fakestoreapi.com/products")
        //     const data = await res.json()
        //     // console.log("mdd",data)
        //     setProducts(data)
        // }
        // fetchProducts()
    }, [])

    const  handleAddToCart=(product)=>{
    dispatch(add(product))
    }

    if(status===STATUSES.LOADING){
      return<h3>loading....</h3>
    }
    
    if(status===STATUSES.ERROR){
        return<h3>something went wrong....</h3>
    }
    
      
    return (
        <div className='productsWrapper'>

            {
                products.map((product)=>(
                    <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>{handleAddToCart(product)}}className="btn">
                        Add to cart
                    </button>
                </div>    
                ))
            }
        </div>
    )
        
}

export default Products