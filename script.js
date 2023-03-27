const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var selectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function(indicator, index){
    indicator.addEventListener('click', function() {
        selectionIndex = index;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (selectionIndex) * -25 + '%)';
    });
});


leftArrow.addEventListener('click', function(){
    selectionIndex = (selectionIndex > 0) ? selectionIndex - 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[selectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (selectionIndex) * -25 + '%)';
})

rightArrow.addEventListener('click', function(){
    selectionIndex = (selectionIndex < 3) ? selectionIndex + 1 : 3;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[selectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (selectionIndex) * -25 + '%)';
})