import { FC, ChangeEvent, useState } from 'react';
import { Input } from 'antd';
import { useAppDispatch } from '../../app/hooks';
import { changeCard, moveCard } from '../../features/cards/cardsSlice';
import './Card.scss';

interface ICardProps {
  title: string;
  id: string;
}

const Card: FC<ICardProps> = ({ title, id }) => {
  const dispatch = useAppDispatch();
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCard({ id, title: e.target.value }));
  };

  // TODO: move it to hook or helper func
  const handleCardClick = () => {
    if (clickTimeout !== null) {
      // double click executes
      dispatch(moveCard({ id, position: 'move-down' }));
      clearTimeout(clickTimeout);

      setClickTimeout(null);
    } else {
      // single click here

      setClickTimeout(
        setTimeout(() => {
          // first click executes
          dispatch(moveCard({ id, position: 'move-up' }));

          if (clickTimeout) {
            clearTimeout(clickTimeout);
          }

          setClickTimeout(null);
        }, 300)
      );
    }
  };

  return (
    <div className="card" onClick={() => handleCardClick()}>
      <h1>{title}</h1>
      <Input onChange={handleChange} />
    </div>
  );
};

export default Card;
