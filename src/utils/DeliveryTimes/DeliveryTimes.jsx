import React from 'react';
import { TabTitle, Path } from '../../Components/Common/CommonFunction'

const DeliveryTimes = ({ path }) => {

    TabTitle(`${path} | Kitsxi`)
    
    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex js ac col'>
                        <div className='pages_content'>
                            All shirts will be shipped within <b>24 hours</b> of your order.
                        </div>
                        <div className='pages_content'>
                            Delivery time will depend on your address.
                        </div>
                        <div className='pages_content'>
                            For UK addresses it will take <b>5 working days</b> for your shirt to arrive. However with demand this can occasionally take longer up to 15 working days. Shipping is <b>free</b> for <b>UK buyers</b>.
                        </div>
                        <div className='pages_content'>
                            For Non UK buyers it will take <b>10 working days</b> for your shirt to arrive. However with demand this can occasionally take longer up to 15 working days.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeliveryTimes;