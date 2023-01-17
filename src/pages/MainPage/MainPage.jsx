import React from "react";
import logo from './../../logo.svg';
import './MainPage.css';

function MainPage(props) {
  return (
    <div className="main_page">
        <div className="main_page_content">
            <p className="web_title" id="title_1">Digital Invitation Provider</p>
            <p className="web_title" id="title_2">For Your Wedding Event</p>
            <p className="web_desc">Sebarkan informasi resepsi pernikahanmu kepada kerabat secara cepat dan mudah dengan fitur yang kami sediakan</p>
            <button className="btn_order" onClick={() => window.location.href='https://www.instagram.com/naufalwdd/'}>Pesan Sekarang</button>
        </div>
    </div>
  );
}

export default MainPage