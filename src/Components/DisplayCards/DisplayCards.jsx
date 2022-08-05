import React from 'react'
import { Link } from 'react-router-dom'
import './displaycards.css'

function DisplayCards() {

    const Teams = [`Arsenal`, `PSG`, `Juventus`, `Manchester City`, `Bayern Munich`, `Barcelona`, `AC Milan`, `Chelsea`, `Inter Milan`]

    return (
        <>
            <div className="card_container flex ac row">
                {Teams.map((i, ind) => (
                    <div className="card_outer" key={ind}>
                        <Link to='/' className="card">
                            <img
                                src={`./Images/Shirts/${i} Home Kit.webp`}
                                alt=''
                                sizes="317px"
                                data-aos="zoom-out"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1100"
                            />
                            <div>
                                <h2 className="card_title font">
                                    {i}
                                </h2>
                                <h4 className="price font">from ₹400</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DisplayCards