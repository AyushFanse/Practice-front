import React from 'react'
import { TabTitle } from '../../Components/Common/CommonFunction'
import DisplayCards from '../../Components/DisplayCards/DisplayCards'
import ShopItems from '../../Components/DisplayCards/ShopItems'
import { ArrowRightAlt } from '@mui/icons-material'
import './display.css';

const display = ({path}) => {

    TabTitle(path)

    const videos = [
        `https://cdn.shopify.com/videos/c/o/v/3f91a058fc7d49df8dbc649a5b7db52f.mp4`,
        `https://cdn.shopify.com/videos/c/o/v/ef624d74aac84f30a5d88a9da44ed7fe.mp4`
    ]

    return (
        <>
            <div className='mar_50 flex jc ac display_video'>
                <video
                    muted={true}
                    autoPlay={true}
                    on="true"
                    phone="true"
                    playsInline={true}
                    controls={true}
                    src={videos[Math.floor(Math.random() * videos.length)]}
                    width='100%'
                />
            </div>
            <div className="mar_50 bestseller">
                <h2 className='display_title'>Best Sellers</h2>
                <DisplayCards />
            </div>
            <hr className="hr" />
            <div className='mar_50 browse_shirt_outter flex jse ac'>
                <div className='browse_shirt_img_outter'>
                    <div className='browse_shirt_img'>
                        <img
                            src="./images/banner/banner.webp"
                            alt=""
                            data-aos="zoom-out"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1100"
                            width='100%'
                        />
                    </div>
                </div>
                <div className='browse_shirt_temp_outter col'>
                    <h2 className=''>Browse our shirts</h2>
                    <div className='buy_now flex js ac row' style={{ margin: 0 }}>
                        <span>
                            Shop Now
                        </span>
                        <ArrowRightAlt className='arrow' id='icon' />
                    </div>
                </div>
            </div>
            <hr className="hr" />
            <div className="mar_50">
                <h2 className='display_title'>Shop by Teams</h2>
                <ShopItems />
            </div>
            <div className='pages_content'>
                More kits will be added once they are released
            </div>
        </>
    );
}

export default display;