import { SignUpAction, SignUpActions, SignUpState } from './models';

export const SignUpReducer = (
  state: SignUpState,
  { type, data }: SignUpAction
): SignUpState => {
  switch (type) {
    case SignUpActions.SET_STEP:
      if (data.step == undefined) throw new Error('Step undefined');
      return {
        ...state,
        step: data.step
      };
    case SignUpActions.SET_NAME:
      if (!data.name) throw new Error('Name undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          name: data.name
        }
      };
    case SignUpActions.SET_EMAIL:
      if (!data.email) throw new Error('Email undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          email: data.email
        }
      };
    case SignUpActions.SET_EMAIL_ERROR:
      if (data.emailError == undefined)
        throw new Error('Error message undefined');
      return {
        ...state,
        emailError: data.emailError
      };
    case SignUpActions.SET_COURSE:
      if (data.course == undefined) throw new Error('Course undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          course: data.course
        }
      };
    case SignUpActions.SET_YEAR:
      if (!data.year) throw new Error('Year undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          year: data.year
        }
      };
    case SignUpActions.SET_EXPECTATION:
      if (data.expectation === undefined)
        throw new Error('Expectation undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          expectation: data.expectation
        }
      };
    case SignUpActions.SET_KNOWLEDGE:
      if (data.knowledge === undefined) throw new Error('Knowledge undefined');
      return {
        ...state,
        answers: {
          ...state.answers,
          knowledge: data.knowledge
        }
      };
    default:
      throw new Error('Invalid action type');
  }
};
