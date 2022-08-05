export const Drawer = (fun) => {

    switch (fun) {
        case 'cart':
            const nav_cart_tray = document.querySelector('.nav_cart_tray');
            nav_cart_tray.classList.toggle('active')
            BackBlur()
            break;
        case 'search':
            const search_section = document.querySelector('.search_section');
            search_section.classList.toggle('active')
            BackBlur()
            break
        case 'menu':
            const menu = document.querySelector('.menu_icon_inner');
            menu.classList.toggle('active')
            BackBlur()
            break
        default: break;
    }
}



const BackBlur = () => {
    const cart = document.querySelector('.nav_cart');
    cart.classList.toggle('active')
}