import React, { useState } from 'react'

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const userEmail = (e)=> {
        setEmail(e.target.value)
    }
    const userPassword = (e)=> {
        setPassword(e.target.value)
    }
    const style = {
        border: '1px solid black',
        width: '100%',
        height: '40px',
        marginBottom: '20px',
        borderRadius: '4px',
    }
  return (
    <div>
        <div><h1>Quora</h1></div>
        <div><p>A place to share knowledge and better understand the world</p></div>
        <div style={{display: 'flex'}}>
            <div style={{width: '400px'}}>
                <p>By continuing you indicate that you agree to Quora’s Terms of Service and Privacy Policy.</p>
                <div >
                    <button>Continue with Google</button><br/>
                    <button>Continue with Facebook</button><br/>
                    <button>Sign up with email</button><br/>
                </div>
                
            </div>
            <div>
                <p>Login</p>
                <form>
                    <label>Email</label>
                    <input
                        style={style}
                        type="email"
                        id="email"
                        value={email}
                        onChange={userEmail}
                        placeholder="Your email"
                    />
                    <br />
                    <label>Password</label>
                    <input
                        style={style}
                        type="password"
                        id="password"
                        value={password}
                        onChange={userPassword}
                        placeholder="Your Password"
                    />
                    <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
        <div><p>Language</p></div>
        <div><p>AboutCareersPrivacyTermsContactLanguagesYour Ad ChoicesPress© Quora, Inc. 2024</p></div>
    </div>
  )
}

export default Authentication