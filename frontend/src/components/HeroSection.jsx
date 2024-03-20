export default function HeroSection() {
  return (
    <section className="flex mb-12">
      <div className="flex w-1/3">
        <div
          className="w-24 h-24 rounded-xl mr-4"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/4098343/pexels-photo-4098343.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm">Class of 2024</p>
          <h1 className="font-bold text-4xl mb-1">Valentino Cause</h1>
          <a href="mailto:#" className="text-gray-500 underline">
            valentino@usc.edu
          </a>
        </div>
      </div>
      <div className="flex w-2/3 pl-24">
        <div className="flex w-1/2">
          <div className="w-24 h-24 bg-gray-100 rounded-xl mr-4" />
          <div className="flex flex-col justify-center">
            <h4 className="text-base font-bold">Education</h4>
            <p className="text-sm font-bold">University of California</p>
            <p className="text-sm">Bachelor's degee, Business</p>
          </div>
        </div>
        <div className="flex w-1/2">
          <div className="w-24 h-24 bg-gray-100 rounded-xl mr-4" />
          <div className="flex flex-col justify-center">
            <h4 className="text-base font-bold">Job Preferences</h4>
            <p className="text-sm">Associate product manager</p>
            <p className="text-sm">Marketing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
