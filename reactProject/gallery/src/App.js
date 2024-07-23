import React, { useState } from 'react';
import PhotoForm from './components/photoForm';
import PhotoList from './components/photoList';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const updatePhoto = (index, updatedPhoto) => {
    const newPhotos = [...photos];
    newPhotos[index] = updatedPhoto;
    setPhotos(newPhotos);
    setEditingIndex(null);
  };

  const deletePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <PhotoForm 
        addPhoto={addPhoto}
        updatePhoto={updatePhoto}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
        photos={photos}
      />
      <PhotoList 
        photos={photos}
        setEditingIndex={setEditingIndex}
        deletePhoto={deletePhoto}
      />
    </div>
  );
}

export default App;
