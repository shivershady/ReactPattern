import React from 'react';
import Category from "./Components/Category";
import ListProduct from "./Components/ListProduct";

function Home() {

    return (
        <div className="mb-8">
            {/*Category*/}
           <Category/>
            {/*Product*/}
            <ListProduct/>
        </div>
    );
}

export default Home;