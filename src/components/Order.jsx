// COMPONENTS
import { orders } from "../assets/data/data";

const Order = () => {
  return (
    <>
      <section className="order">
        <div className="container grid boxItems">
          {orders.map((order) => {
            return (
              <div className="box flexCenter" key={order.id}>
                <div className="num">
                  <h1>{order.id}</h1>
                </div>
                <div className="text">
                  <h3>{order.title}</h3>
                  <p>{order.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Order;
