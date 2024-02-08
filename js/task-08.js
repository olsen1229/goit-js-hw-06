function processLoginForm() {
  const form = document.getElementById("loginForm");
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert("All fields must be filled in.");
    return;
    }
    const formData = {
    email: email,
    password: password,
    };
    
    form.reset();
}

  
  
  
  
