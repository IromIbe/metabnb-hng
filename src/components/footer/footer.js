function Footer() {
  const footerLinks = [
    { name: "Community", links: ["NFT", "Tokens", "Landlords", "Discord"] },
    { name: "Places", links: ["Castle", "Farms ", "Beach", "Learn more"] },
    {
      name: "About us",
      links: ["Road map", "Creators ", "Career", "Contact us"],
    },
  ];
  return (
    <div className='bg-black pt-16 pb-8 xl:px-32 sm:flex-row flex-col lg:px-12 md:px-10 flex justify-between items-start xsm:px-5 px-3'>
      <div className='flex flex-col justify-start items-start'>
        <img
          src='/footlogo.svg'
          alt=''
          className='sm:w-[unset] xsm:w-[200px] w-[180px]'
        />
        <div className='social flex justify-start gap-7 items-center mt-16'>
          <img src='/fb.svg' alt='' />
          <img src='/ig.svg' alt='' />
          <img src='/tweet.svg' alt='' />
        </div>
        <p className='flex gap-2 mt-10'>
          <img src='/at.svg' alt='' />
          <span className='text-white text-base font-normal'>2022 Metabnb</span>
        </p>
      </div>
      <div className='flex-[.85] sm:flex-[.90] grid sm:grid-cols-3 gap-10 xsm:gap-20 sm:gap-0 sm:mt-0 mt-6	sm:grid-rows-1 xsm:grid-cols-2 xsm:grid-rows-2 grid-cols-1 grid-rows-3'>
        {footerLinks.map((links, idx) => (
          <div key={idx} className='flex flex-col justify-center items-start'>
            <h1 className='text-white font-bold text-[18px] mb-2'>
              {links.name}
            </h1>
            {links.links.map((link, idx) => (
              <ul key={idx}>
                <li className='text-[#F1F3F9] hover:text-[#A02279] cursor-pointer font-normal text-[14px] py-[7px]'>
                  {link}
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
