import React from 'react';
import { TabTitle, Path } from '../../Components/Common/CommonFunction'

const SizeGuide = ({ path }) => {

    TabTitle(`${path} | Kitsxi`)

    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex js ac col'>
                        <div className='pages_content'>
                            Sizes are standard European sizes. We recommend you to buy your usual size or size up if you are generally in between sizes.
                        </div>
                        <div className='pages_content'>
                            <img
                                className='pages_content_size_guide'
                                src="..\Images\banner\size_guide.webp"
                                alt=""
                            />
                        </div>
                        <div className='pages_content'>
                            If you have any questions or require any assistance with your order please contact us on any of our social medias or via email:
                        </div>
                        <div className='pages_content'>
                            Instagram - KitsXI
                        </div>
                        <div className='pages_content'>
                            Snapchat - KitsXI
                        </div>
                        <div className='pages_content'>
                            Email - Kitsxiteam@gmail.com
                        </div>
                        <div className='pages_content'>
                            We will respond to your enquiry within an hour. Guaranteed
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SizeGuide;