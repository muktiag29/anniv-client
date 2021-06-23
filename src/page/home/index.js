import cx from 'classname'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Fade, Zoom } from 'react-reveal';
import { useHistory } from 'react-router';
import { 
  Carousell,
  Comment, 
  Footer,
  Form,
  Hero,
  Navbar,
  Quote,
  Welcome,
  Greeting,
} from '../../components'
import IMAGES from '../../data/carousel'

function Page() {
  const history = useHistory()
  const [isGreet, setGreet] = useState(true)
  const dataUser = useSelector((state) => state.userReducer)
  const [isRefresh, setRefresh] = useState(true)

  useEffect(() => {
    if (!dataUser.name){
      localStorage.clear()
      history.push("/login")
    }
  }, [history, dataUser])

  return (
    <div>
      <Navbar Fade={Fade} Zoom={Zoom} data={dataUser} />
      <Welcome Fade={Fade} />
      <Hero 
        Carousell={Carousell}
        Fade={Fade}
        IMAGES={IMAGES} />
      {(dataUser.email !== "ajioke22@gmail.com" || dataUser.email === "dianardiyanti29@gmail.com") && (
        <Greeting 
          cx={cx}
          isGreet={isGreet} 
          setGreet={setGreet} 
          Zoom={Zoom} />
      )}
      <Quote Fade={Fade} />
      {(dataUser.email !== "ajioke22@gmail.com" || dataUser.email === "dianardiyanti29@gmail.com") && (
        <Form Fade={Fade} email={dataUser.email} isRefresh={isRefresh} setRefresh={setRefresh} />
      )}
      <Comment email={dataUser.email} isRefresh={isRefresh} />
      {(dataUser.email !== "ajioke22@gmail.com" || dataUser.email === "dianardiyanti29@gmail.com") && (
        <Footer Fade={Fade} />
      )}
    </div>
  )
}

export default Page