let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt');


menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента
// Добавляем новый li, с классом и текстом
menuItemLi = document.createElement('li');
menuItemLi.classList.add("menu-item");
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);  

// Меняем фон
document.body.style.background = "url('../homework/img/apple_true.jpg')";

//меняем заголовок
title.textContent = "Мы продаем только подлинную технику Apple";

//удаляем рекламу 
adv.remove();


let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptForApple.textContent = yourOpinion;