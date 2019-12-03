import React from 'react'
import { Parallax } from 'react-parallax'
import Trend from './side-components/Trend'
import Title from '../../misc/Title'
import Selection from './side-components/Selection'
import InstagramSection from './side-components/InstagramSection';

export default function MainPage() {
    return (
        <div className="main-page">
            <div className="trends-container">
                <Trend 
                    imgUrl = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Ftrends%2Ftrends1.jpg?alt=media&token=411d7a71-854d-4046-ba3b-0d84836b2b08'
                    title = 'Tights'
                    desc = 'them really good'
                    btnName = 'discover'
                    link = '/products/tights'
                />

                <Trend 
                    imgUrl = 'https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Ftrends%2Ftrends2.jpg?alt=media&token=037a2fb8-71a6-4a9c-9653-188f6c200671'
                    title = 'Bralettes'
                    desc = 'them good too'
                    btnName = 'discover'
                    link = '/products/bralettes'
                />
            </div>
            <div className="selections">
                <Title 
                    text="meet Segreto" 
                    desc="our new lingerie collection. made to be your special secret"    
                />
                <div className = "selections-container">
                    <Selection 
                        imgUrl = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Fselections%2Fsel1.jpg?alt=media&token=5295ae8c-3973-4dfc-9edb-1a12d38342e2"
                        title = "segreto. bridal"
                        desc = "for something special"
                        btnName = "open"
                    />
                    <Selection 
                        imgUrl = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Fselections%2Fsel2.jpg?alt=media&token=7b547087-cb42-42a0-9517-11dc131e561e"
                        title = "segreto. lingerie"
                        desc = "for something personal"
                        btnName = "open"
                    />
                    <Selection 
                        imgUrl = "https://firebasestorage.googleapis.com/v0/b/petite-auth-49202.appspot.com/o/other%20images%2Fselections%2Fsel3.jpg?alt=media&token=8a9860bd-5190-4184-a340-96d497cb0107"
                        title = "segreto. hosiery"
                        desc = "for something tender"
                        btnName = "open"
                    />
                </div>
            </div>
            <div className="parallax-container">
                <Parallax
                    blur={{ min: -1, max: 3 }}
                    bgImage={require('../../images/parallax/parallax-banner2.png')}
                    bgImageAlt="parallax-1"
                    strength={300}
                    contentClassName="parallax-background"
                >   
                    <div className="parallax-content-section">
                        <div className="parallax-top-info">
                            <h2 className="parallax-title">we`re on instagram!</h2>
                            <p className="parallax-description">come find us and become 
                            a part of our cozy community</p>
                            <button className="btn btn-white">We`re here</button>
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
                    text = "We`re on Instagram"
                    desc= "So come find us!"
                /> 
                <div className="parallax-mobile-container">
                    <div className="parallax-mobile-info">
                        <Title 
                            text = "show us your pm look"
                            desc= "share your look with us, add #iampm to your image and watch yourself on our main page!"
                        />
                        <button className="btn btn-white">We`re here</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}
