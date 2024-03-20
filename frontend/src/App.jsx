import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faChevronDown,
  faGrip,
} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

export default function App() {
  return (
    <Layout>
      <Sidebar />
      <MainContent />
    </Layout>
  )
}
