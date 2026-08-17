# SETUP GOOGLE SHEETS SYNC

## Step 1: Buat Google Sheet baru
- Buka Google Sheets, buat spreadsheet baru
- Kasih nama "Garden Dashboard Data" (atau apa aja)

## Step 2: Buka Apps Script
- Di Google Sheet, klik Extensions > Apps Script
- Hapus semua kode default, paste kode di bawah:

```javascript
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getRange("A1").getValue();
  return ContentService.createTextOutput(data || "{}").setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  sheet.getRange("A1").setValue(e.postData.contents);
  return ContentService.createTextOutput('{"ok":true}').setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Deploy
- Klik Deploy > New deployment
- Pilih type: "Web app"
- Execute as: "Me"
- Who has access: "Anyone"
- Klik Deploy
- Copy URL-nya

## Step 4: Paste URL di website
- Buka website kamu
- Klik icon gear (settings) di kanan atas
- Paste URL > Save
- Done! Data otomatis sync.
