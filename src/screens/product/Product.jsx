/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      setProducts(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const Loadiing = () => {
    return (
      <>
        <div className="container my-5 py-3">
          <div className="row">
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
          </div>

          <div className="gap"></div>

          <div className="row">
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
            <div className="col-md-3 mb-4">
              <Skeleton height={350} width={350} />
            </div>
          </div>
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-primary  me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary  me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men{"'"}s Clothing
          </button>
          <button
            className="btn btn-outline-primary  me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women{"'"}s Clothing
          </button>
          <button
            className="btn btn-outline-primary  me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-primary  me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div
                className="card my-5 py-3"
                key={product.id}
                style={{
                  width: "18rem",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{
                    height: "150px",
                    width: "80%",
                    objectFit: "contain",
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <div
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      marginBottom: 8,
                    }}
                  >
                    <ReactStars
                      count={5}
                      size={24}
                      value={product.rating.rate}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <button type="button" className="btn btn-outline-primary">
                      $ {product.price}
                    </button>

                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-secondary mx-2 w-auto"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Shop Products Now</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {loading ? <Loadiing /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;
