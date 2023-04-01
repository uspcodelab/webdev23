import { Answers } from '@/containers/SignUp/context/models';

const GOOGLE_SPREADSHEETS_PATH = process.env.NEXT_PUBLIC_GOOGLESHEETS_API;

export const postSignup = async (props: Answers) => {
  await fetch(GOOGLE_SPREADSHEETS_PATH || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ date: new Date().toDateString(), ...props })
  });
};

export const getSignupByEmail = async (email: string) => {
  const res = await fetch(`${GOOGLE_SPREADSHEETS_PATH}/email/${email}`);
  const json = await res.json();

  return json;
};
