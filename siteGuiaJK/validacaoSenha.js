const senhaInput = document.getElementById('senha');

senhaInput.addEventListener('mouseover', () => {
  senhaInput.setCustomValidity('Sua senha precisa conter pelo menos 8 caracteres, incluir letras maiúsculas e minúsculas, e não pode ter sequências numéricas.');
});

senhaInput.addEventListener('input', () => {
  if (senhaInput.validity.patternMismatch) {
    senhaInput.setCustomValidity('Sua senha precisa conter pelo menos 8 caracteres, incluir letras maiúsculas e minúsculas, e não pode ter sequências numéricas.');
  } else {
    senhaInput.setCustomValidity('');
  }
});