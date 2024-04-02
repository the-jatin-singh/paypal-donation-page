import footerLogo from '../../assets/paypal-main.svg';
import usa from '../../assets/usa.svg';

const Footer = () => {

    const topLinks = [
        {
            id:'1',
            title:"Help",
            href:"/"
        },
        {
            id:'2',
            title:"Contact",
            href:"/"
        },
        {
            id:'3',
            title:"Fees",
            href:"/"
        },
        {
            id:'4',
            title:"Security",
            href:"/"
        },
        {
            id:'5',
            title:"Apps",
            href:"/"
        },
        {
            id:'6',
            title:"Shop",
            href:"/"
        },
        {
            id:'7',
            title:"Blog",
            href:"/"
        },
        {
            id:'8',
            title:"Jobs",
            href:"/"
        },
    ]

    const bottomLinks = [
        {
            id:'1',
            title:"About",
            href:"/"
        },
        {
            id:'2',
            title:"Investor Relations",
            href:"/"
        },
        {
            id:'3',
            title:"Legal",
            href:"/"
        },
        {
            id:'4',
            title:"Press",
            href:"/"
        },
        {
            id:'5',
            title:"Developers",
            href:"/"
        },
        {
            id:'6',
            title:"Advertising",
            href:"/"
        },
        {
            id:'7',
            title:"Affiliates",
            href:"/"
        },
    ]

  return (
    <div className='w-full px-1 lg:px-[24px]'>
        <img width={194} src={footerLogo} alt="paypal" />
        <div>
            <div className='flex md:flex-row flex-col justify-between md:items-center pb-[24px] border-b-[1px] border-[#C8C8C8] md:ml-0 ml-[18px] '>
                <div className='flex md:flex-row flex-col gap-[18px] mb:mt-0 mb-[18px]'>
                    {topLinks.map((link) => (
                        <a className='text-[15px] text-[#152B8E] font-medium' key={link.id} href={link.href}>{link.title}</a>
                    ))}
                </div>
                <img width={20} src={usa} alt="usa" />
            </div>
            <div className='flex md:flex-row flex-col justify-between md:items-center mt-[24px] mb-[80px] md:ml-0 ml-[18px]'>
                <div className='flex md:flex-row flex-col gap-[18px]'>
                    {bottomLinks.map((link) => (
                        <a className='text-[15px] text-[#152B8E] font-medium' key={link.id} href={link.href}>{link.title}</a>
                    ))}
                </div>
                <div className='flex md:flex-row flex-col gap-[18px]'>
                    <p className='text-[15px] md:mt-0 mt-[18px] text-[#4F4F4F] font-medium'>© 1999-2022</p>
                    <div className='flex md:flex-row flex-col gap-[18px]'>
                        <a className='text-[15px] text-[#152B8E] font-medium' href="/">Privacy</a>
                        <a className='text-[15px] text-[#152B8E] font-medium' href="/">Legal</a>
                        <a className='text-[15px] text-[#152B8E] font-medium' href="/">Feedback</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer