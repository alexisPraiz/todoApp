/*---==== Overflow: Start ====---*/
document.querySelectorAll('.check').forEach(box =>{
    box.addEventListener('change',(e)=>{
        if(box.id == 'all'){
            document.querySelector('.all').style = 'transform: translateX(0)';
            document.querySelector('.active').style = 'transform: translateX(0)';
            document.querySelector('.completed').style = 'transform: translateX(0)';
        }else if(box.id == 'active'){
            document.querySelector('.all').style = 'transform: translateX(-100%)';
            document.querySelector('.active').style = 'transform: translateX(-100%)';
            document.querySelector('.completed').style = 'transform: translateX(-100%)';
        }else if(box.id == 'completed'){
            document.querySelector('.all').style = 'transform: translateX(-200%)';
            document.querySelector('.active').style = 'transform: translateX(-200%)';
            document.querySelector('.completed').style = 'transform: translateX(-200%)';
        }
    });
});
/*---==== Overflow: End ====---*/

/*---==== Add homework: Start ====---*/
let add;
let ul;
let i = 0;

document.querySelectorAll('.btn_add').forEach(btn =>{ 
    btn.addEventListener('click',()=>{
         if(btn.classList.contains('homework')){
             add = document.querySelector('.add_homework').value;
             ul  = document.querySelector('.homework_list');
             
         }else if(btn.classList.contains('active_btn')){
            add = document.querySelector('.add_active').value;
            ul  = document.querySelector('.active_list');
         }

         if(add != ""){
            const li    = document.createElement('LI');
            const input = document.createElement('INPUT');
            const text  = document.createElement('P');
        
            input.setAttribute('type','checkbox');
            input.classList.add('checkbox');
            text.textContent = add;
        
            li.appendChild(input);
            li.appendChild(text);
        
            ul.appendChild(li);
            i++;
            localStorage.setItem(`homework${i}`,add);
        }
    });
});
/*---==== Add homework: End ====---*/

/*---==== Deleted homework: Start ====---*/
document.querySelectorAll('.list_element').forEach(icon =>{
    icon.addEventListener('click',(e)=>{
        let child = e.target;
        document.querySelector('.completed_list').removeChild(child);
    });
});

/*Falta mejorar esto y agregar más funcionalidades, en un futuro lo haré*/
/*---==== Deleted homework: End ====---*/