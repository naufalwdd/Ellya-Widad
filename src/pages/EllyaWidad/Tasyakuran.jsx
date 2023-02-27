import './EllyaWidad.css';
import { atcb_action, atcb_init } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';
import BottomPaper from '../../assets/bottom-paper.png'
import OurName from '../../assets/our-name.png'
import OurNamePortrait from '../../assets/our-name-portrait.png'
import FirstPageTitle from '../../assets/first-page-title.png'
import { useEffect, useState, useRef } from 'react';
import SepertigaMalam from '../../assets/di-sepertiga-malam.mp3'
import Sound from 'react-sound'
import Bismillah from '../../assets/bismillah.png'
import DaunKiri from '../../assets/daun-kiri.png'
import DaunKanan from '../../assets/daun-kanan.png'
import InstagramIcon from '../../assets/instagram-icon.png'
import IconAkad from '../../assets/icon-akad.png'
import IconResepsi from '../../assets/icon-resepsi.png'
import DaunPembatas from '../../assets/daun-pembatas.png'
import ProfileEllya from '../../assets/profile-ellya.JPG'
import ProfileWidad from '../../assets/profile-widad.JPG'
import TimerTasyakur from '../../components/TimerTasyakur';
import Timer from '../../components/Timer';
import CountdownFrame from '../../assets/countdown-frame.png'
import Prokes1 from '../../assets/prokes1.png'
import Prokes2 from '../../assets/prokes2.svg'
import Prokes4 from '../../assets/prokes4.png'
import Adab1 from '../../assets/adab1.png'
import Adab2 from '../../assets/adab2.png'
import Adab3 from '../../assets/adab3.png'
import Adab4 from '../../assets/adab4.png'
import Daun1 from '../../assets/daun1.png'
import Daun2 from '../../assets/daun2.png'
import Daun3 from '../../assets/daun3.png'
import Daun4 from '../../assets/daun4.png'
import SparkleCream from '../../assets/sparkle-cream.png'
import Sparkle from '../../assets/sparkle.png'
import DaunCombine1 from '../../assets/daun-combine1.png'
import DaunCombine2 from '../../assets/daun-combine2.png'
import DaunCombine3 from '../../assets/daun-combine3.png'
import DressCode from '../../assets/dresscode.png'
import ColorPalette from '../../assets/color-palette.png'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProfileIcon from '../../assets/profile.png'
import DaunAkad from '../../assets/daun-akad.png'
import DaunAkad2 from '../../assets/daun-akad2.png'
import BungaProfil from '../../assets/bunga-profil.png'
import DaunProfil from '../../assets/daun-profil.png'
import UcapanHarapan from '../../assets/ucapan-harapan.png'
import Home from '../../assets/home.png'
import Brides from '../../assets/brides.png'
import Warning from '../../assets/warning.png'
import Chat from '../../assets/chat.png'
import BungaUcapan from '../../assets/bunga-ucapan.png'
import OrnamenPembatas from '../../assets/ornamen-pembatas.png'
import Favicon from '../../assets/favicon.png'
import CornerOrnament from '../../assets/corner_ornament.png'
import CornerOrnament2 from '../../assets/corner_ornament2.png'

function EllyaWidad(props) {

    const location = useLocation()
    const queryString = new URLSearchParams(location.search)
    var [effectRan, setEffectRan] = useState(false)
    var [guestName, setGuestName] = useState('')
    var [isPlaying, setIsPlaying] = useState(false)
    var [resepsiShown, setResepsiShown] = useState(false)
    var [resepsiShown2, setResepsiShown2] = useState(false)

    var [name, setName] = useState('')
    var [presence, setPresence] = useState('ya')
    var [totalGuest, setTotalGuest] = useState('1')
    var [message, setMessage] = useState('')
    var [akadShown, setAkadShown] = useState(false)
    var [ucapan, setUcapan] = useState([])
    var [dresscode, setDresscode] = useState(true)

    var [time, setTime] = useState(1)

    const PresenceChange = event => {
        setPresence(event.target.value);
        document.getElementById('jumlah_input').disabled = event.target.value == 'ya' ? false : true
    };

    const TotalGuestChange = event => {
        setTotalGuest(event.target.value)
    }

    const HandleSubmit = (e) => {
        e.preventDefault()

        var postData = new FormData();
        postData.append("Name", name);
        postData.append("Presence", presence);
        postData.append("TotalGuest", totalGuest);
        postData.append("Message", message);

        var sentUcapan = {}
        sentUcapan['Name'] = name
        sentUcapan['Presence'] = presence
        sentUcapan['TotalGuest'] = totalGuest
        sentUcapan['Message'] = message

        if (name == '') {
            window.alert('Nama harus diisi')
            return
        }

        axios.post('https://script.google.com/macros/s/AKfycbxDnzXP9ia78vt4M4EwM0tQyUdjMkMAXU4nfkOxuiAPyPwKNDcsOmqd2FBKpV_gtWrsYQ/exec', postData).then((response) => {
            setName('')
            setPresence('ya')
            setTotalGuest('1')
            setMessage('')
            GetRSVPData()
            window.alert('Data berhasil dikirim')
        })
    }

    const FadeOut = () => {
        document.getElementById("greeting").style.animation = 'fadeOut 1s linear'
        document.getElementById("greeting").style.animationFillMode = 'forwards'
        document.getElementById("to_guest").style.animation = 'fadeOut 0.25s linear'
        document.getElementById("to_guest").style.animationFillMode = 'forwards'
        document.getElementById('ellya_widad').style.overflow = 'auto'
        document.getElementById('ellya_widad').style.overflowX = 'hidden'
    }

    useEffect(() => {
        if (!effectRan) {
            document.title = 'Pernikahan Ellya & Widad';
            const urlParams = new URLSearchParams(queryString);
            const guest = urlParams.get('to')
            const time_type = urlParams.get('t')
            guest == null ? setGuestName('Bapak/Ibu/Saudara/Saudari') : setGuestName(guest)
            time_type == null ? setTime(1) : setTime(2)
            atcb_init()
            GetRSVPData()
            GetDresscodeData(guest)
            document.title = 'Tasyakur Pernikahan Ellya & Widad'
        }

        setEffectRan(true)
    }, []);

    const GetRSVPData = () => {
        axios.get('https://script.google.com/macros/s/AKfycbxDnzXP9ia78vt4M4EwM0tQyUdjMkMAXU4nfkOxuiAPyPwKNDcsOmqd2FBKpV_gtWrsYQ/exec?type=rsvp').then((res) => {
            if (res.data == null) {
                return
            }

            if (res.data.length == 0) {
                return
            }
            setUcapan(res.data.reverse())
        })
    }

    const GetDresscodeData = (guest) => {
        axios.get('https://script.google.com/macros/s/AKfycbxDnzXP9ia78vt4M4EwM0tQyUdjMkMAXU4nfkOxuiAPyPwKNDcsOmqd2FBKpV_gtWrsYQ/exec?type=dresscode').then((res) => {
            if (res.data == null) {
                return
            }

            if (res.data.length == 0) {
                return
            }

            var needDresscode = false

            for (var item of res.data) {
                if (guest.toUpperCase() == item.toUpperCase()) {
                    needDresscode = true
                    break
                }
            }

            if (!needDresscode) {
                setDresscode(false)
            }
        })
    }

    const PlayMusicAndAnimate = () => {
        setIsPlaying(true)
        FadeOut()
        FadeIn()
    }

    const FadeIn = () => {
        document.getElementById('first_page_title_img').style.animation = 'fadeIn 3.25s'
        document.getElementById('our_name_img').style.animation = 'fadeIn 3.25s'
        document.getElementById('marry_date_tasyakur').style.animation = 'fadeIn 3.25s'
    }

    const ScrollToMap = () => {
        var myRef = document.getElementById('myRef')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ScrollToHome = () => {
        var myRef = document.getElementById('greeting')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ScrollToProfile = () => {
        var myRef = document.getElementById('third_page')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ScrollToProtocol = () => {
        var myRef = document.getElementById('seventh_page_ref')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ScrollToChat = () => {
        var myRef = document.getElementById('img_ref')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ShowAkadMap = () => {
        setAkadShown(true)
        setResepsiShown(false)
        setResepsiShown2(false)
        ScrollToMap()
    }

    const ShowResepsiMap = () => {
        setAkadShown(false)
        setResepsiShown(true)
        setResepsiShown2(false)
        ScrollToMap()
    }

    const ShowResepsiMap2 = () => {
        setAkadShown(false)
        setResepsiShown(false)
        setResepsiShown2(true)
        ScrollToMap()
    }

    const animation_elements = document.querySelectorAll('.animate_on_scroll')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate')
            }
            // else {
            //     entry.target.classList.remove('animate')
            // }
        })
    }, {
        threshold: 0.5
    })

    for (var i = 0; i < animation_elements.length; i++) {
        const el = animation_elements[i]
        observer.observe(el)
    }

    return(
    <div className="ellya_widad" id="ellya_widad">
        <Sound
            url={SepertigaMalam}
            playStatus={isPlaying == true ? Sound.status.PLAYING : Sound.status.STOPPED}
        ></Sound>
        <div className="greeting" id='greeting'>
            <div className="to_guest" id='to_guest'>
                <p id="yth">Kepada Yth.</p>
                <p id="guest_name">{guestName}</p>
                <button className='open_invitation' id='open_invitation' onClick={PlayMusicAndAnimate}>Buka Undangan</button>
            </div>
        </div>
        <div className="first_page">
            {/* <img src={FirstPageTitle} className='first_page_title_img' id='first_page_title_img'/> */}
            <p className="first_page_title_img" id="first_page_title_img" style={{ marginTop: '120px', textAlign: 'center' }}>{time == 2 ? 'Pernikahan' : 'Tasyakur Pernikahan'}</p>
            <picture>
                <source media="(min-width: 720px)" srcSet={OurName}/>
                <source media="(max-width: 720px)" srcSet={OurNamePortrait}/>
                <img src="OtherImage.png" alt="PictureDoesNotMatchAny" id='our_name_img'></img>
            </picture>
            <p id='marry_date_tasyakur'>{time == 2 ? '' : '28 Februari 2023'}</p>
            <img src={BottomPaper} className='bottom_paper_img'/>
            <img src={Daun1} className='daun_1'/>
            <img src={Daun2} className='daun_2'/>
            <img src={Daun3} className='daun_3'/>
            <img src={Daun2} className='daun_4'/>
            <img src={SparkleCream} className='sparkle_1'/>
            <img src={SparkleCream} className='sparkle_2'/>
            <img src={SparkleCream} className='sparkle_3'/>
            <img src={SparkleCream} className='sparkle_4'/>
        </div>
        <div className="second_page">
            <img src={Bismillah} className="bismillah" id='bismillah'/>
            <div className="second_page_content">
                <div className="left_leave">
                    <img src={DaunKiri} className="daun"/>
                </div>
                <div className="second_page_main">
                    <div className="quote_img" id='upper_quote'>
                        <span class="material-symbols-outlined">
                            format_quote
                        </span>
                    </div>
                    <div className="second_page_surah animate_on_scroll" id='second_page_surah'>
                        <p>"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."</p>
                        <p className='surah'>-Surat Ar-Rum Ayat 21-</p>
                    </div>
                    <div className="quote_img" id='lower_quote'>
                        <span class="material-symbols-outlined">
                            format_quote
                        </span>
                    </div>
                </div>
                <div className="right_leave">
                    <img src={DaunKanan} className="daun"/>
                </div>
            </div>
        </div>
        <div className="third_page" id='third_page'>
            <img src={BottomPaper} className='top_paper_img'/>
            <img src={DaunProfil} alt="" className='daun_profil'/>
            <img src={BungaProfil} alt="" className='bunga_profil'/>
            <div className="profile_section animate_on_scroll">
                <p className='profile_intro animate_on_scroll'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridha-Mu tercurah mengiringi pernikahan kami.</p>
                <div className="profile_section_item" id='ellya'>
                    <div className="profile_section_box">
                        <div className="profile_pic animate_on_scroll">
                            <img src={ProfileEllya} alt="" />
                        </div>
                        <p className='profile_name animate_on_scroll'>Ellya Safaatun Ni'mah</p>
                        <p className='profile_desc animate_on_scroll'>Putri dari Bapak Suharyo dan Ibu Suwantini</p>
                        <div className="ig_btn animate_on_scroll" onClick={() => document.location.href='https://www.instagram.com/ellyasafaa/'}>
                            <img src={InstagramIcon} className='ig_icon'/>
                            <p>@ellyasafaa</p>
                        </div>
                    </div>
                    <div className="profile_section_box" id='widad'>
                        <div className="profile_pic animate_on_scroll">
                            <img src={ProfileWidad} alt="" />
                        </div>
                        <p className='profile_name animate_on_scroll'>Muhammad Naufal Widad</p>
                        <p className='profile_desc animate_on_scroll'>Putra dari Bapak Deni Rochendi S. dan Ibu Nenden Kusdini</p>
                        <div className="ig_btn animate_on_scroll" onClick={() => document.location.href='https://www.instagram.com/naufalwdd/'}>
                            <img src={InstagramIcon} className='ig_icon'/>
                            <p>@naufalwdd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="forth_page">
            <img src={DaunAkad} alt="" className='daun_akad'/>
            <img src={DaunAkad2} alt="" className='daun_akad2'/>
            <div className='card_wrapper flex_wrap dir_col'>
                <div className="card_item animate_on_scroll small_card">
                    <img src={IconResepsi} className='icon_akad animate_on_scroll' />
                    <p className='akad_title animate_on_scroll card_title_small'>Tasyakur Pernikahan</p>
                    <p className='animate_on_scroll time_small'>Selasa, 28 Februari 2023</p>
                    <p className='time animate_on_scroll time_small'>{time == 1 ? '10.00 - 13.00 WIB' : '13.00 - 15.00'}</p>
                    <img src={DaunPembatas} className='icon_pembatas animate_on_scroll remove_margin_pembatas'/>
                    <p className='location animate_on_scroll location_small'>Kediaman Orang Tua Mempelai Pria</p>
                    <p className='location_detail animate_on_scroll address_small'>Jalan Talun No. 2, RT/RW 01/03, Kelurahan Regol Wetan, Kecamatan Sumedang Selatan, Kabupaten Sumedang, Jawa Barat</p>
                    <button className='btn_direction animate_on_scroll small_button' onClick={ShowResepsiMap}>Lihat Petunjuk Arah</button>
                </div>
                <div className="card_item animate_on_scroll small_card">
                    <img src={IconAkad} className='icon_akad animate_on_scroll' />
                    <p className='akad_title animate_on_scroll card_title_small'>Akad Nikah</p>
                    <p className='animate_on_scroll time_small'>Jum'at, 3 Maret 2023</p>
                    <p className='time animate_on_scroll time_small'>08.00 - 10.00 WIB</p>
                    <img src={DaunPembatas} className='icon_pembatas animate_on_scroll remove_margin_pembatas'/>
                    <p className='location animate_on_scroll location_small'>Masjid Al-Kautsar</p>
                    <p className='location_detail animate_on_scroll address_small'>Komplek Sukamenak Indah Blok K, Kecamatan Margahayu, Kabupaten Bandung, Jawa Barat</p>
                    <button className='btn_direction animate_on_scroll' onClick={ShowAkadMap}>Lihat Petunjuk Arah</button>
                </div>
                {time != 1 ? (<div className="card_item animate_on_scroll self_centered small_card">
                    <img src={IconResepsi} className='icon_akad animate_on_scroll' />
                    <p className='akad_title animate_on_scroll card_title_small'>Resepsi</p>
                    <p className='animate_on_scroll time_small'>Sabtu, 4 Maret 2023</p>
                    <p className='time animate_on_scroll time_small'>10.00 - 13.00 WIB</p>
                    <img src={DaunPembatas} className='icon_pembatas animate_on_scroll remove_margin_pembatas'/>
                    <p className='location animate_on_scroll location_small'>Hall A</p>
                    <p className='location animate_on_scroll location_small'>La Gardena Kopo Square</p>
                    <p className='location_detail animate_on_scroll address_small'>Jalan Raya Kopo Sayati No.45, Sayati, Kecamatan Margahayu, Kabupaten Bandung, Jawa Barat</p>
                    <button className='btn_direction animate_on_scroll' onClick={ShowResepsiMap2}>Lihat Petunjuk Arah</button>
                </div>) : '' }
            </div>
        </div>
        <div className="fifth_page">
            <div id='myRef'></div>            
            {resepsiShown ?
                (
                <div class="resepsi_canvas" id='resepsi_canvas'>
                    <iframe class="resepsi_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jl talun no 2 sumedang&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                ) : ''
            }
            {akadShown ?
                (
                <div class="resepsi_canvas" id='akad_canvas'>
                    <iframe class="resepsi_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=masjid%20al-kautsar%20sukamenak%20indah&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                ) : ''
            }
            {resepsiShown2 ?
                (
                <div class="resepsi_canvas" id='resepsi_canvas'>
                    <iframe class="resepsi_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kopo square&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                ) : ''
            }
        </div>
        <div className="sixth_page">
            <img src={SparkleCream} className='sparkle_kiri'/>
            <img src={SparkleCream} className='sparkle_kanan'/>
            <p className='countdown animate_on_scroll'>{time == 2 ? 'Waktu Menuju Resepsi' : 'Waktu Menuju Tasyakuran'}</p>
            <div className="countdown_wrapper animate_on_scroll">
                <div className="countdown_line"></div>
                {time == 2 ? (<Timer></Timer>) : (<TimerTasyakur></TimerTasyakur>)}
                <div className="countdown_line"></div>
                <img src={CountdownFrame} alt="" className='countdown_frame'/>
            </div>
            <form onSubmit={e => {
            e.preventDefault();
            atcb_action({
                name:'Pernikahan Ellya & Widad',
                startDate: "2023-03-04",
                endDate: "2023-03-04",
                startTime: "10:00",
                endTime: "13:00",
                location: "Hall A, La Gardena Kopo Square",
                options: ['Google', 'Yahoo'],
                iCalFileName: "Reminder-Event",
            });
            }}>
            <button className='btn_date animate_on_scroll' type='submit'>Simpan Tanggal</button>
            </form>
            <img src={BottomPaper} className='bottom_paper_img'/>
        </div>
        <div className="tenth_page" id='tenth_page'>
            <img src={CornerOrnament} className='corner_1'/>
            <img src={CornerOrnament2} className='corner_2'/>
            <img src={OrnamenPembatas} className="ornamen_pembatas"/>
            <div className='frame_bg' style={{ backgroundColor: '#FAFAFA'}}></div>
            <p className='thankful animate_on_scroll' id='thankful_header'>Atas kehadiran dan do'a restu dari Bapak/Ibu/Saudara/i, kami mengucapkan terima kasih.</p>
            <p className='thankful animate_on_scroll' id='thankful_content'>Kami yang berbahagia,</p>
            <picture>
                <source media="(min-width: 720px)" srcSet={OurName}/>
                <source media="(max-width: 720px)" srcSet={OurNamePortrait}/>
                <img src="OtherImage.png" alt="PictureDoesNotMatchAny" className='our_name animate_on_scroll'></img>
            </picture>
            <img src={Favicon} className="fav"/>
            <p className='powered'>Powered by Resepsi Kami</p>
        </div>
    </div>
    )
}

export default EllyaWidad