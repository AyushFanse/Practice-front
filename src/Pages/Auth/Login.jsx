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
            <div className="login_container_outter flex jc">
                <div className='login_inner'>
                    <div className='login_content_section flex jc ac col'>
                        <div className='page_login_section flex jc ac col'>
                            <div className='page_login_content'>
                                <div className='login_hearder ts'>{path}</div>
                                <form onSubmit={handleSubmit} className='page_login_form flex col'>
                                    <div className="flex col">
                                        <label htmlFor="email"><span className='valide_start'>*</span>Email</label>
                                        <input type="text" name="email" id="email" required />
                                    </div>
                                    <div className="flex col">
                                        <label htmlFor="password" className='flex row jsb ac'><span><span className='valide_start'>*</span>Password</span><span className='forgot link' onClick={() => { redirect('account/forgot') }} > Forgot? </span></label>
                                        <input type="password" name="password" id="password" required />
                                    </div>
                                    <div className="flex jc ac col">
                                        <button className="login_button" type="submit">Sign In</button>
                                    </div>
                                </form>
                                <div className='create_account ts link' onClick={() => { redirect('/account/register') }} >Create account</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;