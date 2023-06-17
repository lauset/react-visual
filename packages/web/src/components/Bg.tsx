import './Bg.scss'
import Bottom from './Bottom'

function Bg() {
  return (
    <>
      <div
        id='root-bg'
        className={
          'bg-[url(@/assets/imgs/bg.jpg)] bg-cover bg-center bg-no-repeat absolute w-full h-full p-10'
        }>
        <div className='root-nav w-full h-1/10'>
          Nav
        </div>
        <div className='root-main w-full h-9/10'>
          <div className="flex w-full h-full">
            <div className="flex-none w-1/3">
              01
            </div>
            <div className="grow h-full relative">
              <div className='absolute bottom-4'>
                <Bottom />
              </div>
            </div>
            <div className="flex-none w-1/3">
              03
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bg
