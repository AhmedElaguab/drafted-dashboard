import HeroSection from './HeroSection'
import Navbar from './Navbar'
import RecentlyJoinedSection from './RecentlyJoinedSection'
import VideoResumeSection from './VideoResumeSection'

export default function MainContent() {
  return (
    <main className="w-10/12 py-6 px-12">
      <Navbar />
      <HeroSection />
      {/* TODO: PROGRES BAR! */}
      <section className="progress-bar"></section>
      <RecentlyJoinedSection />
      <VideoResumeSection />
    </main>
  )
}
