import React from 'react';

const ImageList = ({ images }) => {
  const renderImage = images.map((img) => {
    return (
      <img
        className="ui medium rounded image"
        src={img.urls.regular}
        alt={img.alt_description}
        id={img.id}
      ></img>
    );
  });

  return <div className="ui images centered">{renderImage}</div>;
};

export default ImageList;
