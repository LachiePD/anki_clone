export const MOCK_CARDS = [
  {
    id: 101,
    user_id: 1,
    deck_id: "deck_abc",
    front: "What does .flat() do?",
    back: "Flattens nested arrays into a single-level array.",
    created_at: "2026-02-17T10:00:00Z"
  },
  {
    id: 102,
    user_id: 1,
    deck_id: "deck_abc",
    front: "PascalCase vs camelCase",
    back: "PascalCase: WordStartsLikeThis. camelCase: wordStartsLikeThis.",
    created_at: "2026-02-17T11:30:00Z"
  },
  {
    id: 103,
    user_id: 1,
    deck_id: "deck_xyz",
    front: "Why use .env?",
    back: "To keep sensitive keys like DB passwords out of GitHub history.",
    created_at: "2026-02-17T12:15:00Z"
  }
];

export const MOCK_DECKS = [
  {
    id: 10,
    user_id: 2,
    name: "Javascript Fundamentals",
    card_count: 12,
    created_at: "2026-02-15T20:00:03.618Z"
  },
  {
    id: 11,
    user_id: 2,
    name: "React Hooks",
    card_count: 8,
    created_at: "2026-02-16T23:30:59.671Z"
  },
  {
    id: 12,
    user_id: 2,
    name: "CSS Grid & Flexbox",
    card_count: 0,
    created_at: "2026-02-17T10:15:00.000Z"
  },
  {
    id: 13,
    user_id: 2,
    name: "Postgres Mastery",
    card_count: 5,
    created_at: "2026-02-17T12:00:00.000Z"
  }
];
