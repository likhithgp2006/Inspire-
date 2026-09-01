# 📊 INSPIRE 2026 — Google Cloud Real-Time Leaderboard & Registration Sync Guide

This guide explains how to connect your **Inspire 2026 Admin Portal (`admin.html`)** and **Public Website (`index.html`)** with **Google Apps Script** to achieve **100% real-time, cross-device live scoring synchronization** across all student phones, laptops, and auditorium projector screens.

---

## ⚡ How Live Scoring Sync Works Across Devices:
1. **Admin Portal (`admin.html`)**: When you award points, change scores, allocate bulk points, or set podium winners, it immediately broadcasts the updated scores to Google Cloud.
2. **Student & Spectator Devices (`index.html`)**: Every student phone, computer, and projector screen automatically fetches and synchronizes the live points every 5 seconds.
3. **Google Sheets Leaderboard Tab**: A formatted **"Leaderboard"** sheet in your Google Spreadsheet is automatically updated with the latest scores and squad ranks!
4. **Student Registrations**: Student registrations continue to append automatically to the **"Registrations"** sheet.

---

### 🔹 Step 1: Open Your Google Spreadsheet
1. Open your existing spreadsheet: [https://sheets.new](https://sheets.new) (or your Inspire 2026 Google Sheet).

---

### 🔹 Step 2: Open Apps Script Editor
1. In the Google Sheet top menu bar, click: **Extensions** ➔ **Apps Script**.
2. A new editor window will open.
3. Replace all existing code in `Code.gs` with the code from [`google_sheets_sync_script.gs`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/google_sheets_sync_script.gs).
4. Click the **💾 Save** icon (or press `Ctrl + S`).

---

### 🔹 Step 3: Deploy as Web App
1. In the top-right corner of the Apps Script window, click the blue **Deploy** button.
   - **If updating an existing deployment**:
     - Click **Manage deployments** ➔ Click the **✏️ Edit (pencil)** icon on your active deployment ➔ Under *Version*, select **New version** ➔ Click **Deploy**.
   - **If deploying for the first time**:
     - Click **New deployment** ➔ Click the ⚙️ **gear icon** next to "Select type" and choose **Web app**.
     - Set **Description**: `Inspire 2026 Live Leaderboard & Registrations Sync`
     - Set **Execute as**: `Me (your_email@gmail.com)`
     - Set **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Choose "Anyone" so all devices can sync scores and submit registrations).*
     - Click **Deploy**.
2. Copy the **Web App URL** shown in the confirmation window (it looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### 🔹 Step 4: Verify Web App URL in Code
Both [`index.html`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/index.html) and [`admin.html`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/admin.html) already have your Google Apps Script endpoint configured:
```javascript
const GOOGLE_SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxRGYUj04rvaQeBA9iAk878Upr6Xd8AQB9a9vwiRsItySnhxJ0Tv54C5lnAVd9r388pCg/exec";
```

---

## 🏆 Testing Live Synchronization Across Multiple Devices:
1. Open [`admin.html`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/admin.html) on Device A (e.g. Admin Laptop).
2. Open [`index.html`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/index.html) on Device B (e.g. Mobile Phone or another browser window).
3. In `admin.html`, award points to any squad (e.g. **Team 01 · TEAM CHRONIX** +100 pts) or click **"Sync Cloud"**.
4. Within 5 seconds, watch Device B (`index.html`) automatically update its **Podium**, **Championship Standings**, and **Live Score Badges** in real time without refreshing!


