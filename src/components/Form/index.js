import axios from 'axios'
import { useState } from 'react'

function Form({ Fade, email, isRefresh, setRefresh }) {
  const [commented, setCommented] = useState("")

  const handleChange = (e) => {
    setCommented(e.target.value)
  }

  const handleComment = async() => {
    try {
      if (commented.trim().length) {
        await axios({
          method: "POST",
          url: "https://muktidian.herokuapp.com/comment",
          data: {
            email,
            comment: commented
          },
        })
  
        setCommented("")
        setRefresh(!isRefresh)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fade bottom delay={200}>
      <div className="bg-gray-100 border-dashed border-t-2 border-b-2 border-green-900 mb-4 p-4">
        <div className="p-2 text-lg text-green-500 text-center font-semibold" >
          Berikan Kritik, Saran, atau Kesanmu
          <br /> 
          Untuk Kami
        </div>
        <form>
          <textarea
            onChange={(e) => handleChange(e)}
            className="resize-y w-full h-18 bg-yellow-50 text-gray-700 border border-green-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text-area"
            value={commented}
            placeholder="Masukkan Pesan" />
          <div className="flex justify-center">
            <div
              onClick={() => handleComment()}
              className="bg-green-300 border-2 border-green-700 text-white rounded-2xl py-2 px-4 font-semibold"
              role="button">
              Kirim
            </div>
          </div>
        </form>
      </div>
    </Fade>
  )
}

export default Form