// Funksioni krijon formularin bazuar ne checkbox-et qe zgjedh perdoruesi
function createForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = ''; // Pastrimi i formes ekzistuese

    // Fshihet error msg kur krijohet nje formular i ri
    document.getElementById('error-message').style.display = 'none';

    // Fshihet butoni 'Generate Form' dhe shfaqet butoni 'Bring Me Back to Beginning'
    document.getElementById('generate-form-button').style.display = 'none';
    document.getElementById('bring-back-button').style.display = 'block';

    // Krijo form
    const form = document.createElement('form');
    form.id = 'dynamicForm';

    // Kontrollon se cilat checkbox-e jane bere select dhe krijon fushat perkatese
    if (document.getElementById('text').checked) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Enter text';
        textInput.required = true; // Fusha e detyrueshme
        form.appendChild(textInput);
    }
    if (document.getElementById('textarea').checked) {
        const textareaInput = document.createElement('textarea');
        textareaInput.placeholder = 'Enter description';
        textareaInput.required = true; // Fusha e detyrueshme
        form.appendChild(textareaInput);
    }
    if (document.getElementById('number').checked) {
        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.placeholder = 'Enter number';
        numberInput.required = true; // Fusha e detyrueshme
        form.appendChild(numberInput);
    }
    if (document.getElementById('date').checked) {
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.required = true; // Fusha e detyrueshme
        form.appendChild(dateInput);
    }
    if (document.getElementById('email').checked) {
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter email';
        emailInput.required = true; // Fusha e detyrueshme
        form.appendChild(emailInput);
    }

    // Butoni CLEAR form 
    const clearButton = document.createElement('button');
    clearButton.type = 'button';
    clearButton.innerText = 'Clear Data';
    clearButton.onclick = () => form.reset(); // Pastron formularin
    form.appendChild(clearButton);

    // Butoni Shfaq te dhenat
    const displayButton = document.createElement('button');
    displayButton.type = 'button';
    displayButton.innerText = 'Show Data';
    displayButton.onclick = () => displayData(form); // Funksioni ->> shfaq të dhënat
    form.appendChild(displayButton);

    formContainer.appendChild(form); // Shtimi i formularit ne container
}

// Funksioni ->>shfaq te dhenat qe jae futur
function displayData(form) {
    const resultDiv = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    resultDiv.innerHTML = ''; // Pastron rez e meparshem

    const inputs = form.querySelectorAll('input, textarea');
    let allFieldsFilled = true;

    // Kontrollon nqs all fields jane te plotsuara
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFieldsFilled = false; //nqs 1 fushe eshte bosh do nxjerre error message 
        }
    });

    if (allFieldsFilled) {
        errorMessage.style.display = 'none'; // Heq mesazhin e gabimit nqs fushat jane plotsuar
        inputs.forEach(input => {
            const p = document.createElement('p');
            p.textContent = `${input.placeholder || 'Date'}: ${input.value}`;
            resultDiv.appendChild(p); // Shfaq te dhenat e futura 
        });
    } else {
        errorMessage.style.display = 'block'; // Tregon mesazhin e gabimit nqs fusha is empty
    }
}

// Reset to begininning 
function resetToBeginning() {
    // Zhbllokon te gjitha checkbox-et
    document.getElementById('text').checked = false;
    document.getElementById('textarea').checked = false;
    document.getElementById('number').checked = false;
    document.getElementById('date').checked = false;
    document.getElementById('email').checked = false;

    // Clear form , result
    document.getElementById('form-container').innerHTML = '';
    document.getElementById('result').innerHTML = '';

    // Fshihet error msg 
    document.getElementById('error-message').style.display = 'none';

    // Fshihet butoni 'Bring Me Back to Beginning' dhe shfaqet butoni 'Generate Form'
    document.getElementById('bring-back-button').style.display = 'none';
    document.getElementById('generate-form-button').style.display = 'block';
}