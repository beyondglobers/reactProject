import React, { PropTypes } from 'react';

const Image = ({ src, fallbackSrc}) => {
  let element;
  const changeSrc = newSrc => {
    element.src = newSrc;
  };
  return (
    <img src={src}
      onError={() => changeSrc(fallbackSrc)}
      ref={el => element = el} />
  );
};

// Image.propTypes = {
//   src: PropTypes.string,
//   fallbackSrc: PropTypes.string
// };
export default Image;