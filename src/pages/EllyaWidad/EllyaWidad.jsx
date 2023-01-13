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

function EllyaWidad(props) {

    const location = useLocation()
    const queryString = new URLSearchParams(location.search)

    var [guestName, setGuestName] = useState('')
    var [isPlaying, setIsPlaying] = useState(false)
    var [akadShown, setAkadShown] = useState(false)
    var [resepsiShown, setResepsiShown] = useState(false)

    const FadeOut = () => {
        document.getElementById("greeting").style.animation = 'fadeOut 1.25s linear'
        document.getElementById("greeting").style.animationFillMode = 'forwards'
        document.getElementById('ellya_widad').style.overflow = 'auto'
        document.getElementById('ellya_widad').style.overflowX = 'hidden'
    }

    useEffect(() => {
        document.title = 'Pernikahan Ellya & Widad';
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get('to')
        name == null ? setGuestName('Bapak/Ibu/Saudara/Saudari') : setGuestName(name)
        atcb_init()
    });

    const PlayMusicAndAnimate = () => {
        setIsPlaying(true)
        FadeOut()
        FadeIn()
    }

    const FadeIn = () => {
        document.getElementById('first_page_title_img').style.animation = 'fadeIn 3.5s'
        document.getElementById('our_name_img').style.animation = 'fadeIn 3.5s'
        document.getElementById('marry_date').style.animation = 'fadeIn 3.5s'
    }

    const ScrollToMap = () => {
        var myRef = document.getElementById('myRef')
        myRef.scrollIntoView({
            behavior: 'smooth',
        })
    }

    const ShowAkadMap = () => {
        setAkadShown(true)
        setResepsiShown(false)
        ScrollToMap()
    }

    const ShowResepsiMap = () => {
        setAkadShown(false)
        setResepsiShown(true)
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
            <div className="to_guest">
                <p id="yth">Kepada Yth.</p>
                <p id="guest_name">{guestName}</p>
                <button className='open_invitation' id='open_invitation' onClick={PlayMusicAndAnimate}>Buka Undangan</button>
            </div>
        </div>
        <div className="first_page">
            <img src={FirstPageTitle} className='first_page_title_img' id='first_page_title_img'/>
            <picture>
                <source media="(min-width: 720px)" srcSet={OurName}/>
                <source media="(max-width: 720px)" srcSet={OurNamePortrait}/>
                <img src="OtherImage.png" alt="PictureDoesNotMatchAny" id='our_name_img'></img>
            </picture>
            <p id='marry_date'>4 Maret 2023</p>
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
        <div className="third_page">
            <img src={BottomPaper} className='top_paper_img'/>
            <div className="profile_section animate_on_scroll">
                <p className='profile_intro animate_on_scroll'>Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga ridha-Mu tercurah mengiringi pernikahan kami.</p>
                <div className="profile_section_item" id='ellya'>
                    <div className="profile_section_box">
                        <div className="profile_pic animate_on_scroll">
                            <img src={ProfileEllya} alt="" />
                        </div>
                        <p className='profile_name animate_on_scroll'>Ellya Safaatun Ni'mah</p>
                        <p className='profile_desc animate_on_scroll'>Putri kedua Bapak Suharyo dan Ibu Suwantini</p>
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
                        <p className='profile_desc animate_on_scroll'>Putra pertama Bapak Deni Rochendi S. dan Ibu Nenden Kusdini</p>
                        <div className="ig_btn animate_on_scroll" onClick={() => document.location.href='https://www.instagram.com/naufalwdd/'}>
                            <img src={InstagramIcon} className='ig_icon'/>
                            <p>@naufalwdd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="forth_page">
            <div className="card_wrapper">
                <div className="card_item animate_on_scroll">
                    <img src={IconAkad} className='icon_akad animate_on_scroll' />
                    <p className='akad_title animate_on_scroll'>Akad Nikah</p>
                    <p className='animate_on_scroll'>Jum'at, 3 Maret 2023</p>
                    <p className='time animate_on_scroll'>08.00 - 10.00 WIB</p>
                    <img src={DaunPembatas} className='icon_pembatas animate_on_scroll'/>
                    <p className='location animate_on_scroll'>Masjid Al-Kautsar</p>
                    <p className='location_detail animate_on_scroll'>Komplek Sukamenak Indah Blok K, Kecamatan Margahayu, Kabupaten Bandung, Jawa Barat</p>
                    <button className='btn_direction animate_on_scroll' onClick={ShowAkadMap}>Lihat Petunjuk Arah</button>
                </div>
                <div className="card_item animate_on_scroll">
                    <img src={IconResepsi} className='icon_akad animate_on_scroll' />
                    <p className='akad_title animate_on_scroll'>Resepsi</p>
                    <p className='animate_on_scroll'>Sabtu, 4 Maret 2023</p>
                    <p className='time animate_on_scroll'>10.00 - 13.00 WIB</p>
                    <img src={DaunPembatas} className='icon_pembatas animate_on_scroll'/>
                    <p className='location animate_on_scroll'>Kopo Square</p>
                    <p className='location_detail animate_on_scroll'>Jalan Raya Kopo Sayati No.45, Sayati, Kecamatan Margahayu, Kabupaten Bandung, Jawa Barat</p>
                    <button className='btn_direction animate_on_scroll' onClick={ShowResepsiMap}>Lihat Petunjuk Arah</button>
                </div>
            </div>
        </div>
        <div className="fifth_page">
            <div id='myRef'></div>            
            {resepsiShown ?
                (
                <div class="resepsi_canvas" id='resepsi_canvas'>
                    <iframe class="resepsi_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=kopo square&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
                ) : ''
            }
            
            {akadShown ?
                (
                <div class="resepsi_canvas" id='akad_canvas'>
                    <iframe class="resepsi_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=masjid%20al%20kautsar%20sukamenak&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
                ) : ''
            }
        </div>
        <div className="sixth_page">
            <p className='countdown animate_on_scroll'>Menuju Hari Yang Ditunggu</p>
            <div className="countdown_wrapper animate_on_scroll">
                <div className="countdown_line"></div>
                <Timer></Timer>
                <div className="countdown_line"></div>
                <img src={CountdownFrame} alt="" className='countdown_frame'/>
            </div>
            {/* <div className="atcb animate_on_scroll">
            { '{' }
                "name":"Resepsi Pernikahan Ellya & Widad",
                "startDate":"2023-04-24",
                "endDate":"2023-04-24",
                "startTime":"10:00",
                "endTime":"13:00",
                "location":"Kopo Square",
                "label":"Simpan Tanggal",
                "options":[
                    "Google"
                ],
                "iCalFileName":"Reminder-Event"
            { '}' }
            </div> */}
            <form onSubmit={e => {
            e.preventDefault();
            atcb_action({
                name:'Resepsi Pernikahan Ellya & Widad',
                startDate: "2023-03-04",
                endDate: "2023-03-04",
                startTime: "03:00",
                endTime: "06:00",
                location: "Kopo Square",
                options: ['Google', 'Yahoo'],
                iCalFileName: "Reminder-Event",
            });
            }}>
            <button className='btn_date animate_on_scroll' type='submit'>Simpan Tanggal</button>
            </form>
            <img src={BottomPaper} className='bottom_paper_img'/>
        </div>
        <div className="seventh_page">
            <p className='notes animate_on_scroll'>Hal Yang Harus Diperhatikan</p>
            <div className="note_wrapper animate_on_scroll">
                <img src={Adab1} alt="" className='prokes animate_on_scroll'/>
                <img src={Adab2} alt="" className='prokes animate_on_scroll'/>
                <img src={Adab3} alt="" className='prokes animate_on_scroll'/>
                <img src={Adab4} alt="" className='prokes animate_on_scroll'/>
                <img src={Prokes1} alt="" className='prokes animate_on_scroll'/>
                <img src={Prokes2} alt="" className='prokes animate_on_scroll'/>
                {/* <img src={Prokes3} alt="" className='prokes animate_on_scroll'/> */}
                <img src={Prokes4} alt="" className='prokes animate_on_scroll'/>
            </div>
            <img src={Daun4} alt="" className='daun_5'/>
            <img src={Daun4} alt="" className='daun_6'/>
            <img src={Sparkle} alt="" className='sparkle'/>
            <img src={Sparkle} alt="" className='sparkle_2'/>
            <img src={DaunCombine1} alt="" className='daun_combine'/>
            <img src={DaunCombine1} alt="" className='daun_combine1'/>
        </div>
        <div className="eighth_page">
            <img src={BottomPaper} alt="" className='pembatas_pakaian'/>
            <img src={DaunCombine2} alt="" className='daun_combine2'/>
            <img src={DaunCombine3} alt="" className='daun_combine3'/>
            <p className='pakaian animate_on_scroll'>Pakaian</p>
            <div className="dresscode_wrapper animate_on_scroll">
                <img src={DressCode} alt="" className='dresscode_img animate_on_scroll'/>
                <div className="palette_wrapper">
                    <div className="dress_p animate_on_scroll">
                        <p>Di hari resepsi, keluarga disarankan menggunakan pakaian dengan nuansa warna coklat</p>
                    </div>
                    <img src={ColorPalette} alt="" className='palette_img animate_on_scroll'/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EllyaWidad