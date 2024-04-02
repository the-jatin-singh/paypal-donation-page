import React, { useState } from 'react'

const Donate = () => {


  const donationAmount = ["$25", "$50", "$100", "$200", "Other"];

  const [activeIndex, setActiveIndex] = useState(null);
  const handleSelect = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className='w-full lg:w-[480px] mb-[30px]'>
      <div className='flex flex-wrap items-center gap-[15px] w-full'>
        {donationAmount.map((amount, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`${activeIndex === index ? 'bg-[#152B8E] text-white' : 'bg-white text-black'} text-[14px] md:text-[16px] flex items-center justify-center border-[1px] border-[#BFBFBF20] w-[90px] h-[50px] md:w-[150px] md:h-[68px] rounded-[8px] shadow-md`}>{amount}</div>
        ))}
      </div>
      <div className='flex flex-col gap-[16px] mt-[35px] items-start'>
        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 accent-[#152B8E] bg-gray-100 border-gray-300 rounded focus:ring-[#152B8E]"
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 text-[14px] md:text-[16px]"
          >
            Share my name and email with this charity.
          </label>
        </div>
        <button className='py-[15px] px-[35px] text-white rounded-full bg-[#152B8E]'>Donate Now</button>
        <div className='text-[14px] md:text-[15px] '>
          <ul className="list-disc ml-[20px]">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laboriosam ad accusantium aspernatur, pariatur nostrum placeat sint quae quasi? Placeat!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, consequuntur! <a href="/" className='text-[#206DBA]'>subject to it's terms</a>.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur nostrum unde optio adipisci repellat in est molestias molestiae consequatur, aliquid autem ad doloremque rerum atque.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Donate