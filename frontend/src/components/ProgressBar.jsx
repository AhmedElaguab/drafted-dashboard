import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useLocation } from 'react-router-dom'

export default function ProgressBar() {
  const classname = 'w-5 h-5 bg-gray-400 rounded-full'
  const location = useLocation()
  let screenIndex = 1
  if (location.pathname === '/screen2') {
    screenIndex = 2
  } else if (location.pathname === '/screen3') {
    screenIndex = 3
  }
  return (
    <section className="mb-12">
      <ul className="flex items-center w-full bg-gray-200 rounded-full ">
        <li className="flex w-1/3 ">
          <div
            className={`flex w-full justify-end bg-green-600 rounded-full p-1 ${
              screenIndex > 1 && 'rounded-r-none'
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive || screenIndex > 1
                  ? 'w-7 h-7 bg-white rounded-full flex justify-center items-center'
                  : classname
              }
              to="/"
            >
              <FontAwesomeIcon icon={faCheck} className="text-green-600" />
            </NavLink>
          </div>
        </li>

        <li className="flex w-1/3 ">
          <div
            className={`flex w-full justify-end rounded-full p-1 ${
              screenIndex > 1 && 'bg-green-600 rounded-l-none'
            } ${screenIndex > 2 && 'rounded-r-none'}`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive || screenIndex > 1
                  ? 'w-7 h-7 bg-white rounded-full flex justify-center items-center'
                  : classname
              }
              to="/screen2"
            >
              {screenIndex > 1 && (
                <FontAwesomeIcon icon={faCheck} className="text-green-600" />
              )}
            </NavLink>
          </div>
        </li>

        <li className="flex w-1/3 ">
          <div
            className={`flex w-full justify-end rounded-full p-1 ${
              screenIndex > 2 && 'bg-green-600 rounded-l-none'
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive || screenIndex > 2
                  ? 'w-7 h-7 bg-white rounded-full flex justify-center items-center'
                  : classname
              }
              to="/screen3"
            >
              {screenIndex > 2 && (
                <FontAwesomeIcon icon={faCheck} className="text-green-600" />
              )}
            </NavLink>
          </div>
        </li>
      </ul>
    </section>
  )
}
