/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navber";
import bookstore from "../assets/bookpic2.png";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-20'>
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center  my-2">ABOUT US</h2>
      </div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row my-10'>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={bookstore}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
            “Thanks to Bookshop, there is no reason to buy books on Amazon anymore.” — {" "}
              <span className="text-pink-500">Inside Hook!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Bookshop.org works to connect readers with independent booksellers all over the world.
              ‍We believe local bookstores are essential community hubs that foster culture, curiosity, and a love of reading, and we're committed to helping them thrive.

              Every purchase on the site financially supports independent bookstores. Our platform gives independent bookstores tools to compete online and financial support to help them maintain their presence in local communities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;