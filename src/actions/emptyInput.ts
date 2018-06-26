import { AsyncActionCreator } from '../types';

type DemoInput = undefined;

type DemoAction = { y: string };

export const emptyInput: AsyncActionCreator<
  DemoInput,
  DemoAction
> = () => async dispatch => {
  // 別ファイルで定義された関数の型推論は制限される (annotation のみが考慮される)
  // v: DemoAction | AsyncAction<RootState, DemoAction, Promise<any>>
  return dispatch({ y: 'foo' });
};

console.log(emptyInput());
