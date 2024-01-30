import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const BreadCrumb = () => {
    const location = useLocation();
    let curretPath = "";
    const crumb = location.pathname.split('/')
  return (
    <div>
      
    </div>
  )
}

export default BreadCrumb
