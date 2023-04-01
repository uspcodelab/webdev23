export enum SignUpActions {
  SET_STEP = 'SET_STEP',
  SET_NAME = 'SET_NAME',
  SET_EMAIL = 'SET_EMAIL',
  SET_EMAIL_ERROR = 'SET_EMAIL_ERROR',
  SET_COURSE = 'SET_COURSE',
  SET_YEAR = 'SET_YEAR',
  SET_EXPECTATION = 'SET_EXPECTATION',
  SET_KNOWLEDGE = 'SET_KNOWLEDGE'
}

export interface Answers {
  name?: string;
  email?: string;
  course?: string;
  year?: 1 | 2 | 3 | 4;
  expectation?: string;
  knowledge?: 1 | 2 | 3;
}

interface ActionData extends Answers {
  step?: number;
  emailError?: string;
}

export interface SignUpAction {
  type: SignUpActions;
  data: ActionData;
}

export interface SignUpState {
  step: number;
  emailError: string;
  answers: Answers;
}
