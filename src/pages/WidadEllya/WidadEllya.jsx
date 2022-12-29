import React, { useState, useEffect } from "react";
import './WidadEllya.css';
import frame1 from './../../assets/top-left-frame.png'
import frame2 from './../../assets/top-right-frame.png'
import frame3 from './../../assets/bottom-right-frame.png'
import frame4 from './../../assets/bottom-left-frame.png'
import Timer from './../../components/Timer'
import location from '../../assets/location.svg'
import instagram from '../../assets/instagram.svg'
import SepertigaMalam from '../../assets/di-sepertiga-malam.mp3'
import Sound from 'react-sound'
import axios from 'axios'
import profile_icon from '../../assets/profile.png'

function WidadEllya(props) {
    var [isPlaying, setIsPlaying] = useState(true)
    var [presence, setPresence] = useState([])
    var [mapShown, setMapShown] = useState(false)
    var [pageOwner, setPageOwner] = useState('')

    const ClosePopupAndPlayMusic = () => {
        document.getElementById('popup_content').style.visibility = 'hidden'
        setIsPlaying(true)
        document.getElementById('countdown_content').style.display = 'flex'
        document.getElementById('bridegroom_content').style.display = 'flex'
        document.getElementById('location_content').style.display = 'flex'
        document.getElementById('guest_content').style.display = 'flex'
        document.getElementById('ucapan_content').style.display = 'flex'
        document.getElementById('main_page_wrapper').style.height = '600vh'
    };

    const ShowMap = () => {
        setMapShown(!mapShown)
        mapShown ? document.getElementById('mapouter').style.display = 'none' : document.getElementById('mapouter').style.display = 'block'
        window.scrollBy(0,200)
    }

    const SaveMessage = () => {
        var empty = true
        if (presence.length > 0) {
            empty = false
        }

        var nama = document.getElementById('name_input').value
        var kehadiran = document.getElementById('presence_input').value == 'ya' ? true : false
        var jumlah = document.getElementById('jumlah_input').value
        var message = document.getElementById('pray').value

        if (nama == '') {
            alert('Silakan isi nama terlebih dahulu')
            return
        }

        if (message == '') {
            alert('Ucapan tidak boleh kosong')
            return
        }

        var new_data = {nama: nama, kehadiran: kehadiran, jumlah: jumlah, message: message}
        var new_presence = []
        var new_presence = presence
        new_presence.push(new_data)

        var current_url = document.URL
        var url_arr = current_url.split('/')
        var page_owner = url_arr[url_arr.length - 1]

        var req_body = {
            "id": page_owner,
            "owner": page_owner,
            "list": new_presence
        }

        if (!empty) {
            axios.put(`https://my-json-server.typicode.com/naufalwdd/resepsi-kami/data/${page_owner}`, req_body).then(res => {
                alert('Pesan Berhasil Dikirim')
                setPresence(res.data.list)
            })
        }

        else {
            axios.post(`https://my-json-server.typicode.com/naufalwdd/resepsi-kami/data/`, req_body).then(res => {
                alert('Pesan Berhasil Dikirim')
                setPresence(res.data.list)
            })
        }

        document.getElementById('name_input').value = ''
        document.getElementById('presence_input').value = 'ya'
        document.getElementById('jumlah_input').value = 1
        document.getElementById('pray').value = ''
    }

    useEffect(() => {
        var current_url = document.URL
        var url_arr = current_url.split('/')
        var page_owner = url_arr[url_arr.length - 1]

        axios.get(`https://my-json-server.typicode.com/naufalwdd/resepsi-kami/data/${page_owner}`).then(res => {
            console.log(res.data);
            if (res.data == null) {
                return
            }

            if (res.data.list.length == 0) {
                return
            }

            setPresence(res.data.list)
        })
    },[])

    return(        
        <div className="main_page_wrapper" id="main_page_wrapper">
            <div className="popup_content" id="popup_content">
                <button className="invitation" onClick={ClosePopupAndPlayMusic}>Buka Undangan</button>
            </div>
            <Sound
                url={SepertigaMalam}
                playStatus={isPlaying == '1' ? Sound.status.PLAYING : Sound.status.STOPPED}
            ></Sound>
            <div className="greeting-content">
                <div className="date_title">
                    {/* <label className="date">Saturday, 4<sup>th</sup> March 2023</label> */}
                    {/* <label className="date">The Wedding Of</label> */}
                </div>
                <div className="name_box">
                    <label>Ellya</label>
                    <label>&</label>
                    <label>Widad</label>
                </div>
                <div className="frame_wrapper1">
                    <img src={frame1} className="top_left" />
                </div>
                <div className="frame_wrapper2">
                    <img src={frame2} className="top_right" />
                </div>
                <div className="frame_wrapper3">
                    <img src={frame3} className="bottom_right" />
                </div>
                <div className="frame_wrapper4">
                    <img src={frame4} className="bottom_left" />
                </div>
            </div>
            <div className="countdown_content" id="countdown_content">
                <Timer></Timer>
            </div>
            <div className="bridegroom_content" id="bridegroom_content">
                <label className="component_title">Bride & Groom</label>
                <p className="page_desc">"Tidak pernah didapati bunga-bunga cinta antara dua orang yang memadu cinta sebagaimana pada dua orang yang telah menikah"</p>
                <div className="groom_content">
                    <label className="bridegroom_name">Naufal</label>
                    <label className="bridegroom_fullname">Muhammad Naufal Widad</label>
                    <label className="bridegroom_desc">Putra ke 1 dari</label>
                    <label className="bridegroom_desc">Bapak Deni Rochendi Surjana & Ibu Nenden Kusdini</label>
                    <label className="bridegroom_desc">
                        {/* <img src={location}className='location_img'/> */}
                        Jl. Talun No. 2 RT/RW 01/03, Kelurahan Regol Wetan, Kabupaten Sumedang</label>
                    <div className="social_media">
                        <img src={instagram}/>
                        <a href="https://www.instagram.com/naufalwdd/">naufalwdd</a>
                    </div>
                    
                </div>
                <div className="groom_content">
                    <label className="bridegroom_name">Ellya</label>
                    <label className="bridegroom_fullname">Ellya Safaatun Ni'mah</label>
                    <label className="bridegroom_desc">Putri ke 2 dari</label>
                    <label className="bridegroom_desc">Bapak Suharyo & Ibu Suwantini</label>
                    <label className="bridegroom_desc">
                        {/* <img src={location}className='location_img'/> */}
                        Sukamenak Indah Blok P No. 47, RT/RW 007/007, Desa Sukamenak, Kabupaten Bandung</label>
                    <div className="social_media">
                        <img src={instagram}/>
                        <a href="https://www.instagram.com/ellyasafaa/">ellyasafaa</a>
                    </div>
                </div>
            </div>
            <div className="location_content" id="location_content">
                <label className="component_title">Location</label>
                <div className="location_card">
                    <label className="location_address">Kopo Square</label>
                    <label className="location_date">Sabtu, 4 Maret 2023</label>
                    <label className="location_desc">10:00 - 14:00 WIB</label>
                    <label className="location_desc">Jalan Raya Kopo Sayati No.45, Sayati, Kabupaten Bandung, Jawa Barat 40228</label>
                </div>
                <button className="see_map" onClick={ShowMap}>{mapShown ? 'Hide Map' : 'See Map'}</button>
                {mapShown && (<div class="mapouter" id="mapouter">
                    <div class="gmap_canvas">
                        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kopo square&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.gachacute.com/">Gacha Cute</a>
                    </div>
                </div>
                )}
            </div>
            <div className="guest_content" id="guest_content">
            <label className="component_title">Guest Book</label>
                <div className="guest_card">
                    <div className="input_section">
                        <label className="form_title">Nama</label>
                        <input className="name_input" id="name_input" placeholder="Nama Kamu..."></input>
                    </div>
                    <div className="input_section_double">
                        <div className="input_section" id="input_sec">
                            <label className="form_title">Kehadiran</label>
                            <select className="presence_input" id="presence_input">
                                <option value="ya">Hadir</option>
                                <option value="tidak">Tidak Hadir</option>
                            </select>
                        </div>
                        <div className="input_section" id="input_sec">
                            <label className="form_title">Jumlah</label>
                            <select className="jumlah_input" id="jumlah_input">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="More">Lebih dari 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="input_section">
                        <label className="form_title">Ucapan / Do'a</label>
                        <textarea className="name_input" id="pray" placeholder="Tulis Ucapan"></textarea>
                    </div>
                </div>
                <div className="btn_wrapper">
                    <button onClick={SaveMessage}>Kirim</button>
                </div>
            </div>
            <div className="ucapan_content" id="ucapan_content">
                <label className="component_title">Messages</label>
                <div className="message_card">
                    {presence.map((x) => (
                    <div className="message_list">
                        <img src={profile_icon}/>
                        <div className="msg">
                            <div className="msg_header">
                                <label className="guest_name">{x.nama}</label>
                                {x.kehadiran ? (<label className="presence">Hadir</label>) : (<label className="absence">Tidak Hadir</label>)}
                            </div>
                            <p className="message_val">{x.message}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WidadEllya