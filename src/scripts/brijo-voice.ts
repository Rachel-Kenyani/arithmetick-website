/**
 * Brijo's voice: plays the app's own recordings (public/audio) and lights up each word as she says it,
 * like the app does. Audio only ever starts from a tap or click, and one clip plays at a time.
 */
let current: HTMLAudioElement | null = null;
let timers: number[] = [];

const clear = () => {
  current?.pause();
  current = null;
  timers.forEach((t) => window.clearTimeout(t));
  timers = [];
  for (const el of document.querySelectorAll(".speaking, .spoken-word")) {
    el.classList.remove("speaking", "spoken-word");
  }
};

/** Play a clip by name. If `words` is given, each child with data-t (ms) is highlighted on time. */
export function say(name: string, words?: HTMLElement | null): Promise<void> {
  clear();
  const audio = new Audio(`/audio/${name}.m4a`);
  current = audio;
  return new Promise((resolve) => {
    const finish = () => {
      if (current === audio) {
        clear();
      }
      resolve();
    };
    audio.addEventListener("ended", finish, { once: true });
    audio.addEventListener("error", finish, { once: true });
    audio
      .play()
      .then(() => {
        if (!words) {
          return;
        }
        words.classList.add("speaking");
        for (const word of words.querySelectorAll<HTMLElement>("[data-t]")) {
          timers.push(
            window.setTimeout(() => {
              words.querySelector(".spoken-word")?.classList.remove("spoken-word");
              word.classList.add("spoken-word");
            }, Number(word.dataset.t)),
          );
        }
      })
      .catch(finish);
  });
}

export const stopVoice = clear;
