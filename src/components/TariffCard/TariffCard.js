import React from 'react';
import "./tariffcard.css"
import TariffOption from './TariffOption';
import AlertLineIcon from 'remixicon-react/AlertLineIcon';
import Card from '../Card/Card';

function TariffCard({title, name,price,oldPrice}) {
    return (
        <Card>
            <header className="tariff-card-title">
                <h3 className="card-title">{title}</h3>
                <h3 className="card-title name">{name}</h3>
            </header>
            <div className="card-options">
            <TariffOption 
                    icon={<AlertLineIcon color="#fff"/>}
                    title="Some info"
            />
            <TariffOption 
                    icon={<AlertLineIcon color="#fff"/>}
                    title="Some info"
            />
            <TariffOption 
                    icon={<AlertLineIcon color="#fff"/>}
                    title="Some info"
            />
            <TariffOption 
                    icon={<AlertLineIcon color="#fff"/>}
                    title="Some info"
            />
            <TariffOption 
                    icon={<AlertLineIcon color="#fff"/>}
                    title="Some info"
            />
            </div>
            <div className="tariff-price">
                <div className="price-container">
                    <h2 className="now price">{price}</h2>
                    <h2 className="old price">{oldPrice}</h2>
                </div>
                <button className="more-button">
                    Подробнее
                </button>
            </div>
        </Card>
    );
}

export default TariffCard;