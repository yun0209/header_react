import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import yysnavi from './data.json';
import './css/header.css';
import { Link, Route, Routes } from 'react-router-dom';

function Header_yys() {
  const { gnb } = yysnavi;
  const [isGnbVisible, setIsGnbVisible] = useState(false);
  const [isBstyleActive, setIsBstyleActive] = useState(false);

  const toggleGnb = () => {
    setIsGnbVisible(!isGnbVisible);
    setIsBstyleActive(!isBstyleActive);
  };

  useEffect(() => {
    const gnbli = document.querySelectorAll('.gnb_li');
    gnbli.forEach((v) => {
      v.addEventListener('click', () => {
        const targetnum = parseInt(v.dataset.num);
        console.log(targetnum, v.dataset.num, typeof v.dataset.num);
        for (let x = 0; x < gnbli.length; x++) {
          if (x === targetnum) {
            gnbli[x].classList.toggle('action');
          } else {
            gnbli[x].classList.remove('action');
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    if (isGnbVisible) {
        
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      document.body.style.backgroundColor = '';
      

    }
  }, [isGnbVisible]);

  return (
    <>
      <header id="hd_yys" className="fixed-top d-flex justify-content-between align-items-center">
        <div className="fixed-top onj d-flex justify-content-between align-items-center h-100px bg-white">
          <h1 className="mx-60">
            <Link to={yysnavi.logo.href} className="w-100 h-100">
              <img src={yysnavi.logo.img} alt="Logo" />
            </Link>
          </h1>

          <ul className={`font_navi fixed-top d-lg-flex justify-content-center align-items-center gnb mb-0 ps-0 ${isGnbVisible ? 'd-block' : ''}`}>
            {gnb.map((v, i) => (
              <li className={`gnb_li ${v.cls}`} data-num={i} key={i}>
                <a href="#none" className="gnb_a">
                  <span>{v.Text}</span>
                </a>
                <ul className="gnb_ul">
                  {v.gnb_ul_li.map((vv, ii) => (
                    <li className="gnb_ul_li" key={ii}>
                      <Link to={vv.href}>
                        <span>{vv.Text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="login mx-60">
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
          
          <button onClick={toggleGnb} className="d-lg-none btn-cotm mx-60">
          <i className={`bi ${isGnbVisible ? 'bi-x' : 'bi-list'} icon-cotm`}></i>
          </button>
        </div>
      </header>
      

      <Routes>
        <Route path="/about" element={<h2>ddd</h2>} />
      </Routes>
    </>
  );
}

export default Header_yys;
