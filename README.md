# 🌟 Inspire 2026

> **Intra Collegiate Tech Fest** · Department of Computer Applications (UG) in collaboration with the IT Club  
> 📍 St. Claret College, Bengaluru · 📅 September 10th, 2026  
> 🎓 Exclusively for 1st & 2nd Year BCA Students

---

## 🚀 Live Demo

👉 **[https://inspire-six-nu.vercel.app/](https://inspire-six-nu.vercel.app/)**

---

## 📖 About

**Inspire 2026** is a full-stack intra-collegiate tech fest platform built for **St. Claret College**. It serves as the official event hub — allowing students to explore events, register as delegates, and track their squad's live score on the **real-time leaderboard** throughout the day of the fest.

The platform brings together 11 competing squads across 14 competition tracks, with an admin-controlled scoring system and live updates visible to all participants.

---

## ✨ Main Features

### 🏠 Main Site (`index.html`)
- **Hero Section** — Animated landing with event branding, date, venue, and a countdown
- **Event Tracks** — Browse all 14 official competition categories (IT Quiz, Coding, Design, etc.) with format, venue & timings
- **Squad Teams** — View all 11 competing squads with captain & vice-captain profiles and squad identity
- **Student Registration** — One-click delegate sign-up form tied to the backend; generates a unique `INS-2026-XXXX` pass ID on success
- **Schedule** — Full day schedule with event timings and venues
- **Fest Pillars** — Highlights the core themes and values of Inspire 2026
- **Venue & Contact** — Campus info, coordinator contacts, and social links
- **Guidelines** — Rules and participation guidelines for all events

### 📊 Live Leaderboard
The leaderboard is the heartbeat of the fest — it shows **real-time squad standings** throughout the event day.

- Pulls live score data from the Django REST backend every few seconds via **`GET /api/scores/`**
- Displays all **11 squads** ranked by total points in descending order
- Shows squad name, captain, badge color, and current point total
- **Auto-refreshes** so students watching on any device always see up-to-date rankings
- Scores are instantly reflected as the admin updates them during each event
- Rank badges (🥇 🥈 🥉) highlight the top 3 squads dynamically

### 🔒 Admin Panel (`admin.html`)
- Secure login with **SHA-256 password hashing** and constant-time comparison (timing-attack safe)
- **Score control console** — add/subtract points per squad per event with live preview
- **Batch score sync** — update all 11 squads at once from a single payload
- **Score reset** — reset all squads to 0 PTS with one click
- **Score Audit Log** — full history of every score change (who changed it, by how much, for which event)
- **Registration viewer** — searchable & filterable list of all registered delegates

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3 (Glassmorphism + Dark Mode), Vanilla JavaScript |
| **3D Effects** | Three.js (animated glass prism background) |
| **Fonts** | Fraunces, Outfit, Plus Jakarta Sans, JetBrains Mono (Google Fonts) |
| **Backend** | Django 4.x + Django REST Framework |
| **Database** | PostgreSQL (production) · SQLite (local dev) |
| **Auth** | SHA-256 + HMAC constant-time comparison |
| **Deployment** | Vercel (frontend) · Render (backend) |
| **Sheets Sync** | Google Apps Script (`google_sheets_sync_script.gs`) |

---

## 📁 Project Structure

```
inspire-main/
├── index.html                      # Main public-facing site
├── admin.html                      # Admin scoring panel
├── demo-site.html                  # Demo/preview version
├── google_sheets_sync_script.gs    # Google Sheets sync script
├── render.yaml                     # Render deployment config
├── inspire_backend/                # Django REST API
│   ├── api/
│   │   ├── models.py               # Squad, Registration, EventTrack, ScoreAuditLog
│   │   ├── views.py                # API endpoints
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── inspire_project/
│   │   └── settings.py
│   └── requirements.txt
└── *.jpg / *.png                   # Team & coordinator photos
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/scores/` | Fetch live leaderboard standings |
| `POST` | `/api/scores/update/` | Update squad score (single or batch) |
| `POST` | `/api/scores/reset/` | Reset all squad scores to 0 |
| `POST` | `/api/register/` | Submit delegate registration |
| `GET` | `/api/registrations/` | List all registrations (with filters) |
| `POST` | `/api/admin/login/` | Authenticate admin credentials |
| `GET` | `/api/events/` | Fetch all 14 competition tracks |

---

## 📚 Setup Guides

- 📄 [Django Backend Setup](./DJANGO_BACKEND_SETUP_GUIDE.md)
- 📄 [Google Sheets Sync Setup](./GOOGLE_SHEETS_SETUP_GUIDE.md)
- 📄 [Render Deployment Guide](./RENDER_DEPLOYMENT_GUIDE.md)

---

## 🧑‍💻 Made with ❤️ for St. Claret College · Inspire 2026
