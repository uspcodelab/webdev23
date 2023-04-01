import React, { useMemo, useReducer } from 'react';
import { SignUpAction, SignUpState } from './models';
import { SignUpReducer } from './reducer';

const initialState: SignUpState = {
  step: 0,
  emailError: '',
  answers: {}
};

export const SignUpContext = React.createContext<{
  state: SignUpState;
  dispatch: React.Dispatch<SignUpAction>;
}>({
  state: initialState,
  dispatch: () => null
});

export const SignUpProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(SignUpReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
};
