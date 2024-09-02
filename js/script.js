document.addEventListener('DOMContentLoaded', () => {
    const setupElement = document.getElementById('setup');
    const punchlineElement = document.getElementById('punchline');
    const button = document.getElementById('new-joke');

    function fetchJoke() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                setupElement.textContent = data.setup;
                punchlineElement.textContent = data.punchline;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    button.addEventListener('click', fetchJoke);

    // Fetch a joke when the page loads
    fetchJoke();
});
