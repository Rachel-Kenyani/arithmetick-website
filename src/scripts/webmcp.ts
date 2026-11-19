/**
 * WebMCP: exposes read-only tools to AI agents running in the visitor's browser,
 * through the proposed navigator.modelContext API. Browsers without it ignore this file.
 */
import levels from "../data/levels.json";
import { FAQ } from "../data/faq";
import { PLAY_STORE_URL, SUPPORT_EMAIL } from "../data/site";

interface Tool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: { readOnlyHint?: boolean };
  execute: (input: Record<string, unknown>) => Promise<{ content: { type: "text"; text: string }[] }>;
}
interface ModelContext {
  registerTool?: (tool: Tool) => void;
  provideContext?: (context: { tools: Tool[] }) => void;
}

const text = (value: unknown) => ({ content: [{ type: "text" as const, text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }] });

const tools: Tool[] = [
  {
    name: "get_app_info",
    description: "Facts about the ArithmeTick maths app: who it is for, price, platform, privacy and where to install it.",
    inputSchema: { type: "object", properties: {} },
    annotations: { readOnlyHint: true },
    execute: async () =>
      text({
        name: "ArithmeTick",
        summary: "Maths games for Grades 1 to 3 (ages 6 to 9). Brijo the owl reads every instruction aloud.",
        platform: "Android",
        price: "Free during the beta, no ads",
        installUrl: PLAY_STORE_URL,
        support: SUPPORT_EMAIL,
        faq: FAQ,
      }),
  },
  {
    name: "list_levels",
    description: "List every level in a grade of ArithmeTick, with the maths each one practises.",
    inputSchema: {
      type: "object",
      properties: { grade: { type: "string", enum: ["1", "2", "3"], description: "School grade" } },
      required: ["grade"],
    },
    annotations: { readOnlyHint: true },
    execute: async ({ grade }) => {
      const found = levels.find((g) => g.grade === String(grade));
      return text(found ? found.levels : `No grade ${String(grade)}. Choose 1, 2 or 3.`);
    },
  },
  {
    name: "open_install_page",
    description: "Open the ArithmeTick page on Google Play so the person can install the app.",
    inputSchema: { type: "object", properties: {} },
    execute: async () => {
      window.open(PLAY_STORE_URL, "_blank", "noopener");
      return text(`Opened ${PLAY_STORE_URL}`);
    },
  },
];

const modelContext = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
if (modelContext?.provideContext) {
  modelContext.provideContext({ tools });
} else if (modelContext?.registerTool) {
  for (const tool of tools) {
    modelContext.registerTool(tool);
  }
}
