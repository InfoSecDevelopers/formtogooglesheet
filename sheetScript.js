function doGet(e) {
  var lock = LockService.getPublicLock();
  lock.waitLock(10000);

  try {
    var name = e.parameter.name;
    var email = e.parameter.email;
    var subject = e.parameter.subject;
    var message = e.parameter.message;

    var currentTime = new Date().toLocaleString();

    var ss = SpreadsheetApp.openById('1mUKLrI9VMw8Z5v_ClifNOJvwx7RB0J2uIgVG1Ez5rjI');
    var sheet = ss.getSheetByName('Contact Us');

    var rowContent = sheet.appendRow([currentTime, name, email, subject, message]);

    var nextRow = sheet.getLastRow() + 1;

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'fail', row: e }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }

}
