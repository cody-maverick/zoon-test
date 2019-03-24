
let cards = document.querySelector('.cards');

const hideMenus = () => {
  let menus = document.querySelectorAll('.card-menu-actions_active');
  menus.forEach(item => {
    item.classList.remove('card-menu-actions_active')
  })
}

const onOff = () => {
  let cards = document.querySelectorAll('.card');
  cards.forEach(item => {
    if (!item.classList.contains('card_disable')) {
      item.lastElementChild.children[0].innerText = 'Выключить';
    } else {
      item.lastElementChild.children[0].innerText = 'Включить';
    }
  })
}

onOff()

document.body.addEventListener('click', (e) => {
  let target = e.target;
  if ((target.className !== 'card-menu')) {
    hideMenus()
  }
})

cards.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('card-menu')) {
    e.preventDefault();
    target.nextElementSibling.classList.toggle('card-menu-actions_active')
  }
  if (target.classList.contains('card-menu_on')) {
    e.preventDefault();
    target.closest('.card').classList.toggle('card_disable');
    onOff()
  }
})





