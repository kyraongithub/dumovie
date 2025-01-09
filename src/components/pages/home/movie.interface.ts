interface Image {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  }
  
  interface TitleType {
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    __typename: string;
  }
  
  interface TitleText {
    text: string;
    __typename: string;
  }
  
  interface YearRange {
    year: number;
    endYear: number | null;
    __typename: string;
  }
  
  export interface Movie {
    _id: string;
    id: string;
    primaryImage: Image;
    titleType: TitleType;
    titleText: TitleText;
    originalTitleText: TitleText;
    releaseYear: YearRange;
    releaseDate: string | null; 
  }