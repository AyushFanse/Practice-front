import React from 'react'
import { TabTitle, Path } from '../../Components/Common/CommonFunction'
import '../pages.css'

const ReturnsPolicy = ({ path }) => {

    TabTitle(`${path} | Kitsxi`)

    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex js ac col'>
                        <i className='pages_content'>
                            We offer a 14 day refund policy.
                        </i>
                        <i className='pages_content'>
                            A refund will only be issued in the event of the items being not accurately described in the product description.
                        </i>
                        <i className='pages_content'>
                            We are happy to offer an exchange for a different size of your item providing we have it in stock.
                        </i>
                        <i className='pages_content'>
                            Returns will be at the cost of the buyer and we would advise to use a signed for delivery method to ensure the items get back to us safe sound.
                        </i>
                        <i className='pages_content'>
                            We will automatically reject your refund request if any of the following apply:
                        </i>
                        <i className='pages_content'>
                            <ul>
                                <li>Tags are removed.</li>
                                <li>Items have been washed.</li>
                                <li>Items are scented with aftershave, perfume or smoke.</li>
                                <li>Items have been altered, stretched or damaged in anyway.</li>
                            </ul>
                        </i>
                        <i className='pages_content'>
                            To initiate a return, please contact us on kitsxiteam@gmail.com or message us on our social medias:
                        </i>
                        <i className='pages_content'>
                            Instagram - KitsXI
                        </i>
                        <i className='pages_content'>
                            Snapchat - KitsXI
                        </i>
                        <i className='pages_content'>
                            Thank you for your coorperation!
                        </i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReturnsPolicy