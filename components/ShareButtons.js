import { useEffect } from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

export default () => {
  useEffect(() => {
    if (process.browser) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=1995123437287392&autoLogAppEvents=1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <TwitterShareButton url={'https://involucrarte.com.ar'} options={{ text: 'Involucrarte, una forma de ayudar a los más necesitados' }} />
      <div className="fb-share-button" data-href="https://involucrarte.com.ar" data-layout="button_count" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Finvolucrarte.com.ar%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
          Share
        </a>
      </div>
    </>
  );
};
