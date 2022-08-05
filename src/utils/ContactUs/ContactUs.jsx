import React, { useRef } from "react"
import { TabTitle, Path } from '../../Components/Common/CommonFunction'

function ContactUs({ path }) {

    const contactForm = useRef();
    TabTitle(`${path} | Kitsxi`)

    const sendEmail = () => {
        alert('sent')
    }

    return (
        <>
            <Path path={path} />
            <div className="pages_container_outter flex jc">
                <div className='pages_inner'>
                    <div className='pages_hearder'>{path}</div>
                    <div className='pages_content_section flex js ac col'>
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
                        <div className='pages_contact_form_outter'>
                            <form ref={contactForm} onSubmit={sendEmail} className="pages_contact_form flex col">
                                <div className='pages_contact_form_section_outter flex'>
                                    <div className='pages_contact_form_section flex col'>
                                        <label className='pages_contact_title' htmlFor='name'>Name</label>
                                        <input
                                            type='text'
                                            id='name'
                                            name='name'
                                            required
                                        />
                                    </div>
                                    <div className='pages_contact_form_section flex col'>
                                        <label className='pages_contact_title' htmlFor='email'>Email</label>
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='pages_contact_form_section flex col'>
                                    <label className='pages_contact_title' htmlFor='message'>Message</label>
                                    <textarea
                                        className='textArea'
                                        id='message'
                                        rows='10'
                                        name='message'
                                        required
                                    />
                                </div>
                                <span className='pages_contact_form_icon flex jc ac pages_contact_title'>Send</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;