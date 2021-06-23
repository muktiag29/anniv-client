import axios from "axios"
import { useEffect, useState } from "react"

function Comment({email, isRefresh}) {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: email === "ajioke22@gmail.com" || email === "dianardiyanti29@gmail.com" ? "https://muktidian.herokuapp.com/comment/all" :"https://muktidian.herokuapp.com/comment/part",
          params: { email }
        })
  
        setData(data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [email, isRefresh])

  return (
    <>
      {data.length ? (
        <div>
          {data?.map((e, i) => (
            <div key={i} className="p-2">
              <div className="rounded-xl bg-gray-100 p-2 text-green-900 border border-blue-600">
                <div>{e.comment}</div>
                {e.User.name && (
                  <div className="text-xs text-black flex justify-end">
                    <div>{e.User.name}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Comment