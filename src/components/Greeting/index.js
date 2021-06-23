function Greeting({ cx, isGreet, setGreet, Zoom }) {
  return (
    <Zoom delay={200}>
      <div className={cx("flex justify-center mb-4", { hidden: !isGreet })}>
        <div className="w-80 rounded-2xl border-2 border-dashed border-red-500 p-2">
          <div className="flex justify-center mb-3">
            <div className="font-bold text-center w-72 text-lg">24 Juni 2021 adalah Hari Anniversary Kami yang Ke-3.</div>
          </div>
          <div className="text-base font-semibold text-center mb-2">Mau memberikan ucapan?</div>
          <div className="flex justify-evenly">
            <a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=6285211714334&text=Selamat Anniversary yang Ke-3 Mukti dan Dian.">
              <div role="button" className="text-sm w-14 bg-green-400 text-white font-semibold rounded-2xl text-center p-1">
                YA
              </div>
            </a>
            <div
              onClick={() => setGreet(false)}
              role="button"
              className="text-sm w-14 border-2 border-red-700 text-white font-semibold rounded-2xl text-center p-1">
              Tidak
            </div>
          </div>
        </div>
      </div>
    </Zoom>
  )
}

export default Greeting