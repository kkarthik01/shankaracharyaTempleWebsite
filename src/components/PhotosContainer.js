import React, { useState } from 'react';
import backgroundImage from './templePhotos/backgroundImage.jpg'
import templePhoto1 from './templePhotos/templePhoto1.jpg'
import templePhoto2 from './templePhotos/templePhoto2.jpg'
import templePhoto3 from './templePhotos/templePhoto3.jpg'
import templePhoto4 from './templePhotos/templePhoto4.jpg'
import templePhoto5 from './templePhotos/templePhoto5.jpg'
import './PhotosContainer.css'

const PhotosContainer = () => {

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const photos = [templePhoto1, templePhoto2, templePhoto3, templePhoto4, templePhoto5];
  
    const handlePrevPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };
  
    const handleNextPhoto = () => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <div className='photos-container'>
      <div
              style={{ backgroundImage: `url(${backgroundImage})` }}
              className='background-image-photos'
      />
      <h1 className='photos-title'>Gallery</h1>
      <img
        src={photos[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
        className='photos-images-tile'
      />
      <button className='left-toggle-image' onClick={handlePrevPhoto}>
        &lt;
      </button>
      <button className='right-toggle-image' onClick={handleNextPhoto}>
        &gt;
      </button>
    </div>
  )
}

export default PhotosContainer