import React from 'react';

// social media links
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className='socialMedia'>
                <a
                    href="https://github.com/ccvuong" target="_blank" rel="noreferrer"
                    id="GitHub"

                >
                    <GitHubIcon />
                </a>
                <a
                    href="https://github.com/ccvuong" target="_blank" rel="noreferrer"
                    id="LinkedIn"

                >
                    <LinkedInIcon />
                </a>
                <a
                    href="https://github.com/ccvuong" target="_blank" rel="noreferrer"
                    id="Email"

                >
                    <EmailIcon />
                </a>

            </div>
            <p> &copy; 2023 All Rights Reserved </p>
            <p> Made with 💖 by Christina Vuong 😎 </p>
        </div>
    );
}

export default Footer