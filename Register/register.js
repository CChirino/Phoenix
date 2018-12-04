var pwd = document.getElementsByClassName('pwd');
var eye = document.getElementById('eye');

eye.addEventListener('click',togglePass);

  function togglePass(){
    eye.classList.toggle('active');

    for (i=0;i<pwd.length;i++) {
      (pwd[i].type=='password') ? pwd[i].type = 'text':
      pwd[i].type = 'password';
    }

  }