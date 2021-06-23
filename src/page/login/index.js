import axios from "axios"
import { GoogleLogin } from "react-google-login"
import { useHistory } from 'react-router-dom';
import { Fade } from "react-reveal"
import { useDispatch } from "react-redux";
import { userData } from "../../store/actions/userAction";

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

  const responseGoogle = async(res) =>  {
    try {
      const { data } = await axios({
        method: "POST",
        url: "https://muktidian.herokuapp.com/login",
        data: res.profileObj,
      })

      localStorage.setItem("access_token", data.access_token)

      dispatch(userData(res.profileObj))
      history.push("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Fade zoom delay={200}>
      <div className="flex justify-center h-screen items-center">
        <GoogleLogin
          clientId="154320750746-ba20pa8rr6tf8gqlkmdkmo3rs96mmbbu.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          className="btn-google"
          style={{ background: "transparent" }}
        />
      </div>
    </Fade>
  )
}