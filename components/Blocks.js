import { useRef, useState, useEffect } from 'react';
import Button from './Button';

export function Blocks({ children }) {
  const container = useRef();

  if (process.browser) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //Update state on resize
    useEffect(() => {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    }, []);

    //Update overflowing background
    useEffect(() => {
      const first = container.current.querySelector('.block:first-child');
      const second = container.current.querySelector('.block:last-child');

      container.current.style.setProperty('--firstX', `${first.offsetLeft}px`);
      container.current.style.setProperty('--firstHeight', `${first.offsetHeight}px`);
      container.current.style.setProperty('--secondX', `${second.offsetLeft + second.offsetWidth}px`);
      container.current.style.setProperty('--secondHeight', `${second.offsetHeight}px`);
    }, [windowWidth]);
  }

  return (
    <div ref={container} className="blocks">
      <div className="blocks-container">{children}</div>
    </div>
  );
}

export function Block({ button, link, children }) {
  return (
    <div className="block">
      {children}
      <Button href={link} label={button}></Button>
    </div>
  );
}
