function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[\W_]/)) strength++;

    switch (strength) {
        case 0:
            feedback.textContent = '';
            feedback.className = '';
            break;
        case 1:
        case 2:
            feedback.textContent = 'Weak';
            feedback.className = 'weak';
            break;
        case 3:
        case 4:
            feedback.textContent = 'Moderate';
            feedback.className = 'moderate';
            break;
        case 5:
            feedback.textContent = 'Strong';
            feedback.className = 'strong';
            break;
    }
}
