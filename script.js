document.addEventListener('DOMContentLoaded', function() {
    const mySaveButton = document.getElementById('mySaveButton');
    const myJournalEntry = document.getElementById('myJournalEntry');
    const myJournalEntries = document.getElementById('myJournalEntries');
  
    mySaveButton.addEventListener('click', function() {
      const myEntryText = myJournalEntry.value.trim();
      if (myEntryText !== '') {
        const myEntryDiv = document.createElement('div');
        myEntryDiv.className = 'myEntry';
        myEntryDiv.textContent = myEntryText;
        myJournalEntries.appendChild(myEntryDiv);
        myJournalEntry.value = '';
        myJournalEntry.focus();
      }
    });
  });
  