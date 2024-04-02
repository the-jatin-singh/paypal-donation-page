import logo from '../../assets/paypal.svg'

const Navbar = () => {
  return (
    <div className="navbar-container w-full lg:h-[124px] md:h-[80px] h-[60px] px-[26px] flex items-center justify-between border-b-[2px] border-[#C8C8C8]">
        <div className='flex items-center gap-[70px]'>
            <img width={34} height={34} src={logo} alt="logo" />
            <div className='lg:flex hidden md:flex items-center gap-[46px] sm:hidden'>
                <a href="/">Personal</a>
                <a href="/">Business</a>
                <a href="/">Developer</a>
                <a href="/">Help</a>
            </div>
        </div>

        <div className='lg:flex hidden md:hidden items-center gap-[20px] sm:hidden'>
            <button className='bg-[#ffffff] text-[#003087] py-[13px] px-[34px] border-[2px] border-[#003087] rounded-[25px]'>My PayPal</button>
            <button className='bg-[#ffffff] text-[#003087] py-[13px] px-[34px] border-[2px] border-[#003087] rounded-[25px] '>Logout</button>
        </div>

        <div className='w-8 flex flex-col gap-[4px] md:hidden'>
          <div className='w-full h-1 rounded-lg bg-[#003087]'></div>
          <div className='w-full h-1 rounded-lg bg-[#003087]'></div>
          <div className='w-full h-1 rounded-lg bg-[#003087]'></div>
        </div>
    </div>
  )
}

export default Navbar
