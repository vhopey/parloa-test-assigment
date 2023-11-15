import { useState } from "react"

type UseModalType = {
  isShow: boolean
  handleClose: () => void
  handleShow: () => void
}

export const useModal = (): UseModalType => {
  const [isShow, setIsShow] = useState(false)

  const handleClose = () => setIsShow(false)
  const handleShow = () => setIsShow(true)

  return { isShow, handleClose, handleShow }
}
