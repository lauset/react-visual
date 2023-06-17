function EquDot() {
  return (
    <>
      <span className='card-dot card-lt'></span>
      <span className='card-dot card-rt'></span>
      <span className='card-dot card-lb'></span>
      <span className='card-dot card-rb'></span>
    </>
  )
}

function EquRow({ equName, equState, equMat = '-' }: {
  equName: string,
  equState: string,
  equMat?: string
}) {
  return (
    <>
      <div className='card-one'>
        <div className='card-info'>
          <span className='equ-name'>{equName}</span>
          <span className={[
            'equ-state', equState || ''].join(' ')}></span>
          <span className='equ-mat'>{equMat}</span>
        </div>
        <EquDot />
      </div>
    </>
  )
}

function EquLaserQ() {
  return (
    <>
      <div className='equ-card text-left w-80'>
        <div className='card-title'>
          全自动激切割Q
        </div>
        <div className='card-body flex items-center'>
          <div className='card-left w-1/4'>
            激光切割01
          </div>
          <div className='card-right w-3/4'>
            <EquRow equName={'测量台'} equState={'idle'} equMat={'13012345678'} />
            <EquRow equName={'测量台'} equState={'doing'} />
            <EquRow equName={'测量台'} equState={'error'} />
          </div>
        </div>
      </div>
    </>
  )
}

function EquLaserS() {
  return EquLaserQ()
}

function EquLs() {
  return EquLaserQ()
}

export {
  EquLaserQ,
  EquLaserS,
  EquLs,
}

export default {}
