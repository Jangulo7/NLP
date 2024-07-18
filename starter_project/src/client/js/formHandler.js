function handleSubmit(event) {
    event.preventDefault();

    // Check what text was out into the form field
    let formText = document.getElementById('name').value
    const resultVar = document.getElementById(results)

    // Condition
    if (Client.checkForName(formText)){
        fetch('http://localhost:8080/dataAnalyze',
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formText})
        })
    .then(response => response.json())
        .then(function(response) {
            const target = document.getElementById('target');
            target.innerHTML =    `
                                <p>Score tag:  <span>${response.score_tag}</span></p>
                                <p>Agreement:  <span>${response.agreement}</span></p>
                                <p>Subjectivity:  <span>${response.subjectivity}</span></p>
                                <p>Confidence:  <span>${response.confidence}</span></p>
                                `;
            resultContainer.className = "result-api";
            const paragraph = document.createElement('pre');
            resultContainer.appendChild(paragraph);
            paragraph.innerHTML = JSON.stringify(response, null, 4);
        })
        .catch(error => console.log(`Error: ${error}`));

    } else {
        alert('Please, include a valid url.');
    }
}

export { handleSubmit }