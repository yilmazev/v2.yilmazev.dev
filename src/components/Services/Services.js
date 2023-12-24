import './Services.scss';

export default function Services() {
    return (
        <div id="services" className="section-services">
            <div className="services-container">
                <div className="title-group">
                    <h1 className="big-title">Services</h1>
                    <h3 className="normal-title">What I Do?</h3>
                </div>
                <div className="services-card-container">
                    <div className="services-card-item">
                        <div className="services-card-column">
                            <div className="services-card-icon-container">
                                <svg viewBox="0 0 24 24" className="services-card-icon"><path d="M18.6 6a.6.6 0 0 1 .6.6v9H4.8v-9a.6.6 0 0 1 .6-.6h13.2ZM5.4 4.8a1.8 1.8 0 0 0-1.8 1.8v10.2h16.8V6.6a1.8 1.8 0 0 0-1.8-1.8H5.4Zm-3 12.6h19.2a1.8 1.8 0 0 1-1.8 1.8H4.2a1.8 1.8 0 0 1-1.8-1.8Z"></path></svg>
                            </div>
                        </div>
                        <div className="services-card-column">
                            <h3 className="services-card-title">Web & App Development</h3>
                        </div>
                        <div className="services-card-column">
                            <p className="services-card-text">I can edit and redo your website or I can make a special mobile application for your website or just a mobile application specifically.</p>
                        </div>
                    </div>
                    <div className="services-card-item">
                        <div className="services-card-column">
                            <div className="services-card-icon-container">
                                <svg viewBox="0 0 24 24" className="services-card-icon"><path d="M9.5 3.25V7H3.25V3.25H9.5ZM3.25 2A1.25 1.25 0 0 0 2 3.25V7a1.25 1.25 0 0 0 1.25 1.25H9.5A1.25 1.25 0 0 0 10.75 7V3.25A1.25 1.25 0 0 0 9.5 2H3.25Zm17.5 15v3.75H14.5V17h6.25Zm-6.25-1.25A1.25 1.25 0 0 0 13.25 17v3.75A1.25 1.25 0 0 0 14.5 22h6.25A1.25 1.25 0 0 0 22 20.75V17a1.25 1.25 0 0 0-1.25-1.25H14.5ZM9.5 12v8.75H3.25V12H9.5Zm-6.25-1.25A1.25 1.25 0 0 0 2 12v8.75A1.25 1.25 0 0 0 3.25 22H9.5a1.25 1.25 0 0 0 1.25-1.25V12a1.25 1.25 0 0 0-1.25-1.25H3.25Zm17.5-7.5V12H14.5V3.25h6.25ZM14.5 2a1.25 1.25 0 0 0-1.25 1.25V12a1.25 1.25 0 0 0 1.25 1.25h6.25A1.25 1.25 0 0 0 22 12V3.25A1.25 1.25 0 0 0 20.75 2H14.5Z"></path></svg>
                            </div>
                        </div>
                        <div className="services-card-column">
                            <h3 className="services-card-title">Unique Design</h3>
                        </div>
                        <div className="services-card-column">
                            <p className="services-card-text">I can make your websites uniquely or make a reference website for you.</p>
                        </div>
                    </div>
                    <div className="services-card-item">
                        <div className="services-card-column">
                            <div className="services-card-icon-container">
                                <svg viewBox="0 0 24 24" className="services-card-icon"><path d="M15.84 3.6a1.2 1.2 0 0 1 1.2 1.2v14.4a1.2 1.2 0 0 1-1.2 1.2h-7.2a1.2 1.2 0 0 1-1.2-1.2V4.8a1.2 1.2 0 0 1 1.2-1.2h7.2Zm-7.2-1.2a2.4 2.4 0 0 0-2.4 2.4v14.4a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.4-2.4V4.8a2.4 2.4 0 0 0-2.4-2.4h-7.2Z"></path><path d="M12.24 19.2a1.2 1.2 0 1 0 0-2.399 1.2 1.2 0 0 0 0 2.4Z"></path></svg>
                            </div>
                        </div>
                        <div className="services-card-column">
                            <h3 className="services-card-title">Fully Responsive</h3>
                        </div>
                        <div className="services-card-column">
                            <p className="services-card-text">Your websites are carefully crafted and made completely mobile responsive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}