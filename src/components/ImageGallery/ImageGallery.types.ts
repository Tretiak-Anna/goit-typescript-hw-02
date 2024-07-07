import { Image } from '../../types';

export interface ImageGalleryProps {
  items: Image[];
  onImageClick: (id: string) => void;
}
