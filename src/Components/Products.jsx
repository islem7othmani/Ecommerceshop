import React, { useState } from 'react';
import banner4 from '../Images/banner4.jpg'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const Products = () => {
  const [products, setProducts] = useState([
    // List of products
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
     { id: 1, name: "Product 1" },
    // ...
  ]);
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 9));

  const showMoreProducts = () => {
    const currentVisibleCount = visibleProducts.length;
    const nextVisibleProducts = products.slice(0, currentVisibleCount + 9);
    setVisibleProducts(nextVisibleProducts);
  };

  return (
    <>
    <Nav/>
    <div className='bg-black '>
           <img src={banner4} alt="" className='relative w-full h-56 bg-black opacity-20' />
           <h1 className='absolute text-white top-36 left-96 font-bold text-5xl'># Get your anime merch #</h1>
    </div>
    <div className="container mx-auto p-4 pb-20">
     
    

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visibleProducts.map((product) => (
            <>
         

           
<div key={product.id} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

</>

        ))}
      </div>

      {visibleProducts.length < products.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreProducts}
            className="mx-2 mt-8 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show More Products
          </button>
        </div>
      )}
    </div>


    <Footer/>
    </>
  );
};

export default Products;
