import React, { useEffect, useState } from 'react';
import { MdOutlineInstallDesktop, MdInstallMobile, MdPlayCircleFilled } from 'react-icons/md';
import './LauncherButton.css'

var pc = 'static/media/start-left.06cf26ec.png'


function LauncherButton() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsLaptop(userAgent.indexOf('android') === -1 && userAgent.indexOf('mobile') === -1);
  }, []);

  return (
    <div className='launcher_button'>
      {isLaptop ? (
        <a href='https://facebook.com' target='_blank'> 
          <button id='launcher'>
            <MdOutlineInstallDesktop id='launcher_icon'/>
            <br/>
            ლაუნჩერის ჩაწერა
          </button>
        </a>
      ) : (
        <a href='https://youtube.com' target='_blank'>
          <button id='launcher'>
            <MdInstallMobile id='launcher_icon'/>
            <br/>
            ლაუნჩერის ჩაწერა
          </button>
        </a>
      )
    }
    <a>
      <button id='promo'>
            <MdPlayCircleFilled id='promo_icon'/>
            <br/>
            სერვერის პრომო
      </button>
    </a>
    </div>
  );
}

export default LauncherButton;
