import React, { useState } from 'react';
import TimeCapsule from '../../components/TimeCapsule/TimeCapsule';
import ArrowButton from '../../components/ArrowButton/ArrowButton';
import Logo from '../../components/icons/Logo';
import "./mainsection.css"
import CapsuleScroll from '../../components/CapsuleScroll/CapsuleScroll';
import ImageCarusel from '../../components/ImageCarusel/ImageCarusel';
import TariffCard from '../../components/TariffCard/TariffCard';
import Report from '../../components/Report/Report';
import IconButton from '../../components/IconButton/IconButton';

function MainSection(props) {

    let redCapsule = <TimeCapsule  className="invert" />
    let defaultCapsule = <TimeCapsule  />
    let tariffCard = <TariffCard 
    title="Капсула"
    name="Lightfast"
    price="4 990 ₽"
    oldPrice="7 500 ₽"/>
    let reportCard =  <Report/>

    const [capsule,setCapsule] = useState(<TimeCapsule  />)
    const [card,setCard] = useState(tariffCard)

    return (
        <div className="main-section-container">
            <div className="main-section">
                <section className="main-info">
                    <Logo/>
                    <p className="main-text">
                    Оставьте послание потомкам. Выберите подходящую капсулу и тип отправки.</p>
                    <section className="main-photos">
                        <h1 className="main-title">Уже отправили послание потомкам</h1>
                        <ImageCarusel time={2000} images={
                            [
                                "https://hashtelegraph.com/wp-content/uploads/2021/07/time-capsule--1024x576.jpg",
                                "https://images.unsplash.com/photo-1598046937895-2be846402c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                "https://zlatoust-msk.ru/media/cache/4d/38/4d38f0500698683bbd145dc2d4209bc8.jpg",
                                "https://pobedarf.ru/wp-content/uploads/2020/12/jp1a9835-1024x683.jpg",
                                "https://images.unsplash.com/photo-1587854680352-936b22b91030?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                            ]

                        }/>
                        <IconButton/>
                    </section>
                </section>
                <section className="main-selection">
                    <div className="main-capsule-carusel">
                        <ArrowButton size={"100px"} type={"back"} onClick={()=>{
                            setCapsule(redCapsule)
                            setCard(reportCard)
                            }} />
                        {capsule}
                        <ArrowButton size={"100px"} type={"next"} onClick={()=>{
                            setCapsule(defaultCapsule)
                            setCard(tariffCard)
                            }}/>
                    </div>
                    <CapsuleScroll/>
                    {card}
                    <button className="send-button" onClick={()=>console.log('work')} >Отправить послание</button>
                </section>

                <div className="blob2"></div>
            </div>
        </div>
    );
}

export default MainSection;