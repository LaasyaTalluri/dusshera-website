document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const danceType = document.getElementById('dance-type').value;
    const experience = document.getElementById('experience').value;

    // Show an alert or handle the data as needed
    alert(`Thank you, ${name}! You have registered for the Cultural Dance Performances.\nEmail: ${email}\nDance Type: ${danceType}\nExperience Level: ${experience}`);
    
    // Optionally reset the form
    this.reset();
});
