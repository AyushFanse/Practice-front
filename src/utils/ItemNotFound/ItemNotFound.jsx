import React from 'react';
import { TabTitle, Path } from '../../Components/Common/CommonFunction'

const ItemNotFound = ({ path }) => {

    TabTitle(path)

    function handleSubmit(){
        console.log('hello')
    }


    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex jc ac'>
                        <div className='pages_request_section flex jc ac col'>
                            <h2 className='pages_request_headline' >Request a shirt</h2>
                            <div className='pages_request_content'>
                                If you can't find a shirt on our website please fill out this form and we will try our best to comply with your request.
                            </div>
                            <div className='pages_request_content'>
                                You will receive a message from us regarding your request within one hour!
                            </div>
                            <div className='pages_request_content'>
                                <form onSubmit={handleSubmit} className='pages_request_form flex col'>
                                    <div className="flex col">
                                        <label htmlFor="firse_name"><span className='valide_start'>*</span>First Name</label>
                                        <input type="text" name="firse_name" id="firse_name" required/>
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="last_name"><span className='valide_start'>*</span>Last Name</label>
                                        <input type="text" name="last_name" id="last_name" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="email"><span className='valide_start'>*</span>Email Address or Instagram</label>
                                        <input type="text" name="email" id="email" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="describtion"><span className='valide_start'>*</span>Describe the shirt you would like</label>
                                        <input type="text" name="describtion" id="describtion" required />
                                    </div>
                                    <div className="flex jc ac col">
                                        <button className="request_button" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <hr className='hr' />
                            <div className="powr_mark_outter">
                                <a className="link flex jc ac col" href="https://www.powr.io?src=watermark_formBuilder" target="_blank" rel="noopener noreferrer">
                                    <img alt="POWR logo" className="powr_mark_logo" src="https://www.powrcdn.com/images/svgs/logo/powr-logo.svg" />
                                    <span className="powr_mark link">
                                        <span>Form Builder</span> - Create your own for free!
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemNotFound;