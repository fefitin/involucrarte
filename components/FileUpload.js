import { useState } from 'react';
import resizeImage from './../libs/resizeImage';

const FileUpload = ({ placeholder, onChange }) => {
  const [image, setImage] = useState(null);

  const loadImage = e => {
    if (e.target.files && e.target.files.length) {
      const fileName = e.target.files[0].name;

      resizeImage(e.target.files[0], 1500, 1500).then(blob => {
        //Show image
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(blob);

        //Send resized file to parent
        onChange(new File([blob], fileName));
      });
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
