const products = [
    {   
        id:1,
        name:"iPhone 8",
        type:"phone",
        capacity:64,
        price:499,
        image:"/images/products/ipad.png",
    },
    {   
        id:2,
        name:"iPhone 8 plus",
        description:"This is iPhone 8 plus",
        type:"phone",
        capacity:128,
        price:799,
        image:"/images/products/iphone.png",
    },
    {   
        id:3,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:256,
        price:1199,
        image:"/images/products/iphone.png",
    },
    {   
        id:4,
        name:"iPhone XS",
        description:"This is iPhone XS",
        type:"phone",
        capacity:128,
        price:1399,
        image:"/images/products/ipad.png",
    },
]

export const getProductsMap = (array) => {
    return array.reduce((map,product)=>({
        ...map,
        [product.id]:product,
    }),{})
}  

export default products