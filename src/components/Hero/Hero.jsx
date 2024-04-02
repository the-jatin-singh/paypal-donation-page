import Donate from '../Donate/Donate';
import Share from '../Share/Share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <div
            className=" flex-col lg:flex-row flex p-[20px] w-[80vw] gap-[20px] mb-[34px]"
        >
            <div className="left-main">
                <p className="mb-[4px] text-[16px] md:text-[18px]">Donate to PayPal Giving Fund</p>
                <div className="flex flex-col gap-[20px] md:gap-[28px]">
                    <h2 className="text-[22px] md:text-[48px]">Figures of Speech Theatre</h2>
                    <span className='w-fit text-[15px] px-[11px] py-[8px] bg-[#D1F2FE] text-[#0D2672] rounded-full'>Arts & Culture</span>
                    <div className="text-[16px] md:text-[18px]">
                        <p>Freeport, ME</p>
                        <p>EIN: 01-0432620</p>
                    </div>
                    <div className="flex gap-[15px]">
                        <div className="text-[20px] text-[#152B8E] w-[55px] h-[55px] bg-[#F6F6FD] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="text-[20px] text-red-500 w-[55px] h-[55px] bg-[#F6F6FD] rounded-full flex items-center justify-center"><FontAwesomeIcon icon={faHeart} /></div>
                    </div>
                    <p className="text-[16px] md:text-[18px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, at quos praesentium et architecto assumenda iure ab accusamus dicta, est minima deleniti eligendi, molestias consequuntur sequi officiis laboriosam quasi odit!
                        Cum, doloremque? Adipisci maiores tenetur facere facilis amet saepe nam esse sint dolorum, libero quam eius exercitationem unde quia itaque fuga at. Officiis dicta, neque libero assumenda nobis laboriosam et!
                    </p>
                    <p className="text-[14px] md:text-[15px]">Source: PayPal Giving Fund charity</p>
                    <p className="text-[14px] md:text-[15px] text-[#4F4F4F]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, fugit.</p>

                </div>

            </div>
            <div className="flex flex-col right-main w-full lg:w-[480px]">
                <Donate />
                <Share />
            </div>
        </div>
    )
}

export default Hero