

document.getElementById('cancel').addEventListener('click',()=>{
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
document.getElementById('submit').addEventListener('click',()=>{
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