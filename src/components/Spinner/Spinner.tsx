import { FC } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 40vh auto;
`;

interface ISpinnerProps {}

const Spinner: FC<ISpinnerProps> = () => {
  return <FadeLoader color={'#a7a084'} css={override} />;
};

export default Spinner;
