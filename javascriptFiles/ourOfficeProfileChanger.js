




document.addEventListener('mouseenter', function(){
    if (event.target.className === 'staff-card') {
        event.target.style.borderRadius = '50%';
    }
});

document.addEventListener('mouseleave', function(){
    if (event.target.className === 'staff-card') {
        event.target.style.backgroundColor = 'blue';
    }
});