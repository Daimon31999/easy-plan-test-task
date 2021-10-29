export type CardsType = Array<ICardModel>;

export interface ICardModel {
  id: string;
  title: string;
}

export interface IMoveCardPayload {
  id: string;
  position: 'move-up' | 'move-down';
}
