import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Null from '../../assets/media/avatars/null.jpg';
import ikhwa_zainol from '../../assets/media/avatars/ikhwan_zainol.png';
import nathan_imbert from '../../assets/media/avatars/nathan_imbert.jpg';
import './Clients.scss';
import "swiper/css";
import "swiper/css/navigation";

export default function Clients() {
    return (
        <div id="clients" className="section-clients">
            <div className="clients-container">
                <div className="title-group">
                    <h1 className="big-title">Client</h1>
                    <h3 className="normal-title">Testimonials</h3>
                </div>
                <Swiper loop={true} navigation={true} modules={[Navigation]} className="clients-list">
                <SwiperSlide className="clients-item">
                        <div className="clients-column">
                            <img className="clients-item-avatar" src={ ikhwa_zainol } alt="Ikhwan Zainol Avatar" />
                        </div>
                        <div className="clients-column">
                            <p className="clients-item-text">Best and easiest setup, really amazed with the layout and i like how the staff member are really easy to communicate, responsive and helpful event i am still a newbie. Yilmaz and the team obviously have a wide knowledge in term of fixing a bug, coding and designing a user interface. Thank you guys.</p>
                        </div>
                        <div className="clients-column">
                            <h5 className="clients-item-name">Ikhwan Zainol</h5>
                            <h5 className="clients-item-from">Malaysia, Ampang</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="clients-item">
                        <div className="clients-column">
                            <img className="clients-item-avatar" src={ Null } alt="Jason Symonette Avatar" />
                        </div>
                        <div className="clients-column">
                            <p className="clients-item-text">Yilmaz is one of the most hardest and dedicated developers they contribute they're experience and effort to help you in needs and special Thanks to Yilmaz for making it a pleasure of deals with them</p>
                        </div>
                        <div className="clients-column">
                            <h5 className="clients-item-name">Jason Symonette</h5>
                            <h5 className="clients-item-from">New Providence, Bahamas</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="clients-item">
                        <div className="clients-column">
                            <img className="clients-item-avatar" src={ nathan_imbert } alt="Jason Symonette Avatar" />
                        </div>
                        <div className="clients-column">
                            <p className="clients-item-text">Awesome layout, best website seller.</p>
                        </div>
                        <div className="clients-column">
                            <h5 className="clients-item-name">Nathan Imbert</h5>
                            <h5 className="clients-item-from">Saint-Raphael, France</h5>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="clients-item">
                        <div className="clients-column">
                            <img className="clients-item-avatar" src={ Null } alt="Sam Beresford Avatar" />
                        </div>
                        <div className="clients-column">
                            <p className="clients-item-text">Good website, well designed. Easy to navigate. Plus Yilmaz is a friendly person who is always willing to help.</p>
                        </div>
                        <div className="clients-column">
                            <h5 className="clients-item-name">Sam Beresford</h5>
                            <h5 className="clients-item-from">Derby, England</h5>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}