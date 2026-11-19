import type { APIRoute } from "astro";
import levels from "../data/levels.json";
import { FAQ } from "../data/faq";
import { PLAY_STORE_URL, SUPPORT_EMAIL } from "../data/site";

/** A plain Markdown summary of the site for AI agents and LLM crawlers (llmstxt.org). */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("https://arithmetick.rachelkenyani.com")).origin;
  const grades = levels
    .map(
      (g) =>
        `### Grade ${g.grade}\n` +
        g.levels.map((l) => `- ${l.n}. ${l.title}: ${l.eq}${l.quest ? " (Move & Play, away from the screen)" : ""}`).join("\n"),
    )
    .join("\n\n");
  const body = `# ArithmeTick

> A maths app for Kenyan children in Grades 1 to 3 (ages 6 to 9) on Android. Brijo the owl reads every instruction aloud, children count real things like bottle tops and mangoes, and a grown-up joins in for Move & Play activities. Free during the beta, no ads, made in Nairobi, Kenya.

- Install: [Google Play](${PLAY_STORE_URL})
- Support: ${SUPPORT_EMAIL}

## Pages

- [For Families](${origin}/): what the app is and who it is for
- [How It Works](${origin}/how-it-works): every level, grade by grade, and the eight skills
- [Contact](${origin}/contact): install link and support email
- [Privacy Policy](${origin}/privacy): what is collected (only a grown-up's email; children's data stays on the phone)
- [Terms of Use](${origin}/terms)
- [Delete Your Account](${origin}/delete-account)

## Questions parents ask

${FAQ.map((f) => `**${f.question}** ${f.answer}`).join("\n\n")}

## Every level

${grades}
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
};
