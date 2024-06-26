import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
// import img5 from "../../assets/images/banner/5.jpg"
// import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full  ">
    <img src={img1} className="w-full" />
    <div className="text-white rounded-lg rounded-lg pt-16 absolute pl-9 w-1/3  space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full ">
        <h1 className="text-5xl  font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-8 flex">
                <button className="btn bg-[#FF3811] border-none px-4 py-3 rounded-lg text-white hover:text-black">Discover More</button>
                <button className="btn btn-outline text-white border-white">Latest Project</button>
        </div>
        </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  space-x-9">
       
      <a href="#slide4" className="btn btn-circle ">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className=" text-white rounded-lg pt-16 absolute pl-9 w-1/3  space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full ">
        <h1 className="text-5xl  font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-8 flex">
                <button className="btn bg-[#FF3811] border-none px-4 py-3 rounded-lg text-white hover:text-black">Discover More</button>
                <button className="btn btn-outline text-white border-white">Latest Project</button>
        </div>
        </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  space-x-9">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="text-white rounded-lg pt-16 absolute pl-9 w-1/3  space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full ">
        <h1 className="text-5xl  font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-8 flex">
                <button className="btn bg-[#FF3811] border-none px-4 py-3 rounded-lg text-white hover:text-black">Discover More</button>
                <button className="btn btn-outline text-white border-white">Latest Project</button>
        </div>
        </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  space-x-9">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="text-white rounded-lg pt-16 absolute pl-9 w-1/3  space-y-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full ">
        <h1 className="text-5xl  font-bold">Affordable Price For Car Servicing</h1>
            <p className="text-gray-300">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-x-8 flex">
                <button className="btn bg-[#FF3811] border-none px-4 py-3 rounded-lg text-white hover:text-black">Discover More</button>
                <button className="btn btn-outline text-white border-white">Latest Project</button>
        </div>
        </div>
  <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  space-x-9">
      <a href="#slide3" className="btn btn-circle ">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none">❯</a>
    </div>
  </div>
</div>

    );
};

export default Banner;