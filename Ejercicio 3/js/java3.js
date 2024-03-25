const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('Name').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('Email').value;

   
    const para = document.createElement('p');
    para.textContent = `Name: ${name}, apellido: ${apellido}, Email: ${email}`;

    
    output.appendChild(para);

    
    document.getElementById('form').reset();
});



