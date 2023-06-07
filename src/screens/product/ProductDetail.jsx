import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { addCart, removeCart } from "../../redux/reducers/cart";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();
  const handleCart = (product) => {
    const data = {
      id: Math.random(),
      ...product,
      quantity: 1,
    };
    if (cartBtn === "Add to Cart") {
      dispatch(addCart(data));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(removeCart(data));
      setCartBtn("Add to Cart");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      console.log("dd", response);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loadiing = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 8 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-5 fw-bold">{product.title}</h1>
              <hr />
              <h2 className="my-2">${product.price}</h2>
              <p className="lead my-2">{product.description}</p>
              <button
                onClick={() => handleCart(product)}
                className="btn btn-outline-success px-4 py-2"
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loadiing /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
