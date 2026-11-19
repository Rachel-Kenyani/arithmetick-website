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
      "Levels take a few minutes each, and a built-in 15-minute timer keeps each day's play short.",
  },
  {
    question: "What happens to my child's data?",
    answer:
      "Children's names, stars and progress stay on the phone. We keep only the grown-up's email to log in. There are no ads, no tracking and no selling of data. Weekly email reports are off until a grown-up turns them on.",
  },
  {
    question: "What maths does it cover?",
    answer:
      "Eight skills from the Grade 1 to 3 syllabus: making 10, taking away, place value, adding on, counting in steps, equal groups, sharing equally and telling the time.",
  },
];

/** Help with using the app, for the Contact page. Steps must match the app. */
export const HELP_FAQ: { question: string; answer: string }[] = [
  {
    question: "How do I open the grown-up settings?",
    answer:
      "On the \"Who is playing today?\" screen, press and hold the round gear in the top corner for 2 seconds. The hold keeps young children out.",
  },
  {
    question: "How do I add another child?",
    answer: "Open the grown-up settings, then tap Add a child under Family. You can add up to 4 children, each with their own map and stars.",
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
      "Your account moves with you: sign in on the new phone with the same email. Children's stars and progress are kept on the old phone, so they start their maps again.",
  },
];
