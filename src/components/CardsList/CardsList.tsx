import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectCards } from '../../features/cards/cardsSlice';
import Card from '../Card/Card';
import './CardsList.scss';

const CardsList: FC = () => {
  const cards = useAppSelector(selectCards);

  return (
    <div className="cards-wrapper">
      {cards.map((card) => {
        const { id, title } = card;

        return <Card key={id} id={id} title={title} />;
      })}
    </div>
  );
};

export default CardsList;
