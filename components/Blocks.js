import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';

export function Blocks({ children }) {
  const container = useRef();

  if (process.browser) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowLoaded, setWindowLoaded] = useState(false);

    //Update state on resize
    useEffect(() => {
      const listenerWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      const listenerLoad = () => {
        setWindowLoaded(true);
      };

      window.addEventListener('resize', listenerWidth);
      window.addEventListener('load', listenerLoad);

      return () => {
        window.removeEventListener('resize', listenerWidth);
        window.removeEventListener('load', listenerLoad);
      };
    }, []);

    //Update overflowing background
    useEffect(() => {
      const first = container.current.querySelector('.block:first-child');
      const second = container.current.querySelector('.block:last-child');

      container.current.style.setProperty('--firstX', `${first.offsetLeft}px`);
      container.current.style.setProperty('--firstHeight', `${first.offsetHeight}px`);
      container.current.style.setProperty(
        '--secondX',
        `${second.offsetLeft + second.offsetWidth}px`
      );
      container.current.style.setProperty('--secondHeight', `${second.offsetHeight}px`);
    }, [windowWidth, windowLoaded]);
  }

  return (
    <div
      ref={container}
      className={`blocks ${React.Children.count(children) === 1 ? 'single' : ''}`}
    >
      <div className="blocks-container">{children}</div>
    </div>
  );
}

export function Block({ button, link, children, target = null }) {
  return (
    <div className="block">
      {children}
      {button && <BlockButton href={link} label={button} target={target}></BlockButton>}
    </div>
  );
}

export function BlockButton({ href, label, target }) {
  if (target === null) {
    return <Button href={href} label={label}></Button>;
  } else {
    return (
      <a href={href} target={target} className="button">
        <span>{label}</span>
      </a>
    );
  }
}
