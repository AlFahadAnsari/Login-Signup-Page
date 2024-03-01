let signIn = document.getElementById('signin');
let signUp = document.getElementById('signup');let nameF=document.getElementById('name');
let underline = document.getElementById('underline');
let h1=document.getElementById('h1');
let namediv=document.getElementById('namediv');
let span=document.getElementById('spn');


signIn.addEventListener('click',()=>{
    signUp.classList.add('disable')
    signIn.classList.remove('disable')
    h1.innerHTML='Sign In'
    underline.style.transform='translatex(35px)'
    namediv.style.display='none'
    span.innerHTML='Reset Password'
})


signUp.addEventListener('click',()=>{
    signIn.classList.add('disable')
    signUp.classList.remove('disable')
    h1.innerHTML='Sign Up'
    underline.style.transform='translatex(0px)'
    namediv.style.display='block'
    span.innerHTML='Suggest Password'

})