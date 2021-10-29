import { CardsType } from './interfaces';

export const getCardIndex = (arr: CardsType, id: string) => {
  return arr.findIndex((card) => card.id === id);
};
