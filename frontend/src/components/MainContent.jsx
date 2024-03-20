import { Outlet } from 'react-router-dom'
import HeroSection from './HeroSection'
import ProgressBar from './ProgressBar'
import Navbar from './Navbar'

export default function MainContent() {
  return (
    <main className="w-10/12 py-6 px-12">
      <Navbar />
      <HeroSection />
      <ProgressBar />
      <Outlet />
    </main>
  )
}
