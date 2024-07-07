import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard
            imgLink={item.urls.small}
            imgDescr={item.description}
            onImageClick={onImageClick}
            bigUrl={item.urls.regular}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
