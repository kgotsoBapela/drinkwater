const smallcups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallcups.forEach((cup, idx) =>{
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx){
    if(smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full') ){
        idx--;
    }
    smallcups.forEach((cup, ind) =>{
        if (ind <= idx ) {
            cup.classList.add('full');
        }
        else{
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

function updateBigCup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallcups.length;

    if(fullcups === 0 ){
        percentage.style.visibility = 'hidden'
        percentage.height = 0;
    }
    else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullcups / totalCups * 330}px`;
        percentage.innerHTML =  `${fullcups/ totalCups * 100}%`;
    }
    if(fullcups === totalCups ){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else{
        remained.style.visibility = 'visible';
        listers.innerText = `${ 2 - (250 * fullcups/ 1000)}L`

    }
    console.log(fullcups/totalCups);

}
