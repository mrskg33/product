import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action";

const Product = () => {
  const [Row, setRow] = useState([{}]);
  const [product, setProduct] = useState({
    date: "",
    sLONo: "",
    CName: "",
    ToSO: "",
    pName:"",
    oQuantity:"",
    sRate:"",
    amount:'',
    row:0
  });
  
  const dispatch = useDispatch();
  
  const Mdata = [
    { name: "Select Medicine", id: 1, selected:'true' },
    { name: "Dolo", id: 1, price: 25 },
    { name: "Paracetamol", id: 2, price: 20 },
    { name: "Vicks", id: 3, price: 16 },
    { name: "Lyrica", id: 4, price: 30 },
    { name:"Lofexidine", id:5, price:40}
  ];
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  

  };
  
const handleInputChange=(e,index,field)=>{
    let data = Row;
    data[index][field] = e.target.value
    if(field === "qauntity"){
      let qt = data[index]["qauntity"]=e.target.value;
      let sr = data[index]["rate"]=e.target.value;
      let amount = qt*sr
      data[index]["amount"]=amount
    }
    if(field === "productName"){
      const filteredData = Mdata.filter((item) =>{
      return item.name.toLowerCase().includes(product.pName.toLowerCase())}
  );
    }
}
const filteredData = Mdata.filter((item) =>{
  return item.name.toLowerCase().includes(product.pName.toLowerCase())}
);
  
 
  const addProducts = () => {
    console.log("Row Added");
    let data = Row;
    data.push({});
    setRow([...data]);
    console.log("Row Size: ", Row.length);
  };
  console.log("Row Size: ", Row.length);
 const calculateAmount = () =>{
    return product.amount= product.oQuantity * product.sRate;
 }

  const orderProducts = (event) => {
    event.preventDefault();
    const newProduct = {
      date: product.date,
      sLONo: product.sLONo,
      CName: product.CName,
      ToSO: product.ToSO,
      oQuantity:product.oQuantity,
      pName:product.pName,
      amount:product.amount,
      row:Row.length
      
    };
   
    console.log("newProduct: " ,newProduct)
    dispatch(addProduct(newProduct));
  };
  return (
    <>
      <form className="d-flex flex-wrap flex-column justify-content-center align-items-center mt-2 ">
        <h1 className="text-success"> Order</h1>
        <div
          className="card shadow bg-white rounded mt-1 "
          style={{ maxWidth: "43rem" ,minHeight:"30rem"}}
        >
          <ul className="list-group list-group-flush p-2" style={{maxWidth:'43rem', minHeight:"3rem",}}>
            <li className="list-group-item shadow p-2 mb-2 bg-info   rounded">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputDate" className="col-form-label">
                    Enter Date
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="date"
                    value={product.date}
                    name="date"
                    placeholder="Enter Date"
                    style={{ maxWidth: "16rem", marginLeft: "21px" }}
                    id="inputDate"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item shadow p-2 mb-2 bg-white rounded">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputSlono" className="col-form-label">
                    Sales Order No.
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="number"
                    placeholder="Enter Sales Order No."
                    name="sLONo"
                    value={product.sLONo}
                    style={{ maxWidth: "16rem", marginLeft: "24px" }}
                    id="inputSlono"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item shadow p-2 mb-2 bg-info rounded">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputCName" className="col-form-label">
                    Costemer Name
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    value={product.CName}
                    name="CName"
                    placeholder="Enter Customer Name"
                    style={{ maxWidth: "16rem" }}
                    id="inputCName"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item shadow p-2 mb-2 bg-white rounded">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="inputTSo" className="col-form-label">
                    Type Of Sales Order
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    value={product.ToSO}
                    name="ToSO"
                    placeholder="Enter Type Od Sales Order"
                    style={{ maxWidth: "16rem", marginLeft: "26px" }}
                    id="inputTSo"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </li>
            <li className="list-group-item shadow bg-info   rounded">
              <div className="table-responsive  ">
                <table className="table shadow rounded ">
                  <thead className="thead bg-info">
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Orderred Quantity</th>
                      <th scope="col">Sales rate</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Option Selection</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Row.map((val, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="col-auto">
                              <input
                                type="text"
                                value={product.pName}
                                name="pName"
                                placeholder="Product Name"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                onChange={handleChange}
                                style={{ maxWidth: "8rem" }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="col-auto">
                              <input
                                type="number"
                                value={product.oQuantity}
                                name="oQuantity"
                                placeholder="Enter Order Quantity"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                onChange={handleChange}
                                style={{ maxWidth: "8rem" }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="col-auto">
                              <input
                                type="number"
                                value={product.sRate}
                                name="sRate"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                onChange={handleChange}
                                style={{ maxWidth: "8rem" }}
                                
                              />
                            </div>
                          </td>
                          <td>
                            <div className="col-auto">
                              <input
                                type="number"
                                value={product.amount = calculateAmount()}
                                name="amount"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                                onChange={handleChange}
                                style={{ maxWidth: "8rem" }}
                                readOnly
                              />
                            </div>
                          </td>
                          <td>
                            <div className="col-auto">
                              <select 

                                class="form-select"
                                aria-label="Default select example"
                              >
                                {filteredData.map((item) => (
                                  <option key={item.id} value={item.value} selected={item.selected}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </li>
          </ul>

          <div className="button mt-2 p-1 mb-2 d-flex justify-content-center">
            <button
              type="button"
              onClick={addProducts}
              className="btn btn-success "
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="button mt-4 shadow  rounded">
          <button onClick={orderProducts} className="btn btn-success ">
            Order
          </button>
        </div>
      </form>
    </>
  );
};

export default Product;
