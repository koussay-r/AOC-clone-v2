import fedi from './../../assets/team/fedi.jpg';
import oussama from './../../assets/team/oussama.png';
import malk from './../../assets/team/malk.jpeg';
import mayssa from './../../assets/team/mayssa.jpeg';
import yesmine from './../../assets/team/yassmin.jpeg';
import dali from './../../assets/team/dali.jpg';

export default function TeamSubComp() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                width='52'
                height='24'
              />
            </svg>
          </span>
          Meet The Team Demo :)
        </h2>
      </div>
      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={fedi}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Dr. Fedi Kacem
              </p>
              <p className='mb-4 text-xs text-gray-100'>Coordinator</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                fadi.kacem@fsb.u-carthage.tn
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={yesmine}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Yassmine Attyaoui
              </p>
              <p className='mb-4 text-xs text-gray-100'>President</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                yasmineatt23@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={oussama}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Oussama Soltani
              </p>
              <p className='mb-4 text-xs text-gray-100'>Vice President</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                soltanioussama9@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={mayssa}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Mayssa Oueslati
              </p>
              <p className='mb-4 text-xs text-gray-100'>Secretary</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                oueslatimayssa0@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={dali}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Mohamed Ali Jelidi
              </p>
              <p className='mb-4 text-xs text-gray-100'>Founder/Supervisor</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                medali7005@hotmail.fr
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
            <img
              className='object-cover w-full h-56 md:h-64 xl:h-80'
              src={malk}
              alt='Person'
            />
            <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p className='mb-1 text-lg font-bold text-gray-100'>
                Malek Ouali
              </p>
              <p className='mb-4 text-xs text-gray-100'>Events Manager</p>
              <p className='mb-4 text-xs tracking-wide text-gray-400'>
                malekouali12102001@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
