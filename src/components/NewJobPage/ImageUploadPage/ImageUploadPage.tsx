import React, { useState, useRef } from 'react';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import ImageCarousel from '../../ImageCarousel/ImageCarousel';

import './style.css'; // Import CSS file for component-specific styles

interface Image {
  file: File;
  preview: string;
}

function ImageUploadPage({ onBack }: { onBack: () => void }) {
  const [selectedImages, setSelectedImages] = useState<Image[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref to access file input element

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

  const submitPost = () => {
    // Handle post submission logic here
  };

  const handleImageUpload = async () => {
    const client = new S3Client({});
    selectedImages.forEach((image) => {
      const command = new PutObjectCommand({
        Bucket: 'test-bucket', // TODO: add bucket name
        Key: 'hello-s3.txt', // TODO: add post ID to key
        Body: image.file,
      });

      try {
        const response = client.send(command);
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    });

    setSelectedImages([]);
  };

  const handleUploadButtonClick = () => {
    // Trigger click event on file input element
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="image-upload-container">
      <h2>Image Upload</h2>
      <ImageCarousel
        images={selectedImages.map((img) => img.preview)}
        handleRemoveImage={handleRemoveImage}
      />
      <div className="upload-controls">
        {/* Hidden file input element */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <button className="upload-button" type="button" onClick={handleUploadButtonClick}>Add Image</button>
        <button className="back-button" type="button" onClick={onBack}>Back</button>
        <button className="upload-button" type="button" onClick={submitPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default ImageUploadPage;
