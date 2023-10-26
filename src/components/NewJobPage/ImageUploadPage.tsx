/* eslint-disable max-len */
import React, { useState } from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

interface Image {
  file: File;
  preview: string;
}

function ImageUploadPage({ onBack }: { onBack: () => void }) {
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const imageArray: Image[] = [];

    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          if (event.target && event.target.result) {
            // Add the selected image and its data (e.g., preview) to the array
            imageArray.push({
              file,
              preview: event.target.result as string,
            });

            // Update state with the new array of selected images
            setSelectedImages([...selectedImages, ...imageArray]);
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleImageUpload = () => {
    // Implement logic to upload selectedImages to a server or storage.
    // You can use libraries like Axios to make API requests.
    // Reset selectedImages state after successful upload.
    setSelectedImages([]);
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <ImageCarousel images={selectedImages.map((img) => img.preview)} handleRemoveImage={handleRemoveImage} />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <button type="button" onClick={handleImageUpload}>Upload Images</button>
      <button type="button" onClick={onBack}>Back</button>
    </div>
  );
}

export default ImageUploadPage;
