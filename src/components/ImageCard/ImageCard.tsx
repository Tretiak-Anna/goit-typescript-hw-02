import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({
  imgLink,
  imgDescr,
  onImageClick,
  bigUrl,
}) => {
  return (
    <div>
      <img
        className={css.card}
        src={imgLink}
        alt={imgDescr}
        onClick={() => {
          onImageClick(bigUrl);
        }}
      />
    </div>
  );
};

export default ImageCard;
