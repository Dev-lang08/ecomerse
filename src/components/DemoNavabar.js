import React from 'react'
import { Link } from 'react-router-dom'

export default function DemoNavabar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
    <Link className="navbar-brand" to="/">UserInfo</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/user">UserDetails</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/product">Product</Link>
        </li>
       
      </ul>
    
    </div>
  </nav>
  )
}
