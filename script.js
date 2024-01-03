const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const loginButton = document.querySelector('button');
const count = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const submit = document.querySelector('#submit-btn');
const forms = document.querySelector('#evaluation-form');

// Valores dos campos do form
function getFormsValues() {
  const firstName = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjects = Array.from(document.querySelectorAll('.subject:checked'))
    .map((subject) => subject.value).join(', ');
  const rating = document.querySelector('input[name="rate"]:checked').value;
  const comment = document.getElementById('textarea').value;
  return { comment, rating, subjects, family, house, firstName, lastName, email };
}

textarea.addEventListener('input', () => {
  count.innerText = 500 - textarea.value.length;
});

function loginValidate(event) {
  event.preventDefault();

  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

loginButton.addEventListener('click', loginValidate);

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});

submit.addEventListener('click', (event) => {
  event.preventDefault();

  const { comment, rating, subjects, family, house, firstName, lastName, email } = getFormsValues();

  forms.style.display = 'none';

  const formDataElement = document.querySelector('#form-data');

  formDataElement.innerHTML = `
    <p>Nome: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Casa: ${house}</p>
    <p>Família: ${family}</p>
    <p>Matérias: ${subjects}</p>
    <p>Avaliação: ${rating}</p>
    <p>Observações: ${comment}</p>
  `;
  formDataElement.style.display = 'flex';
});
