import React from 'react';

function PhotoList({ photos, setEditingIndex, deletePhoto }) {
  return (
    <div className="photo-list">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.file} alt={photo.description} className="photo-image"/>
          <p>{photo.description}</p>
          <button className='btn' onClick={() => setEditingIndex(index)}>Edit</button>
          <button className='btn' onClick={() => deletePhoto(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PhotoList;
