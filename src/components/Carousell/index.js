import { useState, useEffect } from 'react';

const Thumbnail = ({ children, id, selectedKey }) => {
  const show = (id === selectedKey)

  return (
    <div className={`object-fill display flex justify-center ${show ? 'opacity-100 transition-all duration-1000 ease-in-out' : 'opacity-0 h-0'}`}>
      {children}
    </div>
  );
}

const DotIcon = ({ selected }) => {
  const activeColor = "rgba(65,150,212)";
  const inactiveColor = "rgba(208, 224, 240)";
  const fillColor = selected ? activeColor : inactiveColor;

  return (
    <svg className="px-1 animate-pulse" width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill={fillColor} d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
    </svg>
  );
}

function Carousel({ children, time }) {
  const [index, setIndex] = useState(0);
  const keys = children.map((_, index) => index);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % keys.length;
      setIndex(newIndex);
    }, time);
    return () => clearInterval(interval);
  }, [index, keys.length, time]);
  
  const _slides = () => {
    return children.map((child, idx) => (
      <Thumbnail key={idx} id={idx} selectedKey={index}>
        {child}
      </Thumbnail>
    ));
  }

  const _sliderDots = () => {
    return keys.map(key => (
      <span key={key} onClick={() => setIndex(key)}>
        {<DotIcon selected={key === index} />}
      </span>
    ));
  }

  return (
    <div className="p-5 m-auto flex justify-center">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="min-h-100">
          { _slides() }
        </div>
        <div className="flex justify-center mt-2">
          { _sliderDots() }
        </div>
      </div>
    </div>
  );
}

export default Carousel;