/* ---------===== custom props ====--------- */

export interface Quiz {
  question: string;
  answer: string;
  difficulty: Difficulty;
}

export enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
