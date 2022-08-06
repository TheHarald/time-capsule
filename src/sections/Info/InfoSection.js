import React from 'react';
import InfoItem from '../../components/InfoItem/InfoItem';
import "./infosection.css"
// import {ReactComponent as Email} from "../../../src/components/icons/mail.svg"

function InfoSection(props) {
    return (
        <div className="info-section-container">
            <div className="info-section">
                <InfoItem 
                title={"Бесплатная отправка на почту"} 
                text="Отправьте письмо в будущее через электронную почту. Это абсолютно бесплатно."
                image={"email"}
                />
                <InfoItem 
                title={"Доставка капсулы"} 
                text="Когда истечёт время, мы доставим капсулу по указанному адресу."
                image={"box"}
                />
                <InfoItem 
                title={"Выбор тарифа"} 
                text="Выберите подходящий тариф и отправьте послание в будущее."
                image={"capsule"}
                />
                <InfoItem 
                title={"Отправляйте подарки"} 
                text="Вы можете поместить в капсулу всё что угодно. Главное, чтобы оно не испортилось.🤠"
                image={"gift"}
                />
            </div>
        </div>
    );
}

export default InfoSection;