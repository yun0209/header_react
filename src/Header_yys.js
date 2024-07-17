import React from 'react'
import ugly_us_logo from './img/img_yys/svg/ugly_us_logo.svg';
import './css/header.css'

function Header_yys() {
    return (
        <>
           <header id="hd_yys" className="fixed-top flexbetween_yys">
                <div className="fixed-top flexbetween_yys">
                    <h1 className="mx-4">
                    <a href="">
                        <img src={ugly_us_logo} alt="Logo" />
                    </a>
                    </h1>
                    <ul className="font_navi flexcenter gnb mb-0 ps-0">
                    <li className="nav-mission px-60 gnb_li rel">
                        <a className="d-block gnb_a" href="#about">
                        <span>우리의미션</span>
                        </a>
                        <ul className="gnb_ul abs">
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>미션</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>소싱철학</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-mission px-60  gnb_li rel">
                        <a className="d-block gnb_a" href="#about">
                        <span>정기배송</span>
                        </a>
                        <ul className="gnb_ul abs">
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>후기</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>혜택</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>이용안내</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-mission px-60 gnb_li rel">
                        <a className="d-block gnb_a" href="#about">
                        <span>싱싱마켓</span>
                        </a>
                        <ul className="gnb_ul abs">
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>인기상품</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>대기중인상품</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-mission px-60 gnb_li rel">
                        <a className="d-block gnb_a" href="#about">
                        <span>커뮤니티</span>
                        </a>
                        <ul className="gnb_ul abs">
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>오늘의 레시피</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>채소이야기</span>
                            </a>
                        </li>
                        <li className="gnb_ul_li">
                            <a href="">
                            <span>어글리어스 밥풀루언서</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                    <div className="login">
                    <ul className="d-flex px-0 my-0">
                        <li className="me-3 font_login">
                        <a className="nav-link font_login_pyj" href="#about">
                            로그인
                        </a>
                        </li>
                        <li className="font_login mx-4">
                        <a className="nav-link me-0 font_login_pyj" href="#portfolio">
                            회원가입
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
           </header>
            
        </>

        
    )
}

export default Header_yys;
