import React, { useState, useEffect } from 'react';

function PhotoForm({ addPhoto, updatePhoto, editingIndex, setEditingIndex, photos }) {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (editingIndex !== null) {
      const photo = photos[editingIndex];
      setDescription(photo.description);
      setFile(photo.file);
    }
  }, [editingIndex, photos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPhoto = { description, file };
    if (editingIndex !== null) {
      updatePhoto(editingIndex, newPhoto);
    } else {
      addPhoto(newPhoto);
    }
    setDescription('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="photo-form">
      <input 
        type="file"
        accept="image/*"
        onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
        required
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter photo description"
        required
      />
      <button className='btn' type="submit">{editingIndex !== null ? 'Update Photo' : 'Add Photo'}</button>
      {editingIndex !== null && <button type="button" onClick={() => setEditingIndex(null)}>Cancel</button>}
    </form>
  );
}

export default PhotoForm;
