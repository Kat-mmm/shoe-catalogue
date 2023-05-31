document.addEventListener("DOMContentLoaded", ()=>{
    const sizeEl = document.getElementById('size-dropdown');
    const brandEl = document.getElementById('brand-dropdown');
    const color = document.getElementById('color-dropdown');
    const searchBtn = document.querySelector('.search-btn');
    // const addToCartBtn = document.querySelector('.add-to-cart');
    const cartItemsEl = document.querySelector('.cart-items');
    

    //Adding shoe form elements
    const colorTxtEl = document.getElementById('color');
    const brandTxtEl = document.getElementById('brand');
    const priceNumEl = document.getElementById('price');
    const sizeNumEl = document.getElementById('size');
    const inStockNumEl = document.getElementById('in_stock');
    const imgUrlTxtEl = document.getElementById('img_url');
    const addShoeFrm = document.querySelector('.add-shoe-form');

    let templateSource = document.querySelector('.productTemplate').innerHTML;

    let cartCount = Number(cartItemsEl.value);

    let shoesData = { shoes: [
        {
            color : 'blue',
            brand : "Nike",
            price : 1600,
            size: 5,
            in_stock : 5,
            img_url: './images/blue-nike.webp'
        },
        {
            color : 'orange',
            brand : "Adidas",
            price : 1999,
            size: 8,
            in_stock : 3,
            img_url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f587213eef3649839031ae7b0136f8a3_9366/NMD_R1_Shoes_Orange_HP9661_01_standard.jpg'
        },
        {
            color : 'black',
            brand : "Puma",
            price : 2349,
            size: 3,
            in_stock : 4,
            img_url: 'https://deichmann.scene7.com/asset/deichmann/US_01_400488_00?$rr_main$&defaultImage=default_obs'
        },
        {
            color : 'red',
            brand : "New Balance",
            price : 1899,
            size: 6,
            in_stock : 12,
            img_url: 'https://d2ob0iztsaxy5v.cloudfront.net/product/196369/1963693050_zm.jpg'
        },
        {
            color : 'pink',
            brand : "Nike",
            price : 3400,
            size: 7,
            in_stock : 3,
            img_url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04eb44b1-53bc-4628-a242-7cac3442f6a2/air-vapormax-plus-womens-shoes-xbt7zf.png'
        },
        {
            color : 'white',
            brand : "puma",
            price : 2399,
            size: 2,
            in_stock : 7,
            img_url: 'https://theathletesfoot.co.za/cdn/shop/products/png_13_-Copy_800x.webp?v=1668162520'
        },
        {
            color : 'brown',
            brand : "Adidas",
            price : 1299,
            size: 5,
            in_stock : 15,
            img_url: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2d0a0755ce8441a4bbf9aaa400ee65c4_9366/OZWEEGO_Shoes_Beige_EE6462_07_standard.jpg'
        },
        {
            color : 'orange',
            brand : "New Balance",
            price : 2549,
            size: 8,
            in_stock : 20,
            img_url: 'https://www.footgear.co.za/wp-content/uploads/2023/05/feature-NBLL0089707.jpg'
        },
        {
            color : 'green',
            brand : "New Balance",
            price : 1899,
            size: 5,
            in_stock : 7,
            img_url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIZxFegJDptzlpxXhGBNoCDBqSeejIwJaBaYH7c7Dr5N7qBKsrAzcTVof3oVFsTTLOKpRtP3brjktMILdK_cGx0Br2FhkOLPPnbLr6Cm3nhvhXM7_UNg9A5h4&usqp=CAE'
        },
        {
            color : 'white',
            brand : "Reebok",
            price : 899,
            size: 6,
            in_stock : 18,
            img_url: 'https://cdn.zando.co.za/p/153712-9328-217351-1-zoom.jpg'
        },
        {
            color : 'black',
            brand : "Nike",
            price : 1400,
            size: 5,
            in_stock : 22,
            img_url: 'https://static.nike.com/a/images/t_default/b05afb11-db22-461d-b94e-49bdc316b445/revolution-6-road-running-shoes-FgfhgR.png'
        },
        {
            color : 'green',
            brand : "Adidas",
            price : 2567,
            size: 7,
            in_stock : 9,
            img_url: 'https://images.asos-media.com/products/adidas-originals-gazelle-trainers-in-collegiate-green/203694687-1-collegiategreen?$n_750w$&wid=750&hei=750&fit=crop'
        },
        {
            color : 'red',
            brand : "Reebok",
            price : 1899,
            size: 6,
            in_stock : 2,
            img_url: 'https://cdn.zando.co.za/p/340025-5035-520043-1-big.jpg'
        },
        {
            color : 'pink',
            brand : "Puma",
            price : 3199,
            size: 7,
            in_stock : 3,
            img_url: 'https://theathletesfoot.co.za/cdn/shop/products/buty-foreverrun-nitro-wns-ravish-fresh-p-37775805-63ff2bdb8615b_800x.jpg?v=1681987646'
        },
        {
            color : 'red',
            brand : "Puma",
            price : 3899,
            size: 6,
            in_stock : 6,
            img_url: 'https://images.puma.net/images/377572/01/sv01/fnd/ZAF/'
        },
        {
            color : 'black',
            brand : "Adidas",
            price : 3400,
            size: 4,
            in_stock : 9,
            img_url: 'https://assets.adidas.com/images/w_940,f_auto,q_auto/2c43c4cdaf59417b99e4ad2100c3f874_9366/GZ7740_01_standard.jpg'
        },
        {
            color : 'brown',
            brand : "Nike",
            price : 1800,
            size: 6,
            in_stock : 10,
            img_url: 'https://cdn.shopify.com/s/files/1/0591/1805/9685/products/Travis-Scott-Air-Jordan-1-High-OG-CD4487-100-Release-Date-Price_1200x1200.jpg?v=1630792683'
        },
        {
            color : 'pink',
            brand : "New balance",
            price : 2499,
            size: 3,
            in_stock : 18,
            img_url: 'https://deichmann.scene7.com/asset/deichmann/US_01_401184_00?$rr_pdp_zoom$&defaultImage=default_obs'
        },
        {
            color : 'blue',
            brand : "Nike",
            price : 3899,
            size: 6,
            in_stock : 5,
            img_url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ufdvjwizdclhgpygwxsb/air-vapormax-plus-mens-shoes-nC0dzF.png'
        },
        {
            color : 'orange',
            brand : "Adidas",
            price : 6999,
            size: 6,
            in_stock : 8,
            img_url: 'https://images.solecollector.com/complex/images/c_crop,h_1125,w_2000,x_0,y_438/xwdaztxnvb2izcpff5ee/pharrell-adidas-nmd-hu-orange-gy0095-pair.jpg'
        }

    ]}

    function filterShoes(){
        const selectedColor = color.value;
        const selectedSize = sizeEl.value;
        const selectedBrand = brandEl.value;

        const filteredShoes = shoesData.shoes.filter(shoe => {
            return (
              (selectedBrand === '' || shoe.brand === selectedBrand) &&
              (selectedColor === '' || shoe.color === selectedColor) &&
              (selectedSize === '' || shoe.size === parseInt(selectedSize))
            );
        });

        let template = Handlebars.compile(templateSource);
        let filledTemplate = template({ shoes: filteredShoes });
        document.querySelector('.shoes-container').innerHTML = filledTemplate;

        if(filteredShoes.length === 0){
            document.querySelector('.shoes-container').innerHTML = 'Items not available in stock';
        }
    }

    // function addToCart(){
    //     cartCount++;
    //     cartItemsEl.innerHTML = cartCount;
    // }

    function addShoe(e){
        e.preventDefault();

        try{
            let newShoe = {
                color: colorTxtEl.value,
                brand: brandTxtEl.value,
                price: parseInt(priceNumEl.value),
                size: parseInt(sizeNumEl.value),
                in_stock: parseInt(inStockNumEl.value),
                img_url: imgUrlTxtEl.value
            }
    
            shoesData.shoes.push(newShoe);

            addShoeFrm.reset();
        }
        catch(e){
            console.log(e);
        }
    }

    let template = Handlebars.compile(templateSource);
    let filledTemplate = template(shoesData);
    document.querySelector('.shoes-container').innerHTML = filledTemplate;

    searchBtn.addEventListener('click', filterShoes);
    // addToCartBtn.addEventListener('click', addToCart);
    addShoeFrm.addEventListener('submit', addShoe);
})