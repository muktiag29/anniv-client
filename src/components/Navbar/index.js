import { useHistory } from "react-router-dom"

function Navbar({ Fade, Zoom, data }) {
  const history = useHistory()

  return (
    <Fade top delay={200}>
      <div className="sticky top-0 z-50 border-b-2 border-green-500 bg-gray-300 w-full h-12">
        <div className="p-2 flex justify-between">
          <Fade left delay={200}>
            <div className="flex items-center">
              <Zoom delay={250}>
                <div className="w-10">
                  <img className="rounded-full absolute top-1 left-1 w-10" src={data.imageUrl}  alt=""  />
                </div>
              </Zoom>
              <div className="text-lg font-bold">Halo, {data.name.split(" ")[0]}</div>
            </div>
          </Fade>
          <Fade right delay={200}>
            <div 
              onClick={() => {
                localStorage.clear()
                history.push("/login")
              }}
              role="button" 
              className="border-2 border-red-700 rounded-2xl h-8 px-2 flex items-center">
              <div className="text-xs font-light">KELUAR</div>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

export default Navbar