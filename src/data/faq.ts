/**
 * Answers to the questions parents ask most. One source for the home page FAQ,
 * its FAQPage structured data, /llms.txt and the WebMCP tools, so they never disagree.
 * Every claim here must match the Privacy Policy.
 */
export const FAQ: { question: string; answer: string }[] = [
  {
    question: "Who is ArithmeTick for?",
    answer:
      "Children in Grades 1 to 3, usually aged 6 to 9, playing on a parent's Android phone. A grown-up creates the account and joins in for the Move & Play activities.",
  },
  {
    question: "How much does it cost?",
    answer: "ArithmeTick is free during the beta. There are no ads and no in-app purchases.",
  },
  {
    question: "Does my child need to read?",
    answer:
      "No. Brijo the owl reads every instruction aloud, and the words light up as they are spoken, so children can play while they are still learning to read.",
  },
  {
    question: "Which phones does it work on?",
    answer: "Android phones, through Google Play. There is no iPhone version yet.",
  },
  {
    question: "How long should my child play?",
    answer:
      "Levels take a few minutes each. A grown-up sets a daily limit in the grown-up settings, from 10 to 60 minutes, starting at 15. Only time inside a level counts, and play stops for the day when the time is up.",
  },
  {
    question: "What happens to my child's data?",
    answer:
      "We keep the grown-up's email to log in, and each child's progress so it is safe with your account. There are no ads, and we never sell or share your family's data. Weekly email reports are off until a grown-up turns them on. The Privacy Policy lists exactly what we keep.",
  },
  {
    question: "Does it follow the CBC curriculum?",
    answer:
      "Yes. Every level is built on the maths in Kenya's Competency-Based Curriculum (CBC) for Grades 1 to 3, using things children see at home and at the market.",
  },
  {
    question: "What maths does it cover?",
    answer:
      "Eight skills from Kenya's CBC maths curriculum for Grades 1 to 3: making 10, taking away, place value, adding on, counting in steps, equal groups, sharing equally and telling the time.",
  },
];

/** Help with using the app, for the Contact page. Steps must match the app. */
export const HELP_FAQ: { question: string; answer: string }[] = [
  {
    question: "How do I open the grown-up settings?",
    answer:
      "On the \"Who is playing today?\" screen, press and hold the round gear marked Hold in the top corner for 2 seconds. The hold keeps young children out.",
  },
  {
    question: "How do I add another child?",
    answer: "Open the grown-up settings, then tap Add a child under Family. You can add up to 4 children, each with their own map and stars.",
  },
  {
    question: "Can I change how Brijo sounds and looks for my child?",
    answer:
      "Yes, for each child separately. On the child's Settings tab, under For grown-ups, hold a switch for 2 seconds: Brijo reads aloud turns the voice on or off, Larger Brijo captions makes Brijo's words bigger, and Calm mode stops sparkles, bouncing and cheering sounds. The music button at the top turns sound effects off.",
  },
  {
    question: "How do I change the daily play limit?",
    answer: "Open the grown-up settings and pick the minutes under Daily play limit, from 10 to 60. It is shared by every child on that phone.",
  },
  {
    question: "How do I turn weekly reports on or off?",
    answer:
      "Use the Weekly reports switch in the grown-up settings, or the link at the bottom of any report. When you turn them off, what we kept for them is deleted straight away.",
  },
  {
    question: "I forgot my password. What do I do?",
    answer: "On the sign-in screen, choose to reset your password. We'll email you a code to set a new one.",
  },
  {
    question: "Can I move to a new phone?",
    answer:
      "Yes. Install ArithmeTick on the new phone and sign in with the same email. Each child's progress is saved with your account, so their maps, stars and badges come with them.",
  },
];

/** The short list on the home page: the questions that decide whether a parent installs. */
export const HOME_FAQ = [
  "How much does it cost?",
  "Does my child need to read?",
  "Which phones does it work on?",
  "What happens to my child's data?",
].map((question) => FAQ.find((f) => f.question === question)!);
