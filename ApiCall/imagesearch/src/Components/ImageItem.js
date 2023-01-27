import "./ImageItem.css"

function ImageItem({ image }) {
  console.log(image);
  return (
    <div className="imageListImg">
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageItem;
