document.getElementById('lookupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Gantilah URL API dengan URL API yang sesuai
    const apiUrl = `https://example.com/api/lookup?phone=${encodeURIComponent(phoneNumber)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `
                <h2>Lookup Result</h2>
                <p><strong>Phone Number:</strong> ${data.phone}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Location:</strong> ${data.location}</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
