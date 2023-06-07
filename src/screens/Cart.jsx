import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { editCart, removeCart } from "../redux/reducers/cart";

const Cart = () => {
  const state = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    setQuantity(state.map((data) => data.quantity));
  }, [state]);

  const handleClose = (item) => {
    dispatch(removeCart(item));
  };

  const update = (id, qty, item, ind) => {
    console.log(qty);
    const data = {
      ...item,
      id,
      quantity: qty,
    };
    dispatch(editCart(data));
    setQuantity((quantity[ind] = qty));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 &&
        state.map((cartItem, ind) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
              <div className="container py-4">
                <button
                  onClick={() => handleClose(cartItem)}
                  className="btn-close float-end"
                  aria-label="Close"
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={cartItem.image}
                      alt={cartItem.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead fw-bold">${cartItem.price}</p>
                    <div className="col-md-4 d-flex">
                      <button
                        disabled={quantity[ind] === 1}
                        onClick={() =>
                          update(
                            cartItem.id,
                            parseInt(quantity[ind] - 1),
                            cartItem,
                            ind
                          )
                        }
                        className="btn btn-dark"
                      >
                        -
                      </button>
                      <input
                        value={quantity[ind]}
                        className="mx-1"
                        type="number"
                      />
                      <button
                        onClick={() =>
                          update(
                            cartItem.id,
                            parseInt(quantity[ind] + 1),
                            cartItem,
                            ind
                          )
                        }
                        className="btn btn-dark"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
