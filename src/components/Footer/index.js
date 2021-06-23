import { AiOutlineInstagram } from 'react-icons/ai'

function Footer({ Fade }) {
  return (
    <Fade bottom delay={200}>
      <div className="flex justify-center">
        <div className=" max-w-md w-full bg-gray-800 p-4 rounded-t-2xl">
          <div className="text-lg font-bold text-white mb-2">Kunjungi Kami di:</div>
          <div className="flex flex-col">
            <a 
              className="text-gray-200 text-sm font-semibold mx-1 flex flex-row items-center"
              target="_blank" 
              rel="noreferrer noopener" 
              href="https://www.instagram.com/muktiag29/">
              <div className="mr-1"><AiOutlineInstagram /></div>
              <div>Mukti Aji Guno</div>
            </a>
            <a 
              className="text-gray-200 text-sm font-semibold mx-1 flex flex-row items-center"
              target="_blank" 
              rel="noreferrer noopener" 
              href="https://www.instagram.com/ar_dyn29/">
              <div className="mr-1"><AiOutlineInstagram /></div>
              <div>Siti Ardiyanti</div>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Footer