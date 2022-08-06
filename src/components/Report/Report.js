import React from 'react';
import Card from '../Card/Card';
import "./report.css"

function Report(props) {
    return (
        <Card>
            <h2 className="card-title">Отправить через Email</h2>
            <input className="input email" type={"email"} placeholder="Электронная почта"/>
            <textarea className="input text-area" type={"text"} placeholder="Введите текст" />
        </Card>
    );
}

export default Report;