import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import photo from "./photos.jpg";
function AddItem() {
    const dispatch = useDispatch();
    let products = useSelector((state) => state.products);
    const [productsName, nameUpdate] = useState("");
    const [price, priceUpdate] = useState("");
    const [discption, discptionUpdate] = useState("");
    const [image, imageUpdate] = useState("");
    console.log((image.name))
    const handleClick = (e) => {
        e.preventDefault();
        const obj = {
            product: productsName,
            price: price,
            // photos: image
        }
        dispatch({ type: "ADD", payload: obj });
    }
    function removeItem(index) {
        dispatch({ type: "remove", payload: index })
    }

    return (
        <div>
            <form onSubmit={(e) => handleClick(e)}>
                {/* <label>Product name</label>
                <input type="text" required onChange={((e) => nameUpdate(e.target.value))}></input>
                <label>Price</label>
                <input type="text" required onChange={((e) => priceUpdate(e.target.value))}></input>
                <input type="file" accept=".jpg, .jpeg, .png" onChange={((e) => imageUpdate(e.target.files[0]))}></input>
                <button type="submit" value="submit">submit</button> */}
                <div className="row g-2" style={{ marginLeft: "15rem", marginRight: "15rem", marginBottom: "5rem", marginTop: "2rem" }}>

                    <div className="col-6">
                        <label>product</label>
                        <input type="text" className="form-control" placeholder="Enter product name" aria-label="Enter product name"
                            required onChange={((e) => nameUpdate(e.target.value))} />
                    </div>
                    <div className="col-6">
                        <label>Product price</label>
                        <input type="text" className="form-control" placeholder="Enter price" aria-label="nter price"
                            required onChange={((e) => priceUpdate(e.target.value))} />
                    </div>
                    <div className="col-6">
                        <label>Product Description</label>
                        <textarea type="text" className="form-control" placeholder="Enter description" aria-label="Enter description"
                            onChange={((e) => discptionUpdate(e.target.value))} />
                    </div>
                    <div className="col-6">
                        <label>Product Image</label>
                        <input type="file" className="form-control custom-file-input" />
                    </div>
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary" value="submit">Add Product</button>
                    </div>
                </div>

            </form>
            <div  >
                <div style={{ display: "flex", marginLeft: "34rem", marginRight: "28rem", justifyContent: "space-between" }}>
                    <h5>Name</h5>
                    <h5>Description</h5>
                    <h5>Price</h5>
                </div>
                {products.map((e, index) => {
                    const { product, price } = e;


                    return (
                        <div className="card mb-3" style={{ maxWidth: "1000px", marginLeft: "15rem", marginRight: "15rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="#/" width={100} height={20} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product}</h5>
                                        <p>{price}</p>
                                        <p>{discption}</p>
                                        <a href="#" className="btn btn-primary" onClick={() => removeItem(index)} >Remove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // <div classNameName="card w-75 " key={index}>
                        //     <div classNameName="col-md-4">
                        //         <img src={photo} classNameName="img-fluid rounded-start" alt="..." />
                        //     </div>
                        //     <div classNameName="card-body">
                        //         <span classNameName="card-title">{product}</span>
                        //         <span classNameName="card-text">{price}</span>
                        //         <a href="#" classNameName="btn btn-primary" onClick={() => removeItem(index)} >Remove</a>
                        //     </div>
                        // </div >
                    )

                })}
            </div>
        </div >
    )
}

export default AddItem
