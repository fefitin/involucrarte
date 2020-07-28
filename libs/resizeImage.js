export default (file, maxWidth, maxHeight) => {
  return new Promise((resolve, reject) => {
    // Create an image
    const img = document.createElement('img');

    // Create a file reader
    const reader = new FileReader();

    // Set the image once loaded into file reader
    reader.onload = function (e) {
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const width = img.width;
        const height = img.height;

        let newHeight = height;
        let newWidth = width;

        if (width > height) {
          if (width > maxWidth) {
            newHeight = (height * maxWidth) / width;
            newWidth = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            newWidth = (width * maxHeight) / height;
            newHeight = maxHeight;
          }
        }

        canvas.width = newWidth;
        canvas.height = newHeight;

        ctx.drawImage(img, 0, 0, newWidth, newHeight);

        canvas.toBlob(resolve, 'image/jpeg');
      };

      img.src = e.target.result;
    };

    // Fire errors
    img.onerror = reject;

    // Load files into file reader
    reader.readAsDataURL(file);
  });
};
