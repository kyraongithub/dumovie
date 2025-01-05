interface Thumbnail {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: {
    plainText: string;
    __typename: string;
  };
}

export interface CardProps {
  text: string;
  thumbnail: Thumbnail | null;
  onClick?: () => void;
}
