import backgroundImg from './guide-photos/Karavasta.jpeg';
import './BackgroundTexture.css';

const BackgroundTexture = () => {
  return (
    <div 
      className="background-texture"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    />
  );
};

export default BackgroundTexture;