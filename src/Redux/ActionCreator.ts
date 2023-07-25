import {FAILED, REQUESTED, SUCCESS} from './ActionType';

export {};
type CreatorType = {
  type: string;
};
type CreatorTypeOne = {
  type: string;
  payload: [{}] | {};
};

type ActionCreatorType = CreatorType | CreatorTypeOne;

export const Requested = (): ActionCreatorType => {
  return {
    type: REQUESTED,
  };
};
export const Success = (user: any): ActionCreatorType => {
  return {
    type: SUCCESS,
    payload: user,
  };
};
export const Failed = (massage: string): ActionCreatorType => {
  return {
    type: FAILED,
    payload: massage,
  };
};
