import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/orders?email=${user.email}`;
  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure that you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = bookings.filter((booked) => booked._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data=> {
        if(data.modifiedCount > 0){
            // alert("order updated")
            const remaining = bookings.filter((booked) => booked._id !== id);
            const updatedOrder = bookings.find(booked => booked._id === id)
            updatedOrder.status = 'confirm'
            const newBOokings = [updatedOrder, ...remaining]
            setBookings(newBOokings)
        }
    })

  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center mt-4 mb-10">
        My Bookings: {bookings.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              >
                {" "}
              </BookingsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
