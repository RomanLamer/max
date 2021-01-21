function template(header,answerCount,answers,index){
    let answersHTML = ``;
    for(let i = 0;i < answerCount;i++){
        answersHTML+=`<div class="question__answers--item">
        <label class="radio">
        <input type="radio" name="answer${index}">
        ${answers[i]}
        </label>
    </div>`
    }
    return `<div class="question">
        <h1 class="question__header">${header}</h1>
        <p class="question__underheader">Please select 1 option</p>
        <div class="question__answers">
            ${answersHTML}
        </div>
    </div>`
}

window.addEventListener('load',async ()=>{
    const data = await (await fetch('getData')).json();
    if (data) {
    const answers = data.answers.length;
    for(let i = 0;i < answers;i++){
        document.getElementById('root').innerHTML+=template(data.answers[i].questionId,data.answers[i].answers.length,data.answers[i].answers,i);
    }
}        
})