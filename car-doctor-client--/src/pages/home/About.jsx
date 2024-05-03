import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className='lg:w-1/2 relative'>
          <img src={person} className=" w-[450px] h-full rounded-lg shadow-2xl" />
          <img src={parts} className="w-1/2 top-1/2 absolute right-1 border-8 border-white rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <p className='text-[#FF3811] font-bold'>About Us</p>
            <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in this field</h1>
            <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            <button className="btn bg-[#FF3811] border-none px-4 py-3 rounded-lg text-white hover:text-black ">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;