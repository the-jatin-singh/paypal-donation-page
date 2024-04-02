
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
 


const Share = () => {
  return (
    <div className='w-full border-[2px] border-[#F6F5EF] p-[16px] flex flex-col items-center rounded-[14px]'>
      <h2>Share and Inspire others</h2>
      <div className='flex gap-[20px] my-[18px]'>
        <div className='w-[54px] h-[54px] bg-[#F6F5EF] rounded-full flex items-center justify-center text-[#152B8E] text-[20px]'><FontAwesomeIcon icon={faFacebook} /></div>
        <div className='w-[54px] h-[54px] bg-[#F6F5EF] rounded-full flex items-center justify-center text-[#152B8E] text-[20px]'><FontAwesomeIcon icon={faTwitter} /></div>
        <div className='w-[54px] h-[54px] bg-[#F6F5EF] rounded-full flex items-center justify-center text-[#152B8E] text-[20px]'><FontAwesomeIcon icon={faEnvelope} /></div>
      </div>

      <div className='w-full px-2 lg:px-[34px] py-[50px] bg-[#F6F5EF]'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-wrap text-[14px] md:text-[16px]'>
            {["h","t","t","p",":","/","/","w","w","w",".","e","x","a","m","p","l","e",".","c","o","m"].map((letter, index) => (
              <span key={index} className='text-[#003087]'>{letter}</span>
            ))}
          </div>
          <button className='bg-[#ffffff] text-[#003087] py-[10px] px-[16px] text-[14px] md:text-[16px] border-[2px] border-[#003087] rounded-[25px]'>Copy</button>
        </div>

      </div>
      
    </div>
  )
}

export default Share