import receipt from '../../../assets/receipt.png';
import salary from '../../../assets/salary.png';
import safety from '../../../assets/safety.png';

const InfoItem = ({item}) => {
  return (
    <div className='w-[270px] lg:w-[364px] flex flex-col gap-[15px] items-center text-center' key={item.id}>
        <img width={100} src={item.icon} alt={item.title} />
        <h5 className='font-semibold text-[15px] md:text-[18px]'>{item.title}</h5>
        <p className='text-[15px] md:text-[18px]'>{item.des}</p>
    </div>
  )
}

export default InfoItem