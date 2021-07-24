const checkPasswordValid = (signUpForm): { state: boolean; message: string } => {
  let numbers = /[0-9]/g;
  let lowerCaseLetters = /[a-z]/g;
  if (signUpForm.password.length === 0) {
    return { state: false, message: "비밀번호가 입력되지 않았습니다." };
  } else if (signUpForm.password !== signUpForm.password_validate) {
    return { state: false, message: "비밀번호가 일치하지 않습니다." };
  } else if (signUpForm.password.length < 8) {
    return { state: false, message: "비밀번호가 너무 짧습니다." };
  } else if (!signUpForm.password.match(lowerCaseLetters)) {
    return {
      state: false,
      message: "비밀번호에는 영문 소문자가 하나 이상 포함되어야 합니다.",
    };
  } else if (!signUpForm.password.match(numbers)) {
    return { state: false, message: "비밀번호에는 숫자가 하나 이상 포함되어야 합니다." };
  } else {
    return {
      state: true,
      message: "회원가입이 가능합니다.",
    };
  }
};

export const checkFormComplete = (signUpForm): { state: boolean; message: string } => {
  if (signUpForm.email.length === 0) {
    return { state: false, message: "이메일이 입력되지 않았습니다." };
  }
  if (signUpForm.email.includes("@") === false) {
    return { state: false, message: "올바른 이메일 형식이 아닙니다." };
  }
  return checkPasswordValid(signUpForm);
  if (signUpForm.username.length === 0) {
    return { state: false, message: "별명이 입력되지 않았습니다." };
  }
};
