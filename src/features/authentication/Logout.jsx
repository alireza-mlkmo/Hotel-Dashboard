import { HiArrowRightOnRectangle } from 'react-icons/hi2'
import ButtonIcon from '../../ui/ButtonIcon'
import { useLogout } from './useLogout'
import SpinnerMini from '../../ui/SpinnerMini'

export default function Logout() {
    const {logout , isLoadingLogout} = useLogout()
  return (
    <ButtonIcon onClick={logout} disabled={isLoadingLogout}>
        {!isLoadingLogout ? <HiArrowRightOnRectangle/> : <SpinnerMini/>}
    </ButtonIcon>
  )
}