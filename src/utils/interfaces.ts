export interface IParams {
  id: string;
}

export interface IResponse<T extends object> {
  data: T;
}

export interface IBooksResponse {
  kind: string;
  totalItems: number;
  items: BooksType;
}

export type BooksType = Array<IBookModel>;

export interface IBookModel {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: Array<string>;
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: Array<{
      type: string;
      identifier: string;
    }>;

    readingModes: Record<'text' | 'image', boolean>;
    pageCount: number;
    printType: string;
    categories: Array<string>;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: Record<'smallThumbnail' | 'thumbnail', string>;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    saleInfo: {
      country: string;
      saleability: string;
      isEbook: boolean;
    };
    accessInfo: {
      country: string;
      viewability: string;
      embeddable: boolean;
      publicDomain: boolean;
      textToSpeechPermission: string;
      epub: IAccessInfoAvailability;
      pdf: IAccessInfoAvailability;
      webReaderLink: string;
      accessViewStatus: string;
      quoteSharingAllowed: boolean;
    };
  };
  searchInfo: {
    textSnippet: string;
  };
}

interface IAccessInfoAvailability {
  isAvailable: boolean;
  acsTokenLink: string;
}

export interface IIsFavPageProps {
  isFavPage?: boolean;
}

export type BookModelNullType = IBookModel | null;

export type StatusType = 'idle' | 'loading' | 'failed';
