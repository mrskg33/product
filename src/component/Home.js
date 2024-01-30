import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Home = () => {
    const products = useSelector((state)=>state.productData)
    console.log(products.CName)
  return (
    <>
      <table className="table ">
      <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Date</th>
      <th scope="col">Bill To</th>
      <th scope="col">S.O.no</th>
      <th scope="col">TyPe of Sales</th>
      <th scope="col">Products</th>
      <th scope="col">Amount</th>
      <th scope="col">Qauntities</th>
    </tr>
    </thead>
    <tbody>
        {products.map((product,index)=>(
      
          <tr key={index}>
            <td>{index+1}</td>
            <td>{product.date}</td>
            <td>{product.CName}</td>
            <td>{product.sLONo}</td>
            <td>{product.ToSO}</td>
            <td>{product.row}</td>
            <td>{product.amount}</td>
            <td>{product.oQuantity}</td>
            <td >
              <Link id={index}
           to={`/update/${product.pCode}`}className="btn btn-primary">Edit</Link>
          
            </td>
          </tr>
        ))

        } 
    </tbody>
    </table>
    </>
  )
}

export default Home
