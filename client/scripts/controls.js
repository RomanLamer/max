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
    let ans = []
    let index = 0;
    document.querySelectorAll('input[type="radio"]').forEach(el=>{
        let testAns = el.checked?el:null;
        if (testAns) {
            index++
            testAns = testAns.closest('label').innerText.trim();
            ans.push({answer:testAns,id:index})
        }
    });
    clearInterval(timer);
    document.getElementById('timer').innerHTML = "completed"
    document.body.removeChild(document.getElementById('root'));
    document.querySelector('.cap').classList.remove('none');
    console.log(ans);
})