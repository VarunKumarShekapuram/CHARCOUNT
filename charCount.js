const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
  var remaining = 50 - textInput.value.length;
  charCount.textContent = `${remaining} characters remaining`;
});
