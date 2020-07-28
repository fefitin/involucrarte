import { useState, useEffect, useRef } from 'react';

export default function LargeText({ children }) {
  const paragraph = useRef();

  if (process.browser) {
    function isInViewport(element) {
      //Determine if element is in viewport
      const rect = element.getBoundingClientRect();
      const html = document.documentElement;
      const height = window.innerHeight || html.clientHeight;
      const width = window.innerWidth || html.clientWidth;
      return (
        rect.top >= rect.height * -1 &&
        rect.left >= 0 &&
        rect.bottom <= height &&
        rect.right <= width
      );
    }

    //Store window status in local state
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowTop, setWindowTop] = useState(window.pageYOffset);

    //Update state on resize
    useEffect(() => {
      const listenerWidth = () => {
        setWindowWidth(window.innerWidth);
      };

      const listenerScroll = () => {
        setWindowTop(window.pageYOffset);
      };

      window.addEventListener('resize', listenerWidth);
      window.addEventListener('scroll', listenerScroll);

      return () => {
        window.removeEventListener('scroll', listenerWidth);
        window.removeEventListener('resize', listenerScroll);
      };
    }, []);

    //Update marker style on window width change
    useEffect(() => {
      const marks = paragraph.current.querySelectorAll('mark');
      const container = document.querySelector('.menu');
      const left = container.offsetLeft;
      let width = 0;
      let fullWidth = 0;

      marks.forEach(mark => {
        if (isInViewport(mark)) {
          width = mark.offsetLeft + mark.offsetWidth - container.offsetLeft;
          fullWidth = mark.offsetLeft + mark.offsetWidth;
        }

        mark.style.setProperty('--width', `${width}px`);
        mark.style.setProperty('--fullWidth', `${fullWidth}px`);
        mark.style.setProperty('--left', `${left}px`);
      });
    }, [windowWidth, windowTop]);
  }

  return (
    <p ref={paragraph} className="large-text">
      {children}
    </p>
  );
}
