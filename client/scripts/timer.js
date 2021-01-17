const time = document.getElementById('timer');
let myTime = '00:30:00' 
document.getElementById('timer').innerText = myTime;
function myTimer(){
    let isEnd = false;
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
                document.getElementById('timer').innerHTML = "completed"
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
}
let timer = setInterval(myTimer,1000)
document.getElementById('pause').addEventListener('click',()=>{
    if (parseInt(document.getElementById('pause').dataset.pause) === 0) {
        clearInterval(timer);
        document.getElementById('pause').innerHTML = `<ion-icon name="caret-forward-outline"></ion-icon>continue`;
        document.getElementById('pause').dataset.pause = '1';
    }else{
        timer = setInterval(myTimer,1000);
        document.getElementById('pause').innerHTML = `<ion-icon style="font-size: 20px;" name="pause-outline" data-pause="0"></ion-icon>pause`;
        document.getElementById('pause').dataset.pause = '0';
    }
})