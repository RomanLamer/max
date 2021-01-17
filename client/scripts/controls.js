const current = document.getElementById('current_page');
document.getElementById('next').addEventListener('click',()=>{
    try{
        let index = parseInt(current.innerHTML);
        index ++;
        document.querySelectorAll('.question').forEach(e=>{
            e.classList.add('none');
        })
        document.querySelectorAll('.question')[index-1].classList.remove("none");
        current.innerHTML = index;
    }catch(err){
        let index = parseInt(current.innerHTML);
        document.querySelectorAll('.question')[index-1].classList.remove("none");
    }
})
document.getElementById('previous').addEventListener('click',()=>{
    try{
        let index = parseInt(current.innerHTML);
        index --;
        document.querySelectorAll('.question').forEach(e=>{
            e.classList.add('none');
        })
        document.querySelectorAll('.question')[index-1].classList.remove("none");
        current.innerHTML = index;
    }catch(err){
        let index = parseInt(current.innerHTML);
        document.querySelectorAll('.question')[index-1].classList.remove("none");
    }
})

document.getElementById('stop').addEventListener('click',()=>{

})