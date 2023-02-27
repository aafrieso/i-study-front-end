/* ---------==== custom forms ====--------- */

export interface QuizFormData {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
