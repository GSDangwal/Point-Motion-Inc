import React from 'react'
import { useSelector } from 'react-redux';
// import photo from "./photos.jpg";
import "./style.css"
function Home() {
    const products = useSelector((state) => state.products);
    return (
        <div className="row row-cols-2 row-cols-md-4 g-4" style={{ margin: 40 }}>
            {products.map((e, index) => {
                const { product, price } = e;
                return (
                    <div key={index}>
                        <div className="col">
                            <div className="card">
                                <img src="#/" className="card-img-top" alt="..." width={200} height={200} />
                                <div className="card-body">
                                    <h5 className="card-title" >{product}</h5>
                                    <span className="card-text">{price} :-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )

}

export default Home
