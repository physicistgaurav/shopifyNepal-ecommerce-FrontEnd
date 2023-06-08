/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../redux/reducers/order";
import toast from "react-hot-toast";
import { removeCart } from "../redux/reducers/cart";

export const itemList = (item) => {
  return (
    <li className="list-group-item d-flex flex-column align-items-center">
      <div className="item-image">
        <img src={item.image} className="card-img-top" alt={item.title} />
      </div>
      <div className="item-details text-center">
        <h6 className="my-0 mt-2">{item.title}</h6>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <h6 className="text-muted">x{item.quantity}</h6>
          <span className="text-muted">${item.price}</span>
        </div>
      </div>
    </li>
  );
};

const Checkout = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart.cart);
  var total = state?.reduce((acc, val) => acc + val.price * val.quantity, 0);

  var tax = (total * 0.13).toFixed(2);
  var totalWithTax = (parseFloat(total) + parseFloat(tax)).toFixed(2);

  const [formData, setFormdata] = useState({});

  const handelFormdata = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const [phone, setPhone] = useState("");

  const handleMobilePhone = (e) => {
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);

    const phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)) {
      e.target.classList.add("is-invalid");
    } else {
      e.target.classList.remove("is-invalid");
    }
  };

  const checkout = (e) => {
    e.preventDefault();
    const payload = {
      cart: state,
      ...formData,
    };
    console.log(payload);
    dispatch(addOrder(payload));
    dispatch(removeCart("removeall"));
    toast.success("Order Has Been Placed. Thank You");
  };

  const shippingFees = 1;
  return (
    <>
      <div className="container my-5">
        <div className="row ">
          <div className="col-md-3 col-lg-3 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-2">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>SubTotal (USD)</span>
                <strong>${total}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tax (USD)</span>
                <strong>${tax}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping Fees (USD)</span>
                <strong>${total === 0 ? 0 : shippingFees}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>
                  ${total === 0 ? 0 : totalWithTax - shippingFees}
                </strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Contact Information</h4>
            <form
              onSubmit={(e) => checkout(e)}
              className="needs-validation"
              noValidate=""
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Gaurav"
                    onChange={(e) => handelFormdata(e)}
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Rizal"
                    onChange={(e) => handelFormdata(e)}
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="gaurav@example.com"
                    onChange={(e) => handelFormdata(e)}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="tel" className="form-label">
                    Phone
                  </label>
                  {JSON.stringify(phone)}
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="9812345678"
                    onChange={(e) => handleMobilePhone(e)}
                    value={phone}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid Phone Number.
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    BillingAddress
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handelFormdata(e)}
                    className="form-control"
                    id="address"
                    placeholder="Your Billing Adress"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handelFormdata(e)}
                    className="form-control"
                    id="address"
                    placeholder="Your Shipping Adress"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    Tole
                  </label>
                  <select
                    onChange={(e) => handelFormdata(e)}
                    className="form-select"
                    id="state"
                    name="tole"
                    required=""
                  >
                    <option value="">Chose ...</option>
                    <option>Velpa Church</option>
                    <option>B&B hispital</option>
                    <option>Bhawani Marga</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">
                    Postal
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    onChange={(e) => handelFormdata(e)}
                    name="zip"
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="same-address"
                  name="same-address"
                  onChange={(e) => handelFormdata(e)}
                />
                <label className="form-check-label" htmlFor="same-address">
                  Notify me Prior to Shipping my product
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    onChange={(e) => handelFormdata(e)}
                    required=""
                  />
                  <label className="form-check-label" htmlFor="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="digital"
                    name="paymentMethod"
                    type="radio"
                    onChange={(e) => handelFormdata(e)}
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="digital">
                    Esewa/Khalti
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    onChange={(e) => handelFormdata(e)}
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="cash">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    name="cartname"
                    className="form-control"
                    id="cc-name"
                    onChange={(e) => handelFormdata(e)}
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handelFormdata(e)}
                    className="form-control"
                    id="cc-number"
                    name="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    name="cc-expiration"
                    placeholder=""
                    onChange={(e) => handelFormdata(e)}
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handelFormdata(e)}
                    className="form-control"
                    id="cc-cvv"
                    name="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
