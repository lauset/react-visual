import { EquLaserQ, EquLaserS, EquLs } from './EquCard'
import './Equ.scss'

function Equ() {
  return (
    <>
      <div className="flex space-x-16">
        <EquLaserQ />
        <EquLaserS />
        <EquLs />
      </div>

    </>
  )
}

export default Equ
