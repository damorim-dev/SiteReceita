const modalOverlay = document.querySelector('.modal-Overlay');
const receitas = document.querySelectorAll('.grid-acessos');


for (let receita of receitas){
receita.addEventListener("click",function(){
    modalOverlay.classList.add('active');
    const urlID = receita.querySelector("img").src;
    const nomerec = receita.querySelector('.nome-receita').textContent;
    const autor = receita.querySelector('.autor').textContent;
    modalOverlay.querySelector('img').src=`${urlID}`;
    modalOverlay.querySelector('.nome-receita').textContent=`${nomerec}`;
    modalOverlay.querySelector('.autor').textContent=`${autor}`;
})
}

modalOverlay.querySelector('a').addEventListener("click",function(){
    modalOverlay.classList.remove('active');
})


