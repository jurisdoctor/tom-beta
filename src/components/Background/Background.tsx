import './styles.css';

import fallback from '../../assets/earth.png';
import video from '../../assets/earth.mp4';

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video
        playsInline
        autoPlay
        muted
        loop
        preload="auto"
        className="bg"
        poster={fallback}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default Background;
