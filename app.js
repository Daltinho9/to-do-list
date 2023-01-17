  

  document.addEventListener('DOMContentLoaded', function(){

    const task = document.querySelector('#task');
    const submit = document.querySelector('#submit');
    const ul = document.querySelector('ul');
    
    submit.disabled = true;
   
    task.onkeyup = () => {
        if (task.value.length > 0){
        submit.disabled = false;
    }
        else {
        submit.disabled = true;
    }
    };
    

    document.querySelector('form').onsubmit = () => {
       
        const li = document.createElement('li');
        li.innerHTML = task.value;
        ul.append(li);
        task.value = "";
        submit.disabled = true
        return false;
    }
  });