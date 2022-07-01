
const items = [
    {
    id: 1,
    icon: 'apps',
    title: 'Dashboard',

},
  
    {
        id: 1,
        icon: 'calculator',
        title: 'Calculator',

    },

    {
        id: 1,
        icon: 'wallet',
        title: 'Wallet',

    },
    {
        id: 1,
        icon: 'bag',
        title: 'Savings',

    },
    {
        id: 1,
        icon: 'cash',
        title: 'Currencies',

    },

    {
        id: 1,
        icon: 'receipt',
        title: 'Expenses',

    },

    {
        id: 1,
        icon: 'flame',
        title: 'Upcomimg',

    },
    {
        id: 1,
        icon: 'fast-food',
        title: 'Food',

    },

    {
        id: 1,
        icon: 'medkit',
        title: 'Health',

    },

    {
        id: 1,
        icon: 'accessibility',
        title: 'Account',

    },
    {
        id: 1,
        icon: 'settings',
        title: 'Setting',

    },
]


window.addEventListener('DOMContentLoaded',()=>{
    let items_label = document.querySelector('.items_label')
let Items= items.map(item=>{
    return `  <div class="item"> 
              <div class="item_icon">
<ion-icon name="${item.icon}"></ion-icon>

              </div>
              <p class="">${item.title}</p>
            </div>
            `
});

 Items = Items.join(' ');
console.log(Items)
items_label.innerHTML =Items;

})
