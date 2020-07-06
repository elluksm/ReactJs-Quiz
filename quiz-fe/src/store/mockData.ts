import { Quiz, Question } from "../types";

export const mockQuizzes: Quiz[] = [
  {
    quizId: "0",
    name: "Pasaules ģeogrāfija",
  },
  {
    quizId: "1",
    name: "Latvijas ģeogrāfija",
  },
  {
    quizId: "2",
    name: "Eiropas galvaspilsētas",
  },
];

export const mockQuizQuestionsPG: Question[] = [
  {
    questionId: "q01",
    questionText: "Kura ir pasaulē augstākā virsotne?",
    options: [
      {
        answerId: "0",
        answerText: "Everests",
      },
      {
        answerId: "1",
        answerText: "Monblāns",
      },
      {
        answerId: "2",
        answerText: "Gaiziņš",
      },
      {
        answerId: "3",
        answerText: "Kilimandžāro",
      },
    ],
  },
  {
    questionId: "q02",
    questionText: "Kāda ir zemeslodes forma?",
    options: [
      {
        answerId: "0",
        answerText: "Plakana",
      },
      {
        answerId: "1",
        answerText: "Perfekta lode",
      },
      {
        answerId: "2",
        answerText: "Elipsveidīga lode",
      },
    ],
  },
  {
    questionId: "q03",
    questionText: "Kurš ir pasaulē lielākais ezers?",
    options: [
      {
        answerId: "0",
        answerText: "Kaspijas jūra",
      },
      {
        answerId: "1",
        answerText: "Viktorijas ezers",
      },
      {
        answerId: "2",
        answerText: "Baikāls",
      },
      {
        answerId: "3",
        answerText: "Hūrons",
      },
    ],
  },
  {
    questionId: "q04",
    questionText: "Kas ir pasaules lielākā sala?",
    options: [
      {
        answerId: "0",
        answerText: "Madagaskara",
      },
      {
        answerId: "1",
        answerText: "Grenlande",
      },
      {
        answerId: "2",
        answerText: "Lielbritānija",
      },
      {
        answerId: "3",
        answerText: "Jaungvineja",
      },
    ],
  },
];

export const mockQuizQuestionsLG: Question[] = [
  {
    questionId: "q11",
    questionText: "Kura ir Latvijas garākā upe?",
    options: [
      {
        answerId: "0",
        answerText: "Daugava",
      },
      {
        answerId: "1",
        answerText: "Gauja",
      },
      {
        answerId: "2",
        answerText: "Lielupe",
      },
      {
        answerId: "3",
        answerText: "Venta",
      },
    ],
  },
  {
    questionId: "q12",
    questionText: "Kurš ir Latvijas dziļākais ezers?",
    options: [
      {
        answerId: "0",
        answerText: "Ušurs",
      },
      {
        answerId: "1",
        answerText: "Sventes ezers",
      },
      {
        answerId: "2",
        answerText: "Drīdzis",
      },
    ],
  },
  {
    questionId: "q13",
    questionText: "Kurš ir Latvijas lielākais ezers?",
    options: [
      {
        answerId: "0",
        answerText: "Rāznas ezers",
      },
      {
        answerId: "1",
        answerText: "Burtnieks",
      },
      {
        answerId: "2",
        answerText: "Engures ezers",
      },
      {
        answerId: "3",
        answerText: "Lubāns",
      },
    ],
  },
];

export const mockQuizQuestionsEG: Question[] = [
  {
    questionId: "q21",
    questionText: "Latvijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        answerText: "Tallina",
      },
      {
        answerId: "1",
        answerText: "Rīga",
      },
      {
        answerId: "2",
        answerText: "Koperniks",
      },
      {
        answerId: "3",
        answerText: "Daugavgrīva",
      },
    ],
  },
  {
    questionId: "q22",
    questionText: "Igaunijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        answerText: "Tallina",
      },
      {
        answerId: "1",
        answerText: "Pērnava",
      },
    ],
  },
  {
    questionId: "q23",
    questionText: "Vācijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        answerText: "Minhene",
      },
      {
        answerId: "1",
        answerText: "Parīze",
      },
      {
        answerId: "2",
        answerText: "Roma",
      },
      {
        answerId: "3",
        answerText: "Berlīne",
      },
    ],
  },
  {
    questionId: "q24",
    questionText: "Čehijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        answerText: "Prāga",
      },
      {
        answerId: "1",
        answerText: "Brno",
      },
      {
        answerId: "2",
        answerText: "Krakova",
      },
      {
        answerId: "3",
        answerText: "Bratislava",
      },
    ],
  },
  {
    questionId: "q25",
    questionText: "Slovēnijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        answerText: "Budapešta",
      },
      {
        answerId: "1",
        answerText: "Zagreba",
      },
      {
        answerId: "2",
        answerText: "Ļubļana",
      },
      {
        answerId: "3",
        answerText: "Sarajeva",
      },
    ],
  },
];

export const QuizAnswers = [
  { q01: "0" },
  { q02: "2" },
  { q03: "0" },
  { q04: "1" },
  { q11: "1" },
  { q12: "2" },
  { q13: "3" },
  { q21: "1" },
  { q22: "0" },
  { q23: "3" },
  { q24: "0" },
  { q25: "2" },
];
