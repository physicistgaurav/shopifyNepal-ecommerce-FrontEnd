import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const OrderDetail = () => {
  const order = useSelector((state) => state.order.order);

  const ProductTile = ({ data }) => {
    return data.cart.map((item) => (
      <tr className="align-middle" key={item.title}>
        <td>{item.title}</td>
        <td>
          <img src={item.image} alt={item.title} height="50" width="50" />
        </td>
        <td>{item.quantity}</td>
        <td>${item.totalPrice}</td>
      </tr>
    ));
  };

  ProductTile.propTypes = {
    data: PropTypes.shape({
      cart: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          totalPrice: PropTypes.number.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  if (order.length === 0) {
    return (
      <div className="noorder my-5 text-center">
        <img
          src="src/assets/images/noorder.jpg"
          alt="No Order"
          height="300"
          width="300"
        />
        <h2>No Order Found</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2>Order Detail</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {order.map((item, index) => (
            <ProductTile key={index} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
