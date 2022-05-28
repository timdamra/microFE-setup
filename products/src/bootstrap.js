import faker from "faker";

/**
 * @param {HTMLElement} el 
 */
const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
}

// context #1:
//   file is running in development & in isolation & using local index.html
//   'dev-products' is definitely in the html
//   if so, immediately render app into that element

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-products");

    if (el) {
        mount(el);
    }
}

// context #2:
//   file is running in dev OR prod via the container app
//   no guarantee that the 'dev-products' element exists in html
//   do NOT immediately render the app 
//   instead export it, so that container can determine how/where to mount

export { mount };
