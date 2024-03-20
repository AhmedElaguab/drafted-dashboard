import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function VideoResumeSection() {
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('idle')

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleFileUpload = e => {
    e.preventDefault()
    setStatus('uploading')
    const formData = new FormData()
    formData.append('myfile', file)
    axios
      .post('http://localhost:3000/upload', formData)
      .then(res => {
        setStatus('success')
        console.log(res)
      })
      .catch(err => {
        console.error(err)
        setStatus('error')
      })
  }

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Video Resume</h3>
      <div className="flex h-80">
        <div className="flex flex-col justify-between bg-green-600 text-white rounded-xl p-10 w-3/12">
          <div className="flex justify-end">
            <button className="w-8 h-8 bg-white rounded-full text-green-600">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className="flex">
            <p className="text-9xl font-thin mr-10">2</p>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold">Tell us your story</h4>
              <p className="text-sm opacity-75">
                What makes you stand out amongst other condidates?
              </p>
            </div>
          </div>
          <div className="flex text-lg font-medium">
            <a className="p-2" href="#">
              Back
            </a>
            <a
              className="flex-grow p-2 bg-white text-green-600 text-center ml-4 rounded-xl"
              href="#"
            >
              Record
            </a>
          </div>
        </div>
        <div className="w-9/12">
          <div className="flex justify-center items-center  h-full ml-10 p-6 bg-gray-100 rounded-xl">
            <div className="flex justify-between items-center w-10/12">
              <div className="w-4/12">
                <h2 className="text-3xl font-semibold mb-2">
                  {status === 'idle' && 'Upload your file'}
                  {status === 'uploading' && 'In progress'}
                  <span className="text-green-600">
                    {status === 'success' && 'File uploaded successfully'}
                  </span>
                  {status === 'error' &&
                    'There was an error while uplaoding you file'}
                </h2>
                <p className="text-base font-medium text-gray-500">
                  {status === 'idle' && 'Upload your video resume'}
                  {status === 'uploading' && 'Uploading your file'}
                  {status === 'success' && 'Thank you!'}
                  {status === 'error' && 'Try again please'}
                </p>
              </div>
              {status === 'idle' && (
                <div className="w-7/12 h-36 flex justify-center items-center bg-green-600 rounded-xl p-4">
                  <form
                    onSubmit={handleFileUpload}
                    action="localhost:3000/upload"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <label
                      className="flex mb-2 font-lg font-semibold"
                      htmlFor="myfile"
                    >
                      Select a file:
                    </label>
                    <input
                      type="file"
                      id="myfile"
                      name="myfile"
                      onChange={handleFileChange}
                    />
                    <button
                      className="flex mt-2 font-medium bg-white px-4 py-2 rounded-xl"
                      type="submit"
                    >
                      Upload
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
