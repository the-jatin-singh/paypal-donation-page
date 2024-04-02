import React from 'react';
import './ProfileDisplay.css';
import back from '../../assets/arrow-icon.svg';
import backgroundImageUrl from '../../assets/bg.jpg';
import profileImageUrl from '../../assets/profile.jpg';

const ProfileDisplay = () => {
  return (
    <div className='mb-[50px] md:mb-[100px]'>
      <a href="/" className='text-[#1975E8] font-medium flex gap-[9px] text-[15px] md:text-[18px] lg:ml-[58px] mt-[28px]'>
        <img height={19} width={20} src={back} alt="back" />
        Donate with PayPal
      </a>

      <div 
        className='bg-img flex mt-[30px] items-end w-[80vw] h-[180px] lg:h-[255px] rounded-t-[26px]'
        style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div 
          className='profile-img h-[100px] w-[100px] lg:h-[156px] lg:w-[156px] rounded-[50%] relative top-[50px] lg:top-[78px] left-[13px] border-[1px] border-[#C8C8C8]'
          style={{ backgroundImage: `url(${profileImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
