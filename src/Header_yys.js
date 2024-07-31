import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import yysnavi from './data.json';
import './css/header.css';

import { Link, Route, Routes } from 'react-router-dom';

function Header_yys() {
    const { gnb } = yysnavi;
    return(
        <>
            <header id="hd_yys" className="fixed-top d-flex justify-content-between align-items-center ">
                <div className="fixed-top fixed-top d-flex justify-content-between align-items-center bg-white h-100px">
                    <h1 className="mx-60 ">
                        <Link to={yysnavi.logo.href} className='w-100 h-100'>
                            <img src={yysnavi.logo.img} alt="Logo" />
                        </Link>
                    </h1>
                    
                    
                    <ul className="font_navi fixed-top  d-lg-flex justify-content-center align-items-center gnb mb-0 ps-0">
                    {gnb.map((v, i) => (
                        <li className={v.cls}>
                            <Link className="d-block gnb_a" to={v.href}>
                                <span>{v.Text}</span>
                            </Link>
                            <ul className="gnb_ul d-none">
                                {v.gnb_ul_li.map((vv, ii) => (
                                <li className="gnb_ul_li ">
                                    <Link to={vv.href}>
                                    <span>{vv.Text}</span>
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    </ul>
                    <div className="login mx-60 ">
                        <ul className="d-flex px-0 my-0">
                            <li className="me-3 font_login">
                                <Link className="nav-link font_login_pyj" to="#about">
                                    로그인
                                </Link>
                            </li>
                            <li className="font_login me-3">
                                <Link className="nav-link me-0 font_login_pyj" to="#portfolio">
                                    회원가입
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={()=>{
                        }} className='d-lg-none btn-cotm mx-60'>
                            <i className ='bi bi-list icon-cotm'></i>
                     </button>
                </div>
            </header>
    


           <Routes>
                <Route path="/about" element={<h2>ddd</h2> }>               
                </Route>
           </Routes> 
            
          
        </>

    )

}
    

export default Header_yys;
