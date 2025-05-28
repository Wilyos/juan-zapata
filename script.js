let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let contacto = document.querySelector('#btn-contacto');
let sobreMi = document.querySelector('#btn-sobreMi')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


contacto.onclick = () => {
    document.getElementById("contacto").scrollIntoView({
        behavior:"smooth"
    });
}


sobreMi.onclick = () => {
    document.getElementById("sobreMi").scrollIntoView({
        behavior:"smooth"
    });
}

const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:Juan Fernando Zapata
ORG:Sierra Pattin Seguros
TEL;TYPE=CELL:+573217151286
EMAIL:juanzapata@sierraseguros.com 
END:VCARD
  `.trim();



  const blob = new Blob([vcardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById('downloadContact');
  downloadLink.href = url;

 // formulario
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this));
  const res = await fetch('https://sierra-seguros-back.onrender.com/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (res.ok) {
    alert('Mensaje enviado correctamente');
    this.reset();
  } else {
    alert('Error enviando mensaje');
  }
});