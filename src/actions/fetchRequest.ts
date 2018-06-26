import { ActionCreator } from '../types';

type DemoInput = { x: string };

type DemoAction = { y: string };

export const fetchRequest: ActionCreator<DemoInput, DemoAction> = ({
  x
}) => async () => ({ y: x });
