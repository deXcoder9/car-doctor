import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([])

  const url = `http://localhost:5000/orders?email=${user.email}`;
  useEffect( ()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setBookings(data))
  },[])

  return <div>
    <h1 className="text-3xl font-bold underline text-center mt-4 mb-10">My Bookings: {bookings.length}</h1>
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
                        {
                            bookings.map(booking => <BookingsRow key={booking._id} booking={booking}> </BookingsRow>)
                        }
                    </tbody>

                </table>
            </div>

  </div>;
};

export default Bookings;
