import React, {useState, useContext} from 'react';

import {Store} from "../../../ulti/Store";
import {filterProduct} from "../../../services/productService";
import {getCategories} from "../../../services/homeService";

function ListProduct() {
    const [modal, setModal] = useState(false);
    const [modalProduct, setModalProduct] = useState('');
    const [filter, setFilter] = useState([]);
    const [store, dispatch] = useContext(Store);
    const products = store?.product?.data;

    const handleFilterProduct = async (id) => {
        try {
            const resp = await filterProduct(id);
            console.log(resp.data.data)
        } catch (e) {
            console.log(e)
        }
    }
    console.log(products);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
            {
                (products || []).map((product, productIndex) => {
                    return (
                        <div className="relative" key={productIndex}>
                            <div
                                className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md"
                                style={{minHeight: '160px'}}
                                onClick={() => {
                                    setModal(true);
                                    setModalProduct(product);
                                }}
                            >
                                <div>
                                    <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-20 flex justify-between">
                                        <div
                                            className="inline-flex items-center justify-center w-8 h-8 p-2 rounded-full bg-white shadow-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="w-8 h-8 h-auto fill-current text-red-500"
                                                 viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd"
                                                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="relative block h-full">
                                        <div className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                                            <img className="object-cover w-full h-full"
                                                 src={"http://192.168.1.20/storage/" + product.thumb} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="mt-2 text-gray-800 text-sm font-semibold line-clamp-1">
                                    {product.name}
                                </h2>
                                <p className="mt-2 text-gray-800 text-sm">${product.price}</p>
                                {/*<button className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md w-full">*/}
                                {/*    Order*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    )
                })
            }
            {modal &&
                <div className="fixed top-0 left-0 right-0 bottom-0 z-30">
                    <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-40 z-30">
                    </div>
                    <button className="absolute right-4 z-50 text-white" onClick={()=>setModal(false)}>X</button>
                    <section className="text-gray-700 body-font overflow-hidden absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center z-40">
                        <div className="container px-5 py-24 mx-auto ">
                            <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white overflow-hidden">
                                <img alt="ecommerce"
                                     className="lg:w-1/2 w-full h-15 object-cover rounded border border-gray-200"
                                     src={"http://192.168.1.20/storage/"+modalProduct.thumb}/>
                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{modalProduct.name}</h1>
                                    <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                       strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                       className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                                        <span
                                            className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                         className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                         className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                         className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                    </svg>
                  </a>
                </span>
                                    </div>
                                    <p className="leading-relaxed">{modalProduct.description}</p>
                                    <p className="leading-relaxed">{modalProduct.content}</p>
                                    <div
                                        className="flex mt-6 justify-between items-center pb-5 border-b-2 border-gray-200 mb-5 mr-5">
                                        {/*{*/}
                                        {/*    modalProduct.filters.map((filter,index)=>{*/}
                                        {/*        return(*/}
                                        {/*            <div key={index}>*/}
                                        {/*                <div className="mr-3">{filter.name}</div>*/}
                                        {/*                {*/}
                                        {/*                    filter.childs.map((child,index)=>{*/}
                                        {/*                        return(*/}
                                        {/*                            <div key={index}>*/}
                                        {/*                                <input type="radio" value={`${child} ${index}`}/> {child}*/}
                                        {/*                            </div>*/}
                                        {/*                        )*/}
                                        {/*                    })*/}
                                        {/*                }*/}
                                        {/*            </div>*/}
                                        {/*        )*/}
                                        {/*    })*/}
                                        {/*}*/}
                                    </div>
                                    <div className="flex">
                                                        <span
                                                            className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                        <button
                                            className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button
                                        </button>
                                        <button
                                            className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                            <svg fill="currentColor" strokeLinecap="round"
                                                 strokeLinejoin="round" strokeWidth={2}
                                                 className="w-5 h-5" viewBox="0 0 24 24">
                                                <path
                                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </div>
    );
}

export default ListProduct;