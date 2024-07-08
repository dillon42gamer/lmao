
// Fetch the user's IP address and log it to the server
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        console.log('Your IP address is ' + data.ip);
        // Send the IP address to the server
        fetch('save_ip.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: data.ip })
        });
    })
    .catch(error => console.error('Error fetching IP:', error));

// Check if the user has logged in this session
if (!sessionStorage.getItem('loggedIn')) {
    window.location.href = 'index.html'; // Redirect to the login page if not logged in
}
