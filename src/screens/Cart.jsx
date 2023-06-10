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
      <div className="px-4 my-5 bg-light rounded-3 py-5 d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="container py-4">
          <div className="row">
            <div className="text-center">
              <img src="src/assets/images/emptycart.png" alt="Empty Cart" />
              <h3 className="mt-3">
                Discover new treasures. Explore our collection.
              </h3>
            </div>
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

  const calculateSubtotal = () => {
    let subtotal = 0;
    state.forEach((cartItem, ind) => {
      subtotal += cartItem.price * cartItem.quantity;
    });
    return subtotal.toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    const taxAmount = subtotal * 0.13;
    return taxAmount.toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const taxAmount = calculateTax();
    const total = parseFloat(subtotal) + parseFloat(taxAmount);
    return total.toFixed(2);
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 &&
        state.map((cartItem, ind) => {
          return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem?.id}>
              <div className="container py-4">
                <button
                  onClick={() => handleClose(cartItem)}
                  className="btn-close float-end"
                  aria-label="Close"
                ></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      src={cartItem?.image}
                      alt={cartItem?.title}
                      height="200px"
                      width="180px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{cartItem.title}</h3>
                    <p className="lead">Price per unit: ${cartItem?.price}</p>
                    <p className="lead fw-bold">
                      SubTotal: ${cartItem.price * quantity[ind]}
                    </p>

                    <div className="col-md-4 d-flex">
                      <button
                        disabled={quantity[ind] === 1}
                        onClick={() =>
                          update(
                            cartItem?.id,
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
      <div className="mx-auto text-center">
        <p className="lead">Tax (13%): ${calculateTax()}</p>

        <p className="lead fw-bold">Total: ${calculateTotal()}</p>
      </div>
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
