import { ActionCreator } from '../types';

type DemoInput = { x: string };

type DemoAction = { y: string };

const fetchRequest: ActionCreator<DemoInput, DemoAction> = ({
  x
}) => async () => ({ y: x });

export const fetch: ActionCreator<DemoInput, DemoAction> = ({
  x
}) => async dispatch => {
  // 同一ファイルで定義した関数は型推論が有効
  // v: AsyncAction<RootState, DemoAction, Promise<any>>
  const v = fetchRequest({ x });
  return dispatch(v);
};
