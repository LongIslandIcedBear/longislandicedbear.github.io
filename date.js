function updateDateTime() {
    const options = { weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'America/Toronto' };
    let now = new Date().toLocaleString('en-US', options).replace(',', '');
    
    // Capitalize the weekday and month
    now = now.replace(/\b\w{3}\b/g, function(txt) {
        return txt.toUpperCase();
    });

    // Remove any commas
    now = now.replace(/,/g, '');

    // Remove space between time and AM/PM
    now = now.replace(/ (\d{2}:\d{2}) (AM|PM)/, ' $1$2');

    document.getElementById('datetime').textContent = now;
}

updateDateTime();
setInterval(updateDateTime, 60000); // Update every minute