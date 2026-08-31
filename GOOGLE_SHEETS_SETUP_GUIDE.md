# 📊 INSPIRE 2026 — Google Sheets Live Connection & Automated Pass Email Dispatch Guide

Follow this quick **2-minute setup** to link your registration form (including the **11 Competing Squads Selection**) to your Google Sheet and **automatically email official Digital Delegate Entry Passes to each registered student directly from your Gmail account**.

---

### 🔹 Step 1: Open Your Google Sheet
1. Open your existing spreadsheet (e.g. **`Inspire 2026 Registrations`**) or create a new one at [https://sheets.new](https://sheets.new).

---

### 🔹 Step 2: Open Apps Script
1. In the Google Sheet top menu bar, click: **Extensions** ➔ **Apps Script**.
2. A new editor window will open.
3. Delete any default or old code inside `Code.gs`.

---

### 🔹 Step 3: Paste the Updated Connector Script
1. Open the file [`google_sheets_sync_script.gs`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/google_sheets_sync_script.gs) in your project folder.
2. Copy its entire content and **paste it into the Apps Script editor**.
3. Click the **💾 Save** icon (or press `Ctrl + S`).

---

### 🔹 Step 4 (OPTIONAL BUT RECOMMENDED): Test Email Sending in 1 Click!
1. In the top toolbar of Apps Script, find the function dropdown (where it says `doPost` or `myFunction`).
2. Select **`testSendEmail`** from the dropdown.
3. Click the **▶️ Run** button.
4. Click **Review permissions** ➔ Choose your Google Account ➔ Click **Advanced** ➔ Click **Go to Inspire 2026 (unsafe)** ➔ Click **Allow**.
5. Check your personal Gmail inbox — you will immediately see an official Inspire 2026 Delegate Pass email!

---

### 🔹 Step 5: Deploy as Web App
1. In the top-right corner of the Apps Script window, click the blue **Deploy** button.
   - **If you already deployed before**:
     - Click **Manage deployments** ➔ Click the **✏️ Edit (pencil)** icon on your active deployment ➔ Under *Version*, select **New version** ➔ Click **Deploy**.
   - **If deploying for the first time**:
     - Click **New deployment** ➔ Click the ⚙️ **gear icon** next to "Select type" and choose **Web app**.
     - Set **Description**: `Inspire 2026 Registration & Pass Email Dispatch`
     - Set **Execute as**: `Me (your_email@gmail.com)` *(⚠️ This ensures all pass emails are sent from YOUR mail ID)*
     - Set **Who has access**: **`Anyone`** *(⚠️ IMPORTANT: Choose "Anyone" so students can submit registrations without needing Google login).*
     - Click **Deploy**.
2. Copy the **Web App URL** shown in the confirmation window (it looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### 🔹 Step 6: Paste Web App URL into `index.html`
1. Open [`index.html`](file:///c:/Users/Dell/OneDrive/Desktop/inspireeee/index.html) and verify `GOOGLE_SHEETS_WEB_APP_URL`:
   ```javascript
   const GOOGLE_SHEETS_WEB_APP_URL = "PASTE_YOUR_COPIED_URL_HERE";
   ```
2. Paste your URL inside the quotes and save the file.

---

### 🎟️ What Happens When a Student Registers?
1. **Google Sheets Logged**: Registration row is instantly added to your spreadsheet.
2. **Automated Pass Email Dispatched**: The student immediately receives an official, high-resolution HTML Delegate Entry Pass in their inbox:
   - Sent from **your mail ID** (with sender name: *Inspire 2026 Organizing Desk*).
   - Contains unique **Pass ID** (e.g. `INS-2026-8491`), **Track name**, **Assigned Squad (11 Teams)**, **Roll Number**, **Year/Class/Section**, **Venue & Reporting Time**, and **Important Guidelines**.
3. **Delivery Status Tracked**: Column 13 in your Google Sheet shows `Sent Successfully (HH:MM:SS)` or status logs.

---

### ✅ Automatic Sheet Columns Created:
When registrations are submitted, the sheet maintains the following columns:
1. **Timestamp (IST)**
2. **Pass ID**
3. **Competition Track**
4. **Assigned Squad / Team (11 Teams)** *(e.g. `Team 01 · TEAM CHRONIX`)*
5. **Sub-Squad / Duo Alias** *(e.g. `Duo Alpha` or squad name)*
6. **Participant Name(s)**
7. **Mobile / WhatsApp**
8. **College Email ID**
9. **Academic Year**
10. **Class / Course**
11. **Section**
12. **Roll Number**
13. **Email Pass Status** *(e.g. `Sent Successfully (14:45:10)`)*


