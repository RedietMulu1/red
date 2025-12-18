const menu= document.querySelector('#mobile-menu');
const menulinks=document.querySelector('.navbar__menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});
const signupbtn=document.getElementById('signupbtn');
if(signupbtn) {
signupbtn.addEventListener('click',function (event){
    event.preventDefault();
    alert('sign up feature is coming soon.this is a demo button. this is actually fake:)');});
}
