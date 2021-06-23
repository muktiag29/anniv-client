function Hero ({ Carousell, Fade, IMAGES }) {
  return (
    <Fade left delay={200}>
      <div className="w-full flex justify-center">
        <div className="">
          <Carousell time={5000}>
            {IMAGES.map((image, index) => (
              <img 
                className="object-fill h-[170px] w-[340px] max-w-sm rounded-2xl" 
                key={index} 
                src={image.imageUrl} 
                alt={image.placeHolder} />
            ))}
          </Carousell>
        </div>
      </div>
    </Fade>
  )
}

export default Hero