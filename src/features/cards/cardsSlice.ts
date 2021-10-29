import { uuid } from 'uuidv4';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  CardsType,
  ICardModel,
  IMoveCardPayload,
} from '../../utils/interfaces';
import { CARDS_COUNT } from '../../utils/config';
import { getCardIndex } from '../../utils/helpers';

const initialState: CardsType = Array(CARDS_COUNT)
  .fill(null)
  .map((_, i) => ({
    id: uuid(),
    title: `card ${i}`,
  }));

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    changeCard(state, action: PayloadAction<ICardModel>) {
      const { id, title: newTitle } = action.payload;
      const index = getCardIndex(state, id);

      if (!newTitle) {
        state[index].title = `card ${index}`;

        return state;
      }

      state[index].title = newTitle;

      return state;
    },

    moveCard(state, action: PayloadAction<IMoveCardPayload>) {
      const { id, position } = action.payload;
      const index = getCardIndex(state, id);

      const targetCard = state[index];
      state = state.filter((card) => card.id !== id);

      if (position === 'move-up') {
        state.unshift(targetCard);
      }

      if (position === 'move-down') {
        state.push(targetCard);
      }

      return state;
    },
  },
});

export const selectCards = (state: RootState) => state.cards;

export const { changeCard, moveCard } = cardsSlice.actions;

export default cardsSlice.reducer;
