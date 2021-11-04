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
import { WritableDraft } from 'immer/dist/internal';

const initialState: CardsType = Array(CARDS_COUNT)
  .fill(null)
  .map((_, i) => ({
    id: uuid(),
    title: `card ${i}`,
  }));

const swap = (
  array: WritableDraft<ICardModel>[],
  aIndex: number,
  bIndex: number
): void => {
  const b = array[aIndex];
  array[aIndex] = array[bIndex];
  array[bIndex] = b;
};

export const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    deleteCard(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = getCardIndex(state, id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },

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
      const lastIndex = state.length - 1;

      if (
        (index === 0 && position === 'move-up') ||
        (index === lastIndex && position === 'move-down')
      ) {
        // swap last and first items
        swap(state, 0, lastIndex);

        return state;
      }

      const computedState = state.filter((card) => card.id !== id);
      const targetCard = state[index];

      if (position === 'move-up') {
        computedState.splice(index - 1, 0, targetCard);
      }

      if (position === 'move-down') {
        computedState.splice(index + 1, 0, targetCard);
      }

      return computedState;
    },
  },
});

export const selectCards = (state: RootState) => state.cards;

export const { changeCard, moveCard, deleteCard } = cardsSlice.actions;

export default cardsSlice.reducer;
