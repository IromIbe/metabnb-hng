import { AiOutlineClose } from "react-icons/ai";

const preferred_wallet = [
  { img: "/mask.webp", name: "Metamask" },
  { img: "/connect.webp", name: "WalletConnect" },
];
function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className='overlay bg-[#33333340] fixed w-full h-full top-0 left-0 right-0 bottom-0'>
      <div className='modal bg-white rounded-[16px] max-w-[600px] w-full flex-col sm:h-[unset] h-screen fixed sm:top-[50%] sm:left-[50%] flex sm:translate-x-[-50%] sm:translate-y-[-50%]'>
        <div className='header flex justify-between items-center w-full pt-8 pb-4 xmd:px-8 px-3'>
          <h4 className='font-bold text-[#333333] text-[24px]'>
            Connect Wallet
          </h4>
          <AiOutlineClose className='text-[#333333]' onClick={onClose} />
        </div>
        <div className='content border-[#CFD8DC] border-t-[1px]'>
          <div className='xmd:px-8 px-3 pt-8'>
            <p className='text-[#333333] text-base font-normal mb-2'>
              Choose your preferred wallet:
            </p>
            <div className='preferred-wallet'>
              {preferred_wallet.map((wallet, idx) => (
                <button
                  key={idx}
                  className='bg-[#F8F9FA] flex justify-between items-center px-4 py-3 border-[1px] rounded-[12px] mb-5 w-full'
                >
                  <div className='flex justify-center gap-4 items-center'>
                    <img src={wallet.img} alt={wallet.name} />
                    <span>{wallet.name}</span>
                  </div>
                  <img src='/arrow.webp' alt='' className='w-[13px]' />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
