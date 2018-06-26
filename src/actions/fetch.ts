import { ActionCreator } from '../types';
import { fetchRequest } from './fetchRequest';

type DemoInput = { x: string };

type DemoAction = { y: string };

export const fetch: ActionCreator<DemoInput, DemoAction> = ({
  x
}) => async dispatch => {
  // 別ファイルで定義された関数の型推論は制限される (annotation のみが考慮される)
  // v: DemoAction | AsyncAction<RootState, DemoAction, Promise<any>>
  const v = fetchRequest({ x });
  return dispatch(v);
};
