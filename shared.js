// shared.js — CineVault shared utilities
// Auth helpers
const Auth = {
  login(user) { localStorage.setItem('cv_user', JSON.stringify(user)); },
  logout() { localStorage.removeItem('cv_user'); },
  current() { try { return JSON.parse(localStorage.getItem('cv_user')); } catch { return null; } },
  required(redirect = 'auth-freedom.html') { if (!this.current()) { window.location.href = redirect; return false; } return true; }
};

// Watchlist helpers
const Watchlist = {
  get() { try { return JSON.parse(localStorage.getItem('cv_watchlist')) || []; } catch { return []; } },
  add(movie) {
    const list = this.get();
    if (!list.find(m => m.id === movie.id)) { list.push(movie); localStorage.setItem('cv_watchlist', JSON.stringify(list)); }
  },
  remove(id) {
    const list = this.get().filter(m => m.id !== id);
    localStorage.setItem('cv_watchlist', JSON.stringify(list));
  },
  has(id) { return this.get().some(m => m.id === id); }
};

// Movies data
const MOVIES = [
  { id: 1, title: "Interstellar", year: 2014, genre: ["Sci-Fi","Drama"], rating: 8.7, duration: "2h 49m", director: "Christopher Nolan", cast: ["Matthew McConaughey","Anne Hathaway","Jessica Chastain"], description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", backdrop: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg", trailer: "https://www.youtube.com/embed/zSWdZVtXT7E", featured: true },
  { id: 2, title: "Dune: Part Two", year: 2024, genre: ["Sci-Fi","Adventure"], rating: 8.5, duration: "2h 46m", director: "Denis Villeneuve", cast: ["Timothée Chalamet","Zendaya","Rebecca Ferguson"], description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", poster: "https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg", backdrop: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", trailer: "https://www.youtube.com/embed/Way9Dexny3w", featured: true },
  { id: 3, title: "Oppenheimer", year: 2023, genre: ["Drama","History"], rating: 8.3, duration: "3h 0m", director: "Christopher Nolan", cast: ["Cillian Murphy","Emily Blunt","Matt Damon"], description: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.", poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", backdrop: "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg", trailer: "https://www.youtube.com/embed/uYPbbksJxIg", featured: true },
  { id: 4, title: "The Batman", year: 2022, genre: ["Action","Crime"], rating: 7.8, duration: "2h 56m", director: "Matt Reeves", cast: ["Robert Pattinson","Zoë Kravitz","Paul Dano"], description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.", poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg", backdrop: "https://image.tmdb.org/t/p/original/5P8SmMzSNYikXpxil6BYzJ16611.jpg", trailer: "https://www.youtube.com/embed/mqqft2x_Aa4", featured: false },
  { id: 5, title: "Blade Runner 2049", year: 2017, genre: ["Sci-Fi","Drama"], rating: 8.0, duration: "2h 44m", director: "Denis Villeneuve", cast: ["Ryan Gosling","Harrison Ford","Ana de Armas"], description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.", poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg", backdrop: "https://image.tmdb.org/t/p/original/ilRyazdMJwN05exqhwK4tMKBYZs.jpg", trailer: "https://www.youtube.com/embed/gCcx85zbxz4", featured: false },
  { id: 6, title: "Everything Everywhere All at Once", year: 2022, genre: ["Sci-Fi","Comedy"], rating: 7.8, duration: "2h 19m", director: "Daniels", cast: ["Michelle Yeoh","Ke Huy Quan","Jamie Lee Curtis"], description: "A middle-aged Chinese immigrant is swept up in an insane adventure where she must connect with parallel universe versions of herself.", poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", backdrop: "https://image.tmdb.org/t/p/original/ohGnCZLIUFQjXbezkZMhQc69Kw.jpg", trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g", featured: false },
  { id: 7, title: "Top Gun: Maverick", year: 2022, genre: ["Action","Drama"], rating: 8.3, duration: "2h 10m", director: "Joseph Kosinski", cast: ["Tom Cruise","Miles Teller","Jennifer Connelly"], description: "After more than thirty years of service, Pete 'Maverick' Mitchell is back, pushing the envelope as a top naval aviator.", poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", backdrop: "https://image.tmdb.org/t/p/original/AkB0EGwkAFARz4PjmT4yQItjDmk.jpg", trailer: "https://www.youtube.com/embed/qSqVVswa420", featured: false },
  { id: 8, title: "Parasite", year: 2019, genre: ["Thriller","Drama"], rating: 8.5, duration: "2h 12m", director: "Bong Joon-ho", cast: ["Song Kang-ho","Lee Sun-kyun","Cho Yeo-jeong"], description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", backdrop: "https://image.tmdb.org/t/p/original/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg", trailer: "https://www.youtube.com/embed/5xH0HfJHsaY", featured: false },
];

window.Auth = Auth;
window.Watchlist = Watchlist;
window.MOVIES = MOVIES;