import { useEffect } from "react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [Service, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center my-5 space-y-2">
        <h4 className="text-[#FF3811] font-bold">Services</h4>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which do not look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Service.map((serv) => (
          <div key={serv._id} className="card  bg-base-100 shadow-xl m-4 ">
            <figure className="px-4 pt-5 w-[315px] h-[205px] ">
              <img src={serv.img} className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body  ">
              <h2 className="card-title">{serv.title}</h2>
              <div className="card-actions text-[#FF3811] font-bold">
                <p>Price: ${serv.price}</p>
                <Link to={`/checkout/${serv._id}`}>
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
