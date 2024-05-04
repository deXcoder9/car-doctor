import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, _id, price, img } = service;
  console.log(service)

  const handleBookService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const orders = {
      service_id: _id,
      customerName: name,
      email,
      service: title,
      img: img ,
      date,
      price: price,
    };
    console.log(orders);

    fetch('http://localhost:5000/orders', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orders)
        
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            alert('service booked successfully')
        }
    })

  };
  return (
    <div>
      <h2 className="text-center text-3xl">Book Service: {title} </h2>
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] text-white hover:text-black"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
      <div className="card-body"></div>
    </div>
  );
};

export default Checkout;
