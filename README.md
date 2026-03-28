# 🎬 CineVault

> *Every Story. One Vault.*

CineVault is a front-end movie listing and streaming web application built as a group project. It allows users to discover films, read detailed information, watch trailers, save titles to a personal watchlist, and manage their account — all without a backend, using `localStorage` for data persistence.

---

## 💡 What is CineVault?

CineVault is designed to replicate the core experience of a modern streaming platform. The goal was to build a sleek, cinematic UI that feels production-ready — with real user flows like authentication, browsing, filtering, and watchlist management — entirely on the front-end.

The design language is dark and editorial: deep blacks, blood-red accents, gold highlights, and cinematic typography — think A24 meets Netflix.

**Stack:** HTML · Tailwind CSS · Vanilla JavaScript · LocalStorage

---

## 📁 Project Structure

```
cinevault/
├── index.html          # Landing page
├── movies.html         # Movie listing & search
├── movie-details.html  # Movie detail view & player
├── auth.html           # Login & registration
├── watchlist.html      # User watchlist & profile
└── shared.js           # Shared data, auth & watchlist utilities
```

> All pages load `shared.js` — the single source of truth for movie data, auth helpers, and watchlist logic. No conflicts during collaboration.

---

## 👥 Team & Roles

| Member | Page | Responsibilities |
|---|---|---|
| **Tosin** | `index.html` | Landing page — hero section, featured films, genre marquee, site intro |
| **Unhappy Dev** | `movies.html` | Browse page — full movie grid, genre filters, search, sort controls |
| **Apostle** | `movie-details.html` | Detail & player page — backdrop hero, trailer modal, stream player, related films |
| **Freedom** | `auth.html` | Authentication — tabbed login/register, form validation, localStorage session |
| **Prozaks** | `watchlist.html` | Watchlist & profile — saved films, user stats, recommendations, auth guard |

---

## ✨ Features

- **Authentication** — Register and sign in with credentials stored securely in `localStorage`
- **Movie Browsing** — Grid layout with real-time search, genre filtering, and sort options
- **Movie Details** — Full detail view with backdrop, cast, director, rating, and description
- **Trailer Playback** — Embedded YouTube trailer modal per film
- **Stream Player** — Simulated watch experience (auth-gated)
- **Watchlist** — Add/remove films, persisted per user session
- **Recommendations** — Genre-based suggestions on the watchlist page
- **Responsive Design** — Mobile-first layout across all pages
- **Film Grain Overlay** — Cinematic texture applied globally via CSS

---

## 🚀 Getting Started

1. Clone the repository
2. Open any `.html` file directly in your browser — no build step needed
3. Start on `index.html`

```bash
git clone https://github.com/your-org/cinevault.git
cd cinevault
open index.html
```

> **Note:** All pages must be in the same directory as `shared.js` to function correctly.

---

## 🤝 Collaboration Notes

- Each team member owns one `.html` file — merge conflicts are virtually impossible
- `shared.js` is the only shared file; avoid editing it without coordinating with the team
- LocalStorage keys are namespaced (`cv_user`, `cv_users`, `cv_watchlist`) to prevent collisions
- All files are under 200 lines for readability

---

*Built with 🎞️ by the CineVault team.*
