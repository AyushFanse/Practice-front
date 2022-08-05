import React from 'react';
import { TabTitle, Path } from '../../Components/Common/CommonFunction'

function QualityGuarantee({path}) {

    TabTitle(`${path} | Kitsxi`)
    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex js ac col'>
                        <div className='pages_content'>
                            Our shirts are modern inspired replicas based on the original manufacturer versions. Our shirts still include the same embroidery, name-set and merchandise badging as original versions.
                        </div>
                        <div className='pages_content'>
                            You will not be disappointed with the quality of our shirts.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QualityGuarantee;