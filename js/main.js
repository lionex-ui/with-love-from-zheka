document.getElementById('mouse').addEventListener('click', () => {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    });
});
document.getElementById('btn_next').addEventListener('click', () => {
    if (num < 7) {
        num += 1
        document.querySelector('#numberQuestions').innerHTML = 'Вопрос ' + num + ' из 6';
        changeContent()
    };
}
);
document.getElementById('btn_prev').addEventListener('click', () => {
    if (num > 1) {
        num -= 1
        document.querySelector('#numberQuestions').innerHTML = 'Вопрос ' + num + ' из 6';
        changeContent()
    }
}
);

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
})
document.querySelector('#btn_download').addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = 'block';
})
document.querySelector('#btn_call').addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = 'block';
})
$(document).ready(function(){
    $('.header__slider').slick({
        dots: true,
    });
});

let num = 1;
let changeContent = () => {
    switch (num) {
        case 1:
            document.getElementById('case1').style.display = 'block';
            document.getElementById('case2').style.display = 'none';
            document.getElementById('progress').style.width = '12.4%';
            break;
        case 2:
            document.getElementById('case1').style.display = 'none';
            document.getElementById('case2').style.display = 'block';
            document.getElementById('case3').style.display = 'none';
            document.getElementById('progress').style.width = '28.4%';
            break;
        case 3:
            document.getElementById('case2').style.display = 'none';
            document.getElementById('case3').style.display = 'block';
            document.getElementById('case4').style.display = 'none';
            document.getElementById('progress').style.width = '40.8%';
            break;
        case 4:
            document.getElementById('case3').style.display = 'none';
            document.getElementById('case4').style.display = 'block';
            document.getElementById('case5').style.display = 'none';
            document.getElementById('progress').style.width = '53.2%';
            break;
        case 5:
            document.getElementById('case4').style.display = 'none';
            document.getElementById('case5').style.display = 'block';
            document.getElementById('case6').style.display = 'none';
            document.getElementById('progress').style.width = '65.4%';
            break;
        case 6:
            document.getElementById('case5').style.display = 'none';
            document.getElementById('case6').style.display = 'block';
            document.getElementById('case7').style.display = 'none';
            document.getElementById('progress').style.width = '77.8%';
            break;
        case 7:
            document.getElementById('case6').style.display = 'none';
            document.getElementById('case7').style.display = 'block';
            document.getElementById('progress').style.width = '100%';
            document.querySelector('#numberQuestions').innerHTML = 'Последний шаг';
            break;
    }
}