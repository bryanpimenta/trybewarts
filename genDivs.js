// Inputs de avaliação da trybewarts
const numberOfOptions = 10;
const container = document.getElementById('rating-container');

for (let i = 1; i <= numberOfOptions; i += 1) {
  const div = document.createElement('div');
  div.classList.add('form-check');

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'rate';
  input.value = i;
  input.classList.add('form-check-input');
  input.id = i;

  const label = document.createElement('label');
  label.classList.add('form-check-label');
  label.htmlFor = i;
  label.textContent = i;

  div.appendChild(input);
  div.appendChild(label);
  container.appendChild(div);
}

// Lista de Aprendizados
const subjectsContainer = document.getElementById('subjects-container');
const subjects = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

subjects.forEach((subject, index) => {
  const div = document.createElement('div');
  div.classList.add('form-check');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('subject', 'form-check-input');
  input.name = 'subject';
  input.id = `sub${index + 1}`;
  input.value = subject;

  const label = document.createElement('label');
  label.classList.add('form-check-label');
  label.htmlFor = `sub${index + 1}`;
  label.textContent = subject;

  div.appendChild(input);
  div.appendChild(label);
  subjectsContainer.appendChild(div);
});
