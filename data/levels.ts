export type LevelUrl = {
  url: string;
  legit: boolean;
  trueUrl?: string;
  explanation?: string;
  id?: string;
};

export type Level = {
  id: string;
  title: string;
  theory: string;
  urls: LevelUrl[];
};

export const levels: Level[] = [
  {
    id: "lvl-1",
    title: "Basic typos & lookalikes",
    theory: "Let's learn simple techniques: replacing letters with similar ones (1 ↔ l), adding prefixes/subdomains, and combination tricks.",
    urls: [
      {
        id: "l1-1",
        url: "https://paypa1.com/security",
        legit: false,
        trueUrl: "https://paypal.com",
        explanation: "Replaced the letter 'l' with the number '1' (lookalike)."
      },
      {
        id: "l1-2",
        url: "https://accounts.google.com/signin",
        legit: true,
        explanation: "Legit Google URL for sign in"
      },
      {
        id: "l1-3",
        url: "https://google.com.attacker.example/login",
        legit: false,
        trueUrl: "https://google.com",
        explanation: "Subdomain trap: 'attacker.example' has a subdomain 'google.com.attacker.example' — not the real google.com"
      }
    ]
  },

  {
    id: "lvl-2",
    title: "Punycode & homoglyphs",
    theory: "Here we will consider Unicode substitutions and Punycode (xn--). Attackers can use Cyrillic 'a' or other characters.",
    urls: [
      {
        id: "l2-1",
        url: "https://www.xn--pple-43d.com",
        legit: false,
        trueUrl: "https://apple.com",
        explanation: "Punycode version of the domain — may represent a homoglyph attack."
      },
      {
        id: "l2-2",
        url: "https://microsoft.com/security",
        legit: true,
        explanation: "Legit Microsoft URL."
      }
    ]
  }
];
