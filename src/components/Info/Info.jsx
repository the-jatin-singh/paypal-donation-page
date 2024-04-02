import receipt from '../../assets/receipt.png';
import salary from '../../assets/salary.png';
import safety from '../../assets/safety.png';
import InfoItem from './InfoItem/InfoItem';

const Info = () => {

    const infoItems = [
        {
            id:"1",
            icon: receipt,
            title:'Safe and secure donations',
            des:'Charities are in good standing so you can give with confidence.',
        },
        {
            id:"2",
            icon: safety,
            title:'No transaction fees',
            des:'Help charities apy less in fees and do more with your donation.',
        },
        {
            id:"3",
            icon: salary,
            title:'Receive a tax receipt',
            des:'A Record of your kindness is sent to your inbox.', 
        },
    ]


  return (
    <>
    <div className='w-full bg-[#F6F5EF] py-[54px]'>
        <h4 className='text-center mb-[40px] px-1 text-[22px] md:text-[32px]'>PayPal helps your gifts do more good</h4>
        <div className='flex flex-wrap items-center justify-center gap-[42px]'>
            {infoItems.map((item) => (
                <InfoItem key={item.id} item={item} />
            ))}
        </div>
    </div>
    <div className=' flex items-center justify-center'>
        <p className='w-[90vw] lg:w-[1196px] py-[40px] text-[15px] md:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ex enim sapiente exercitationem saepe, necessitatibus aliquid! Blanditiis beatae iusto consectetur, corrupti ipsa earum nulla unde fugiat, vero aliquid commodi mollitia. Vero corrupti alias necessitatibus, laudantium ipsam pariatur distinctio, dolorem voluptatibus adipisci ducimus ratione sit cum at, modi placeat assumenda minus debitis repellat soluta a delectus porro! Molestiae obcaecati voluptates quia nobis ab omnis voluptatibus expedita. Aperiam porro aliquam ullam dicta! Nesciunt voluptatum asperiores nobis animi illo soluta nam sit maiores! Atque culpa a facere autem, iusto architecto dolores nemo quos ipsum hic expedita voluptatibus reiciendis consequatur assumenda temporibus nesciunt dicta?</p>
    </div>
    </>
  )
}

export default Info