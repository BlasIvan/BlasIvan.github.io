const child = document.querySelectorAll('.child');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;
    child.forEach(child => {
        const topBox = child.getBoundingClientRect().top;

        if(topBox < triggerBottom){
            child.classList.add('show');
        }else{
            child.classList.remove('show');
        }
    });
}