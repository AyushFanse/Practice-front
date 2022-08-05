import React from 'react';
import { TabTitle } from '../../Components/Common/CommonFunction'
import { useNavigate } from 'react-router-dom'
import './auth.css'

function Login({ path }) {

    TabTitle(path)
    const redirect = useNavigate()

    function handleSubmit() {
        console.log('hello')
    }
    return (
        <>
            <div className="register_container_outter flex jc">
                <div className='login_inner'>
                    <div className='login_content_section flex jc ac col'>
                        <div className='page_login_section flex jc ac col'>
                            <div className='page_login_content'>
                                <div className='login_hearder ts'>{path}</div>
                                <form onSubmit={handleSubmit} className='page_login_form flex col'>
                                    <div className="flex col">
                                        <label htmlFor="firse_name"><span className='valide_start'>*</span>First name</label>
                                        <input type="text" name="firse_name" id="firse_name" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="last_name"><span className='valide_start'>*</span>Last Name</label>
                                        <input type="text" name="last_name" id="last_name" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="email"><span className='valide_start'>*</span>Email</label>
                                        <input type="email" name="email" id="email" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="password"><span className='valide_start'>*</span>Password</label>
                                        <input type="password" name="password" id="password" required />
                                    </div>
                                    <div className="flex jc ac col">
                                        <button className="login_button" type="submit">Sign In</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;