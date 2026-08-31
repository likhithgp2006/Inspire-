/**
 * ==============================================================================
 * INSPIRE 2026 — GOOGLE APPS SCRIPT LIVE DATABASE SYNC
 * Department of Computer Science × IT Club · St. Claret College
 * ==============================================================================
 *
 * HOW THIS WORKS:
 * 1. When a student registers on your website, their entry is instantly added to your Google Sheet.
 * 2. Their digital entry pass is generated on-screen immediately for easy saving/screenshotting.
 *
 * SETUP / UPDATE INSTRUCTIONS (Takes 1 minute):
 * 1. Open your Google Spreadsheet: https://sheets.new (or your existing sheet)
 * 2. In the top menu, click: Extensions > Apps Script
 * 3. Replace all existing code in Code.gs with THIS ENTIRE FILE.
 * 4. Click the "Save" (disk) icon (Ctrl + S).
 * 5. Click the blue "Deploy" button (top right) -> "Manage deployments" (or "New deployment")
 *    - If editing existing: Click the pencil icon -> Version: "New version" -> Click "Deploy".
 *    - If new deployment: Select type: "Web app" -> Execute as: "Me" -> Who has access: "Anyone" -> Click "Deploy".
 * 6. Copy the generated "Web App URL" (https://script.google.com/macros/s/.../exec)
 * 7. Paste that URL into index.html and demo-site.html where it says:
 *    const GOOGLE_SHEETS_WEB_APP_URL = "YOUR_URL_HERE";
 * ==============================================================================
 */

// Handles incoming POST requests from the Inspire 2026 registration modal
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // Prevent concurrent write race conditions

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Automatically setup the header row if the sheet is blank
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Timestamp (IST)",
        "Pass ID",
        "Competition Track",
        "Assigned Squad / Team (11 Teams)",
        "Sub-Squad / Duo Alias",
        "Participant Name(s)",
        "Mobile / WhatsApp",
        "Academic Year",
        "Class / Course",
        "Section",
        "Roll Number",
        "Allocated Venue",
        "Event Timing"
      ];
      sheet.appendRow(headers);
      
      // Style Header Row (Corporate Dark Slate background with Emerald text)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#10B981");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Consolas");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Extract Registration Details with fallback defaults
    var squad = data.squad || data.Squad || "Assigned Squad";
    var teamOrAlias = data.teamName || data.team || squad;
    var passId = data.passId || ("INS-2026-" + Math.floor(1000 + Math.random() * 9000));
    var participantNames = data.participants || data.name || "Participant";
    var eventName = data.event || data.Event || "Inspire 2026 Event";
    var phone = data.phone || data.Phone || "N/A";
    var year = data.year || data.Year || "N/A";
    var course = data.course || data.Course || "N/A";
    var section = data.section || data.Section || "N/A";
    var rollNo = data.rollNo || data.rollno || data.RollNo || "N/A";
    var venue = data.venue || "St. Claret College Campus";
    var time = data.time || "Event Day (Sept 10, 2026)";
    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    // Prepare row values
    var row = [
      timestamp,
      passId,
      eventName,
      squad,
      teamOrAlias,
      participantNames,
      phone,
      year,
      course,
      section,
      rollNo,
      venue,
      time
    ];

    sheet.appendRow(row);

    // Format new row
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, row.length).setFontFamily("Arial").setFontSize(10);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Registration recorded successfully!",
      passId: passId,
      squad: squad
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("doPost Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Allows testing the web app GET endpoint directly in browser
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Inspire 2026 Registration Sync Endpoint",
    timestamp: Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss")
  })).setMimeType(ContentService.MimeType.JSON);
}
