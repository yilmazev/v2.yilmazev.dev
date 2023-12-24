import React, { useState } from 'react';
import Monster from '../../assets/media/monster.png';
import MezzV2 from '../../assets/media/mezz-v2.png';
import MezzV1 from '../../assets/media/mezz-v1.png';
import HabboPie from '../../assets/media/habbopie.png';
import './Works.scss';

export default function Works() {
    const [ isOpenMonster, setIsOpenMonster ] = useState(false)
    const [ isOpenMezzV2, setIsOpenMezzV2 ] = useState(false)
    const [ isOpenMezzV1, setIsOpenMezzV1 ] = useState(false)
    const [ isOpenHabboPie, setIsOpenHabboPie ] = useState(false)

    const toggleMonster = () => {
		setIsOpenMonster(!isOpenMonster)
	}

    const toggleMezzV2 = () => {
		setIsOpenMezzV2(!isOpenMezzV2)
	}

    const toggleMezzV1 = () => {
		setIsOpenMezzV1(!isOpenMezzV1)
	}

    const toggleHabboPie = () => {
		setIsOpenHabboPie(!isOpenHabboPie)
	}

    return (
        <div id="works" className="section-works">
            <div className="works-container">
                <div className="title-group">
                    <h1 className="big-title">Works</h1>
                    <h3 className="normal-title">Our Portfolio</h3>
                </div>
                <div className="works-list">
                    <div className="works-item" onClick={ toggleMonster }>
                        <div className="works-preview" style={{ backgroundImage: `url(${Monster})` }} />
                        <div className="works-item-details">
                            <h5 className="works-item-name">Monster<br />NFT Landing Page</h5>
                        </div>
                    </div>
                    { isOpenMonster ?
                    <div className="works-item-lightbox">
                        <div className="works-item-lightbox-overlay" onClick={ toggleMonster } />
                        <img src={ Monster } alt="Monster: NFT Landing Page" className="works-item-lightbox-image" />
                    </div> : null }

                    <div className="works-item" onClick={ toggleMezzV2 }>
                    <div className="works-preview" style={{ backgroundImage: `url(${MezzV2})` }} />
                        <div className="works-item-details">
                            <h5 className="works-item-name">Mezz V2<br />Habbo Website</h5>
                        </div>
                    </div>
                    { isOpenMezzV2 ?
                    <div className="works-item-lightbox">
                        <div className="works-item-lightbox-overlay" onClick={ toggleMezzV2 } />
                        <img src={ MezzV2 } alt="Mezz V2: Habbo Website" className="works-item-lightbox-image" />
                    </div> : null }

                    <div className="works-item" onClick={ toggleMezzV1 }>
                    <div className="works-preview" style={{ backgroundImage: `url(${MezzV1})` }} />
                        <div className="works-item-details">
                            <h5 className="works-item-name">Mezz V1<br />Habbo Website</h5>
                        </div>
                    </div>
                    { isOpenMezzV1 ?
                    <div className="works-item-lightbox">
                        <div className="works-item-lightbox-overlay" onClick={ toggleMezzV1 } />
                        <img src={ MezzV1 } alt="Mezz V1: Habbo Website" className="works-item-lightbox-image" />
                    </div> : null }

                    <div className="works-item" onClick={ toggleHabboPie }>
                    <div className="works-preview" style={{ backgroundImage: `url(${HabboPie})` }} />
                        <div className="works-item-details">
                            <h5 className="works-item-name">HabboPie<br />Habbo Fansite</h5>
                        </div>
                    </div>
                    { isOpenHabboPie ?
                    <div className="works-item-lightbox">
                        <div className="works-item-lightbox-overlay" onClick={ toggleHabboPie } />
                        <img src={ HabboPie } alt="HabboPie: Habbo Fansite" className="works-item-lightbox-image" />
                    </div> : null }
                </div>
            </div>
        </div>
    )
}