export default function RecentlyJoinedSection() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl font-semibold mb-4">Recently joined</h3>
      <div className="flex">
        {[1, 2, 3, 4].map(item => {
          return (
            <div key={item} className="pr-8 flex-grow">
              <div>
                <div
                  className="h-44 w-full rounded-xl mb-2"
                  style={{
                    backgroundImage:
                      'url(https://images.pexels.com/photos/1310518/pexels-photo-1310518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div>
                  <h4 className="font-bold">Assia McGuire</h4>
                  <p className="text-xs text-gray-500">4h ago</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
