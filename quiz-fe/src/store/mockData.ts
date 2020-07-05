import { Quiz, QuizQuestion } from "../types";

export const mockQuizzes: Quiz[] = [
  {
    quizId: "pasaulesGeografija",
    name: "Pasaules ģeogrāfija",
  },
  {
    quizId: "latvijasGeografija",
    name: "Latvijas ģeogrāfija",
  },
  {
    quizId: "eiropasGalvaspilsetas",
    name: "Eiropas galvaspilsētas",
  },
];

export const mockQuizQuestionsPG: QuizQuestion[] = [
  {
    questionId: "q01",
    questionText: "Kura ir pasaulē augstākā virsotne?",
    options: [
      {
        answerId: "0",
        optionText: "Everests",
      },
      {
        answerId: "1",
        optionText: "Monblāns",
      },
      {
        answerId: "2",
        optionText: "Gaiziņš",
      },
      {
        answerId: "3",
        optionText: "Kilimandžāro",
      },
    ],
  },
  {
    questionId: "q02",
    questionText: "Kāda ir zemeslodes forma?",
    options: [
      {
        answerId: "0",
        optionText: "Plakana",
      },
      {
        answerId: "1",
        optionText: "Perfekta lode",
      },
      {
        answerId: "2",
        optionText: "Elipsveidīga lode",
      },
    ],
  },
  {
    questionId: "q03",
    questionText: "Kurš ir pasaulē lielākais ezers?",
    options: [
      {
        answerId: "0",
        optionText: "Kaspijas jūra",
      },
      {
        answerId: "1",
        optionText: "Viktorijas ezers",
      },
      {
        answerId: "2",
        optionText: "Baikāls",
      },
      {
        answerId: "3",
        optionText: "Hūrons",
      },
    ],
  },
  {
    questionId: "q04",
    questionText: "Kas ir pasaules lielākā sala?",
    options: [
      {
        answerId: "0",
        optionText: "Madagaskara",
      },
      {
        answerId: "1",
        optionText: "Grenlande",
      },
      {
        answerId: "2",
        optionText: "Lielbritānija",
      },
      {
        answerId: "3",
        optionText: "Jaungvineja",
      },
    ],
  },
];

export const mockQuizQuestionsLG: QuizQuestion[] = [
  {
    questionId: "q11",
    questionText: "Kura ir Latvijas garākā upe?",
    options: [
      {
        answerId: "0",
        optionText: "Daugava",
      },
      {
        answerId: "1",
        optionText: "Gauja",
      },
      {
        answerId: "2",
        optionText: "Lielupe",
      },
      {
        answerId: "3",
        optionText: "Venta",
      },
    ],
  },
  {
    questionId: "q12",
    questionText: "Kurš ir Latvijas dziļākais ezers?",
    options: [
      {
        answerId: "0",
        optionText: "Ušurs",
      },
      {
        answerId: "1",
        optionText: "Sventes ezers",
      },
      {
        answerId: "2",
        optionText: "Drīdzis",
      },
    ],
  },
  {
    questionId: "q13",
    questionText: "Kurš ir Latvijas lielākais ezers?",
    options: [
      {
        answerId: "0",
        optionText: "Rāznas ezers",
      },
      {
        answerId: "1",
        optionText: "Burtnieks",
      },
      {
        answerId: "2",
        optionText: "Engures ezers",
      },
      {
        answerId: "3",
        optionText: "Lubāns",
      },
    ],
  },
];

export const mockQuizQuestionsEG: QuizQuestion[] = [
  {
    questionId: "q21",
    questionText: "Latvijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        optionText: "Tallina",
      },
      {
        answerId: "1",
        optionText: "Rīga",
      },
      {
        answerId: "2",
        optionText: "Koperniks",
      },
      {
        answerId: "3",
        optionText: "Daugavgrīva",
      },
    ],
  },
  {
    questionId: "q22",
    questionText: "Igaunijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        optionText: "Tallina",
      },
      {
        answerId: "1",
        optionText: "Pērnava",
      },
    ],
  },
  {
    questionId: "q23",
    questionText: "Vācijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        optionText: "Minhene",
      },
      {
        answerId: "1",
        optionText: "Parīze",
      },
      {
        answerId: "2",
        optionText: "Roma",
      },
      {
        answerId: "3",
        optionText: "Berlīne",
      },
    ],
  },
  {
    questionId: "q24",
    questionText: "Čehijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        optionText: "Prāga",
      },
      {
        answerId: "1",
        optionText: "Brno",
      },
      {
        answerId: "2",
        optionText: "Krakova",
      },
      {
        answerId: "3",
        optionText: "Bratislava",
      },
    ],
  },
  {
    questionId: "q25",
    questionText: "Slovēnijas galvaspilsēta ir ...",
    options: [
      {
        answerId: "0",
        optionText: "Budapešta",
      },
      {
        answerId: "1",
        optionText: "Zagreba",
      },
      {
        answerId: "2",
        optionText: "Ļubļana",
      },
      {
        answerId: "3",
        optionText: "Sarajeva",
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
