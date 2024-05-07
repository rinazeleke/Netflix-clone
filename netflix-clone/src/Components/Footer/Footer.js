import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer_outer-container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          < YouTubeIcon/>

        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio description</li>
              <li>Investor relatons</li>
              <li>Lagal Notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferencese</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of Use</li>
              <li>Comparate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media content</li>
              <li>Privacy</li>
              <li>Content Use</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>service code</p>
        </div>
        <div className='copy_write'>
          $copy; 1997-2024 Netflix,Inc.
        </div>

      </div>
    </div>
  )
}

export default Footer
