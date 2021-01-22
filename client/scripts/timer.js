const time = document.getElementById('timer');
let myTime = localStorage.getItem('time') ||'00:30:00';
document.getElementById('timer').innerText = myTime;
let isEnd = false;
if(myTime === 'Completed'){
    isEnd = true;
    document.body.removeChild(document.getElementById('root'));
    document.querySelector('.cap').classList.remove('none');
    document.querySelector('.controls').style.opacity = '0';
}
function myTimer(){
    if (!isEnd) {
        let h = parseInt(myTime.split(":")[0]);
        let m = parseInt(myTime.split(":")[1]);
        let s = parseInt(myTime.split(":")[2]);
        if (s-1<0) {
            if (m-1<0) {
                if (h-1<0) {
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
                document.body.removeChild(document.getElementById('root'));
                document.querySelector('.cap').classList.remove('none');
                document.querySelector('.controls').style.opacity = '0';
                localStorage.setItem('time','Completed');
            }else{
                h=h-1;
                m=59;
                s=59;
            }
        }else{
            m=m-1
            s=59;
        }
    }else{s=s-1}
    isEnd?clearInterval(timer):null;
    h<10?h = `0${h}`:h;
    m<10?m = `0${m}`:m;
    s<10?s = `0${s}`:s;
    myTime = [h,m,s].join(':');
    time.innerHTML = myTime;
    localStorage.setItem('time',myTime)
}
}
let timer = setInterval(myTimer,1000)