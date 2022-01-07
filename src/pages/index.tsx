import type { NextPage } from 'next'
import { Header } from '../components/header'
import { LoginModal, SignModal } from '../components/loginModal'
import { RhinoInfos } from '../components/rhinoInfos'
import { RhinoMain } from '../components/RhinoMain'
import { useModal } from '../contexts/modalContext'

const Home: NextPage = () => {
  const { isOpen, handleCloseModal } = useModal()

  return (
    <>
      <Header />
      <RhinoMain />
      <RhinoInfos />
      <SignModal isOpen={isOpen} onRequestClose={handleCloseModal}/>
    </>
  )
}

export default Home
