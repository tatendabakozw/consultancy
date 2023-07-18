import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <div className="flex flex-1 bg-secondary-superlight">
      <div className=' grid grid-cols-2 w-full max-w-7xl mx-auto px-4'>
        <div className="col-span-1 h-full grid items-center content-center justify-center flex-1 space-y-6">
          <div className='text-sm font-semibold text-secondary-dark'>Law firm</div>
          <div className='text-6xl text-slate-900'>Overcome legal obstacles to your <span className='text-secondary-dark'>
          success!</span></div>
          <div className='text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magni iusto minima provident alias necessitatibus mollitia in labore excepturi soluta eos, accusamus veritatis ratione quia corporis enim harum atque saepe?</div>
           <div className='flex'>
           <div className='background bg-secondary-original px-4 py-4 font-semibold'>Book a free consultation</div>
           </div>
         
        </div>
        <div className="cols-span-1  bg-red-200 h-full flex-1"></div>
      </div>
      </div>
    </GeneralLayout>
  )
}

export default Home