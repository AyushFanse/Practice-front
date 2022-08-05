import React from 'react';

const ShopItems = () => {

    const Teams = [ `AC Milan`, `Arsenal`, `Barcelona`, `Bayern Munich`, `Chelsea`, `Inter Milan`, `Juventus`, `Liverpool`, `Manchester City`, `Manchester United`, `PSG`, `Tottenham Hotspur`]

    return (
        <>
            <div className='shop_items_outer flex js ac'>
                {Teams.map((i, index) => (
                    <div className="CardOut" key={index}>
                        <div className="Card">
                            <img
                                src={`./Images/Shirts/${i} Home Kit.webp`}
                                alt=""
                                data-aos="zoom-out"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1100"
                            />
                            <div className="CardData flex">
                                <div className="Navigation flex">
                                    <h3 className='timeline_underline'>
                                        {i}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ShopItems;