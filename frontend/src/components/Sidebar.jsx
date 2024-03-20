import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function SectionLink({ active, to }) {
  const activeClass = 'flex p-2 text-white rounded-lg bg-green-600'
  return (
    <NavLink
      to={to}
      href="#"
      className={({ isActive }) =>
        isActive ? activeClass : 'flex p-2 text-gray-400'
      }
    >
      <FontAwesomeIcon icon={faGrip} size="2x" />
    </NavLink>
  )
}

export default function Sidebar() {
  return (
    <aside className="fixed h-screen px-2 py-6 flex flex-col w-2/12 bg-gray-100">
      <div>
        <a href="#" className="flex justify-center text-3xl font-bold">
          drafted<span className="text-green-500">.</span>
        </a>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <ul>
          <li className="mb-6">
            <SectionLink to="/" active />
          </li>
          <li className="mb-6">
            <SectionLink to="/screen2" />
          </li>
          <li className="mb-6">
            <SectionLink to="/screen3" />
          </li>
        </ul>
      </div>
    </aside>
  )
}
