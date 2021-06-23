function Quote({ Fade }) {
  return(
    <Fade right delay={200}>
      <div className="flex justify-center p-4">
        <div>
          <div className="text-2xl font-semibold text-green-600 mb-2">
            "Replied my story become a part of your story."
          </div>
          <div className="text-lg font-semibold text-green-500">
            - Dian, 2018
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Quote