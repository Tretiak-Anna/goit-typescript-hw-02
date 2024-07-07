export interface ImageCardProps {
  imgLink: string;
  imgDescr: string;
  onImageClick: (url: string) => void;
  bigUrl: string;
}
