import { useState } from 'react';

const FileUpload = ({ placeholder, onChange }) => {
  const [image, setImage] = useState(null);

  const loadImage = e => {
    if (e.target.files && e.target.files.length) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      onChange(e.target.files[0]);
    }
  };

  return (
    <div className="file-upload">
      <p>{placeholder}</p>
      <div className="preview" style={{ backgroundImage: image ? `url(${image})` : 'none' }}></div>
      <button type="button" className="button">
        <span>Seleccionar archivo</span>
      </button>
      <input type="file" onChange={loadImage} accept=".jpg,.jpeg" />
    </div>
  );
};

export default FileUpload;
