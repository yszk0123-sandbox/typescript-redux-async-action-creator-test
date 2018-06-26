type AnyPromise = Promise<any>;

type RootState = { name: string };

export type EmptyAction = {};

export type Dispatch<A, P = AnyPromise> = {
  (action: Function): P;
  (action: A): A | null;
};

export type AsyncAction<State, Action, Return = AnyPromise> = (
  dispatch: Dispatch<Action, Return>,
  getState: () => State
) => Return;

export type AsyncActionCreator<Input, Action> = (
  input: Input
) => AsyncAction<RootState, Action, Promise<any>>;

type SyncActionCreator<Input, Action> = (input: Input) => Action;

export type ActionCreator<Input, Action> =
  | SyncActionCreator<Input, Action>
  | AsyncActionCreator<Input, Action>;
