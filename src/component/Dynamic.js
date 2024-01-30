import React, { useState } from "react";
import { data } from "./db";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action";
const Dynamic = () => {
  const [inputValues, setInputValues] = useState({
  fName: "",
  lName: "",
  age: "",
  email: "",
  gender:"",
  city:'',});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newObj = {
      ...inputValues,
      [e.target.name]: e.target.value,
    };
    setInputValues(newObj);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      fName: inputValues.fName,
      lName: inputValues.lName,
      age: inputValues.age,
      email: inputValues.email,
      city:inputValues.city,
      gender:inputValues.gender,
    };
    console.log("newProduct: " ,newProduct)
    dispatch(addProduct(newProduct));
    
  };

  return (
    <>
      <form
        className="d-flex flex-wrap flex-column justify-content-center align-items-center mt-2 "
        onSubmit={handleOnSubmit} style={{position:'relative'}}
      >
        <div
          className="card shadow bg-white rounded mt-1 "
          style={{ maxwidth: "53rem" }}
        >
          <ul className="list-group list-group-flush p-2" style={{ maxwidth: "53rem" }}>
            <li className="list-group-item shadow p-2 mb-2 bg-info   rounded">
              <div className="row g-3 align-items-center">
                <div className="row g-2 d-flex  ms-2 align-items-center">
                  {data.fields.map((fields, idx) => {
                    if (fields.fieldtype !== "select") {
                      return (
                        <>
                          <div className="col-auto d-flex fle">
                            <div className="col-auto d-flex flex-column">
                              <label
                                htmlFor={fields.htmlfor}
                                className="col-form-label"
                              >
                                {fields.lable}
                              </label>
                            </div>
                            <input
                              type={fields.fieldtype}
                              min={fields.min}
                              name={fields.fieldname}
                              placeholder={fields.placeholder}
                              id={fields.id}
                              className={fields.classname}
                              aria-describedby={fields.aria_describedby}
                              value={fields.value}
                              style={{
                                maxwidth: fields.width,
                                marginLeft: fields.marginLeft,
                              }}
                              onChange={handleInputChange}
                            />
                          </div>
                        </>
                      );
                    }
                    if (fields.fieldtype === "select") {
                      return(
                        <>
                        <select
                        className="form-select"
                        aria-label="Default select example"
                        value={inputValues.city}
                        onChange={handleInputChange}
                      >
                        {fields.option.map((option, ind) => {
                          return (
                            <option
                              value={option.value}
                              selected={option.default}
                              name={option.name}
                              
                            >
                              {option.name}
                            </option>
                          );
                        })}
                      </select>
                        </>
                      )
                      
                    }
                  })}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default Dynamic;
