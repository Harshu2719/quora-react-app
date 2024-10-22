import React from 'react';
import './AuthenticationFooter.css';

const AuthenticationFooter = () => {
    return (
        <div class="q-box qu-py--medium qu-textAlign--center qu-borderTop">
            <div class="q-text qu-dynamicFontSize--small">
                <span className='flex_wrap_wrap'>
                    <span class="q-box qu-display--none"></span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/about" target="_top" className='linkStyle'>About</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/careers" target="_top" className='linkStyle'>Careers</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/about/privacy" target="_top" className='linkStyle'>Privacy</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/about/tos" target="_top" className='linkStyle'>Terms</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/contact" target="_blank" className='linkStyle'>Contact</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/about/languages" target="_top" className='linkStyle'>Languages</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/about/your_ad_choices" target="_top" className='linkStyle'>Your Ad Choices</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <a href="https://www.quora.com/press" target="_top" className='linkStyle'>Press</a>
                    </span>
                    <span class="q-box qu-display--none"> · </span>
                    <span className='spanStyle'>
                        <span class="q-text qu-color--gray qu-display--inline">
                            © Quora, Inc. 2024
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default AuthenticationFooter
