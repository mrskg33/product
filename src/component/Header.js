import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href=" ">
          IndiaStore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page" >
                Home
              </Link>
            </li>
           
            <li className="nav-item">
              <Link to="/product" className="nav-link" href=" ">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dynamicForm" className="nav-link" href=" ">
                Dynamic Form
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dynamicTable" className="nav-link" href=" ">
                Dynamic Table
              </Link>
            </li>
            
              </ul>
       
          <div className="buttons">
            <Link to="/add" className="btn btn-outline-primary" >Add
            <i className="fa fa-plus ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
    </div>
  )
}

export default Header
