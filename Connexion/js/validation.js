document.addEventListener('DOMContentLoaded', function() {
    let signUpBtn = document.querySelector('.signupbtn');
    let signInBtn = document.querySelector('.signinbtn');
    let nameField = document.querySelector('.namefield');
    let title = document.querySelector('.title');
    let underline = document.querySelector('.underline');

    signInBtn.addEventListener('click', () => {
        nameField.style.maxHeight = '0';
        title.innerHTML = 'Login Ici';
        signUpBtn.classList.add('disable');
        signInBtn.classList.remove('disable');
        underline.style.transform = 'translateX(35px)';
    });

    signUpBtn.addEventListener('click', () => {
        nameField.style.maxHeight = '80px';
        title.innerHTML = 'Inscription';
        signUpBtn.classList.remove('disable');
        signInBtn.classList.add('disable');
        underline.style.transform = 'translateX(0)';
    });

    function validate() {
        let isValid = true;

        const emailField = document.querySelector('input[name="email"]');
        const passwordField = document.querySelector('input[name="password"]');
        
        const emailError = document.getElementById('email_error');
        const passwordError = document.getElementById('password_error');
        
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.style.display = 'block';
            isValid = false;
        }

         if (passwordField.value.length < 6) {
            passwordError.style.display = 'block';
            isValid = false;
        }
        return isValid;
    }

    signUpBtn.addEventListener('click', function() {
        if (validate()) {
             alert('Inscription réussie');
             nameField.style.maxHeight = '0';
             title.innerHTML = 'Login Ici';
             signUpBtn.classList.add('disable');
             signInBtn.classList.remove('disable');
             underline.style.transform = 'translateX(35px)';
        }
    });


signInBtn.addEventListener('click', function() {
       if (validateLogin()) {
        document.getElementById('login_form').submit();
        //window.location.href = 'home.html';
    }
});

    const loginForm = document.querySelector('.login_form');
        loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
       
                if (validate()) {
                setTimeout(function() {
                window.location.href = 'home.html';
            }, 3000);
        }
    });
});
