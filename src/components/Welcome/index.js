const Welcome = ({ Fade }) => {
  return (
    <Fade top delay={200}>
      <div className="flex justify-center mt-3">
        <div className="text-xl font-bold text-center text-green-900 w-56">
          Selamat Datang di Website Kami
        </div>
      </div>
    </Fade>
  )
}

export default Welcome