document.getElementById('button_add').onclick = function() {
    var text_input = document.getElementById ('input_tarefa').value;
    var new_task = '<div id="tarefas"><span>'+ text_input +'</span><button id="deletar">Del</button></div>';

    if (text_input.value == 0){
        window.alert='Digite sua tarefa';
    }else {
        document.getElementById('novas_tarefas').innerHTML += new_task;
    }

    var numero_de_tarefas = document.querySelectorAll('#deletar');
    
    for (let index = 0; index < numero_de_tarefas.length; index++) 
    numero_de_tarefas[index].onclick = function() {
        this.parentNode.remove()
    }
}

document.getElementById('button_add').onclick = function() {
    var text_input = document.getElementById ('input_tarefa').value;
    var new_task = '<div id="tarefas"><span>'+ text_input +'</span><button id="deletar">Del</button></div>';

    if (text_input.value == 0){
        window.alert='Digite sua tarefa';
    }else {
        document.getElementById('novas_tarefas').innerHTML += new_task;
    }

    var numero_e_tarefas = document.querySelectorAll('#deletar');
    
    for (let index = 0; index < numero_de_tarefas.length; index++) 
    numero_de_tarefas[index].onclick = function() {
        this.parentNode.remove()
    }
}

document.getElementById('button_add').onclick = function() {
    var text_input = document.getElementById ('input_tarefa').value;
    var new_task = '<div id="tarefas"><span>'+ text_input +'</span><button id="deletar">Del</button></div>';

    if (text_input.value == 0){
        window.alert='Digite sua tarefa';
    }else {
        document.getElementById('novas_tarefas').innerHTML += new_task;
    }

    var numero_de_tarefas = document.querySelectorAll('#deletar');
    
    for (let index = 0; index < numero_de_tarefas.length; index++) 
    numero_de_tarefas[index].onclick = function() {
        this.parntNode.remove()
    }
}

document.getElementById('button_add').onclick = function() {
    var text_input = document.getElementById ('input_tarefa').value;
    var new_task = '<div id="tarefas"><span>'+ text_input +'</span><button id="deletar">Del</button></div>';

    if (text_input.value == 0){
        windowalert='Digite sua tarefa';
    }else {
        document.getElementById('novas_tarefas').innerHTML += new_task;
    }

    var numero_de_tarefas = document.querySelectorAll('#deletar');
    
    for (let index = 0; index < numero_de_tarefas.length; index++) 
    numero_de_tarefas[index].onclick = function() {
        this.parentNode.remove()
    }
}
