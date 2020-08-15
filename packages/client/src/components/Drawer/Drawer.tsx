import React from 'react'
import * as S from './styles'

interface Props{
  open: boolean
  toggleDrawer: () => void
}

const {
  useState, useEffect, useRef,
} = React

const Drawer: React.FC<Props> = ({
  open, toggleDrawer, children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sectionOpen, setSectionOpen] = useState(false)
  const [bgOpen, setBgOpen] = useState(false)
  const bgRef = useRef(false)
  const sectionRef = useRef(false)

  const transitionendListener = () => {
    if (!bgRef.current && !sectionRef.current) {
      setIsOpen(false)
    }
  }

  const setbgref = (data: boolean) => {
    bgRef.current = data
  }
  const setsectionRef = (data: boolean) => {
    sectionRef.current = data
  }

  useEffect(() => {
    window.addEventListener('transitionend', transitionendListener)
    return () => {
      window.removeEventListener('transitionend', transitionendListener)
    }
  }, [])
  useEffect(() => {
    if (open) {
      setIsOpen(true)
      setSectionOpen(true)
      setBgOpen(true)
    } else {
      setSectionOpen(false)
      setBgOpen(false)
    }
  }, [open])

  useEffect(() => {
    setbgref(bgOpen)
    setsectionRef(sectionOpen)
  }, [bgOpen, sectionOpen])

  return (
    <S.Container open={isOpen}>
      <S.Background open={bgOpen}/>
      <S.Section open={sectionOpen}>
        {children}
      </S.Section>
    </S.Container>
  )
}

export default Drawer
