import React, {useEffect, useCallback, useState, useContext} from 'react';
import {getCategories} from "../../../services/homeService";
import {Store} from "../../../ulti/Store";
import {getProductById} from "../../../services/productService";

function Category() {
    // const [categories, setCategories] = useState([]);
    const [store, dispatch] = useContext(Store);
    const categories = store?.categories?.data;

    const listCategory = useCallback(async () => {
        try {
            const resp = await getCategories();
            dispatch({type: "GET_CATEGORIES_SUCCESS", data: resp.data.data});
        } catch (e) {
            console.log(e)
        }
    }, []);

    const getProductHandle = async (id) => {
        try {
            // dispatch({type: "GET_PRODUCT", id: id});
            const resp = await getProductById(id);
            dispatch({type: "GET_PRODUCT_SUCCESS", data: resp.data.data})
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
            listCategory();
        }
        , []);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {(categories || []).map((category, categoryIndex) => {
                    return (
                        <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow"
                             style={{minHeight: '160px'}} onClick={()=>getProductHandle(category.id) }>
                            <div>
                                <div className="relative block h-full">
                                    <div className="h-32 bg-gray-100 rounded-lg overflow-hidden">
                                        <img src={"http://192.168.1.20/storage/"+category.thumb} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mt-4 text-gray-800 text-sm font-semibold line-clamp-1">
                                {category.name}
                            </h2>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Category;