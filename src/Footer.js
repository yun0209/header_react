import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';
function Footer() {
    return (
        <footer id='yfooer' className='mb-5'>

            <div className='d-flex justify-content-between align-items-center mb-2'>
                <p>어글리어스 고객센터 070.4769.0271</p>
                <ul className='d-none d-lg-block d-lg-flex justify-content-between me-0 ms-0 snsicon'>
                    <li>
                        <a href="#"><img src="/img/svg/sns_Instar.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src="/img/svg/sns_kakao.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#"><img src="/img/svg/sns_X.svg" alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src="/img/svg/sns_face.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='mb-5'>
                <div className='d-flex align-items-center justify-content-between mb-5 tiem '>
                    <ul className=''>
                        <li>화-목요일</li>
                        <li>월·금요일</li>
                        <li>토·일·공휴일
                        </li>
                    </ul>
                    <ul className=' text-wrap '>
                        <li>11:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</li>
                        <li>09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)</li>
                        <li>휴무</li>
                    </ul>

                </div>
                <div>
                    <button className='me-2'>문의하기</button>
                    <button>문의하기</button>

                </div>
                
                
            </div>

            <div className='d-flex justify-content-between align-items-center'>
                <h2>
                    <a href="#">
                       <img src="/img/svg/ugly_us_logo.svg" alt="로고" />
                    </a>
                </h2>
                <ul className='text-end about'>
                    <li>
                        <p>
                            <strong>상호명</strong>: 주식회사 캐비지 | <strong>대표</strong>: 최현주 | <strong>사업자등록번호</strong>: 572-81-02287 | <strong>소재지</strong>: 서울특별시 영등포구 양평로 144, 8층(양평동5가)
                        </p>
                    </li>

                    <li>
                        <p>
                           <strong>통신판매업 신고번호 </strong>: 2021-화성동부-0302 | <strong>제휴 및 납품 문의</strong>: biz@uglyus.co.kr | <strong>농산물 납품 및 긴급구출 제보</strong>: farm@uglyus.co.kr
                        </p>
                    </li>

                    <li>
                        서비스 이용약관개인정보 처리방침Copyright ⓒ 2024 주식회사 캐비지 All rights reserved.
                    </li>
                </ul>

            </div>


        </footer>
    );
}

export default Footer;
