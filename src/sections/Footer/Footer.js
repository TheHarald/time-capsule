import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../../components/Divider/Divider';
import Logo from '../../components/icons/Logo';
import "./footer.css"

function Footer(props) {

    let date = new Date().getFullYear()

    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-info-container">
                    <div className="footer-info">
                        <Logo/>
                        <p className="footer-info-text">
                            Наша цель — это сохранение исторической памяти и привлечение внимания к экологическим проблемам.
                        </p>
                    </div>
                    <div className="footer-links">
                        <article className="links-group">
                            <h4 className="links-title">О проекте</h4>
                            <Link className="footer-link" to={"/about"}>О нас</Link>
                            <Link className="footer-link" to={"/about"}>Особенности</Link>
                            <Link className="footer-link" to={"/about"}>Новости</Link>
                        </article>
                        <article className="links-group">
                            <h4 className="links-title">Поддержка</h4>
                            <Link className="footer-link" to={"/about"}>FAQ</Link>
                            <Link className="footer-link" to={"/about"}>Центр поддержки</Link>
                        </article>
                        <article className="links-group">
                            <h4 className="links-title">Сотрудничество</h4>
                            <Link className="footer-link" to={"/about"}>Связаться с нами</Link>
                            <Link className="footer-link" to={"/about"}>Пожертвования</Link>
                            <Link className="footer-link" to={"/about"}>Благотворительность</Link>
                            <Link className="footer-link" to={"/about"}>Волонтёрство</Link>
                        </article>
                    </div>
                </div>

                <p className="copyright">&copy; ООО «Капсула времени», {date}</p>
                <div className="agreements">
                    <Link className="footer-link agreements-link" to={"agreements"}>Политика конфиденциальности</Link>
                    <Divider/>
                    <Link className="footer-link agreements-link" to={"agreements"}>Использование cookies</Link>
                    <Divider/>
                    <Link className="footer-link agreements-link" to={"agreements"}> Условия использования</Link>
                </div>

            </div>
        </div>
    );
}

export default Footer;