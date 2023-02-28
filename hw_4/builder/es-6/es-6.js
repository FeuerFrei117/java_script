"use strict";

class MailBuilder {
    constructor(message) {
        this.message = message;
    }

    getBuiltMail() {
        return `
            <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
            <html>
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
            </head>
            <body>
                ${this.message}
            </body>
            </html>
        `;
    }
}

class MailWithFooterBuilder extends MailBuilder {
    constructor(message, footerContent) {
        super(message);
        this.footerContent = footerContent;
    }

    getSectionMarkup(content) {
        return `
            <tr>
                <td>
                    ${content}
                </td>
            </tr>
        `;
    }

    prepare() {
        this.message = `
            <table>
                <tbody style="background: lightgrey;">
                    ${this.getSectionMarkup(this.message)}
                </tbody>
                <tfoot style="background: green;">
                    ${this.getSectionMarkup(this.footerContent)}
                </tfoot>
            </table>
        `;
    }
}

class ProductsMailBuilder extends MailWithFooterBuilder {
    constructor(message, footerContent, products) {
        super(message, footerContent);
        this.products = products;
    }

    getProductsMarkup() {
        let markup = '<tr>';
        for (let product of this.products) {
            markup += `
                <td>
                    <div>${product.name}</div>
                    <img src="${product.image}" alt="${product.name}">
                    <div>${product.price}</div>
                </td>
            `;
        }
        markup += '</tr>';
        return markup;
    }

    prepare() {
        this.message = `
            <table>
                <tbody style="background: lightgrey;">
                    ${this.getSectionMarkup(this.message)}
                    ${this.getProductsMarkup()}
                </tbody>
                <tbody style="background: green;">
                    ${this.getSectionMarkup(this.footerContent)}
                </tbody>
            </table>
        `;
    }
}

function Product(name, image, price) {
    this.name = name;
    this.image = image;
    this.price = price;
}

let products = [
    new Product('название 1', 'https://site.com/image/1.jpg', 99),
    new Product('название 2', 'https://site.com/image/2.jpg', 249),
    new Product('название 3', 'https://site.com/image/3.jpg', 519),
];

let builder3 = new ProductsMailBuilder('Покупай наши товары', 'скидка 50%', products);
builder3.prepare();
let mail3 = builder3.getBuiltMail();
console.log(mail3);