import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrip } from '@fortawesome/free-solid-svg-icons'

function SectionLink({ active }) {
  const className = !active
    ? 'p-2 text-gray-400'
    : 'p-2 text-white rounded-lg bg-green-600'
  return (
    <a href="#">
      <FontAwesomeIcon icon={faGrip} size="2x" className={className} />
    </a>
  )
}

export default function Sidebar() {
  return (
    <aside className="px-2 py-6 flex flex-col w-2/12 bg-gray-100">
      <div>
        <a href="#" className="flex justify-center text-3xl font-bold">
          drafted<span className="text-green-500">.</span>
        </a>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <ul>
          <li className="mb-6">
            <SectionLink active />
          </li>
          <li className="mb-6">
            <SectionLink />
          </li>
          <li className="mb-6">
            <SectionLink />
          </li>
        </ul>
      </div>
    </aside>
  )
}
