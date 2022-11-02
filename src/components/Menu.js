import React from 'react'
import {useInfoContext} from '../context/InfoContext'
import { Link } from 'react-router-dom'
import logo from '../imagen/logo.png'
function Menu() {
    const {rutas, sendSearch}= useInfoContext()

   


    return (
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <Link to={'/'} className="logo" ><b>G<span>a</span>m<span>e</span>s</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <form className="d-flex" onSubmit={sendSearch}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                {rutas.map((item, index) => (
                                    <Link
                                    to={'/category/'+item}
                                    key={item}
                                    className='categorias'
                                    
                                    >
                                    {item}
                                    </Link>
                                ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu