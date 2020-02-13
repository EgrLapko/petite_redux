import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'
import Trend from './side-components/Trend'
import Title from '../../misc/Title'
import Selection from './side-components/Selection'
import InstagramSection from './side-components/InstagramSection';

const MainPage = () => {  
    useEffect(() => window.scrollTo(0, 0), []);  
    return (
        <div className="main-page">
            <div className="trends-container">
                <Trend 
                    imgUrl = 'https://i.imgur.com/VDmv6Zw.jpg'
                    title = 'Tights'
                    desc = 'them really good'
                    btnName = 'discover'
                    link = '/products/accessories_tights'
                />

                <Trend 
                    imgUrl = 'https://i.imgur.com/Y1I7awC.jpg'
                    title = 'Bralettes'
                    desc = 'them good too'
                    btnName = 'discover'
                    link = '/products/bras_bralettes'
                />
            </div>
            <div className="selections">
                <Title 
                    text="meet Segreto" 
                    desc="our new lingerie collection. made to be your special secret"    
                />
                <div className = "selections-container">
                    <Selection 
                        imgUrl = "https://i.imgur.com/1mzr32T.jpg"
                        title = "segreto. bridal"
                        desc = "for something special"
                        btnName = "open"
                    />
                    <Selection 
                        imgUrl = "https://i.imgur.com/U6ztk6y.jpg"
                        title = "segreto. lingerie"
                        desc = "for something personal"
                        btnName = "open"
                    />
                    <Selection 
                        imgUrl = "https://i.imgur.com/2RbHQui.jpg"
                        title = "segreto. hosiery"
                        desc = "for something tender"
                        btnName = "open"
                    />
                </div>
            </div>
            <div className="parallax-container">
                <Parallax
                    blur={{ min: -1, max: 3 }}
                    bgImage={require('../../images/parallax/parallax-banner2.jpg')}
                    bgImageAlt="parallax-1"
                    strength={300}
                    contentClassName="parallax-background"
                >   
                    <div className="parallax-content-section">
                        <div className="parallax-top-info">
                            <h2 className="parallax-title">We are on instagram!</h2>
                            <p className="parallax-description">come find us and become 
                            a part of our cozy community</p>
                            <button className="btn btn-white">Here!</button>
                        </div>
                        <div className="insta-section">
                            <Title 
                                text = "show us your pd look"
                                desc= "share your look with us, add #iampd to your image and watch yourself on our main page!"
                            />
                            <InstagramSection />
                        </div>  
                    </div>       
                </Parallax>
            </div>

            
            <div className="parallax-mobile">
                <Title 
                    text = "We are on Instagram"
                    desc= "So come find us!"
                /> 
                <Parallax
                    bgImage={require('../../images/parallax/parallax-banner2.jpg')}
                    bgImageAlt="parallax-1"
                    strength={500}
                    contentClassName="parallax-background"
                >   
                    <div className="parallax-mobile-section">
                        <div className="parallax-mobile-info">
                            <Title 
                                text = "show us your pm look"
                                desc= "share your look with us, add #iampm to your image and watch yourself on our main page!"
                            />
                            <button className="btn btn-pink"><i className="fab fa-instagram"></i></button>
                        </div>
                    </div>       
                </Parallax>
            </div>
        </div>
    )
};

export default MainPage;
