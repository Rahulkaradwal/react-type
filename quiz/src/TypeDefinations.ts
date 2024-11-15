// {
//     "question": "Which is the most popular JavaScript framework?",
//     "options": [
//       "Angular",
//       "React",
//       "Svelte",
//       "Vue"
//     ],
//     "correctOption": 1,
//     "points": 10,
//     "id": "a701"
//   },

export interface IOptions {
  options: string[];
}

export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  id: string;
}
