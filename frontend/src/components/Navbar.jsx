import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

export default function Navbar() {
  return (
    <nav className="flex mb-12">
      <div className="flex-grow"></div>
      <div className="flex items-center">
        <button className="mr-3 w-10 h-10 bg-gray-100 rounded-xl">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className="flex items-center border border-gray-100 rounded-xl">
          <div
            className="w-14 h-14 rounded-xl mr-2"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/4098343/pexels-photo-4098343.jpeg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>

          <div className="flex flex-col justify-center px-4">
            <h2 className="text-sm font-bold">Valentino Cause</h2>
            <p className="text-sm">Class of 2024</p>
          </div>
          <div className="px-4">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </nav>
  )
}
