import * as actionType from '../utils/actionType';

export const onNumClick = (number) => ({
  type: actionType.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: actionType.PLUS,
});