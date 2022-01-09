import type { NextPage } from 'next'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { SignModal } from '../components/loginModal'
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
      <Footer />
    </>
  )
}

export default Home
