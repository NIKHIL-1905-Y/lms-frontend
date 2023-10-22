import HomeLayout from "../Layouts/HomeLayout";
import {Link} from "react-router-dom"
import HomePageImage from "../assets/Images/homePageMainImage.png"
function Home(){
   return(
    <HomeLayout>
       <div className="pt-10 text-white flex item-center justify-center gap-10 mx-16 h-[90vh]">
         <div className="w-1/2 space-y-6 mx-10">
            <h1 className="text-5xl font-semibold">
               Find Out best
               <span className="text-yellow-500 font-bold">
                  Online Course
               </span>
            </h1>
            <p className="text-xl text-gray-200">
               We have a large library of courses taught by highly skilled and qualified faculties at a very affordable price
            </p>
            <div className="space-x-6">
               <Link to="/courses">
                  <button className="bg-gradient-to-r from-yellow-400 to-yellow-900  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600  hover:scale-110  transition-all ease-in-out duration-1000 ">
                     Explore courses
                  </button>
               </Link>
               <Link to="/contact">
               <button className=" border border-yellow-500 hover:bg-gradient-to-r from-yellow-400 to-yellow-700  px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600  hover:scale-110  transition-all ease-in-out duration-1000 ">
                     Contact Us
                  </button>
               </Link>
            </div>
         </div>
         <div className="w-1/2 flex items-center justify-center">
          <img src={HomePageImage} alt="Home Page Image" className="hover:scale-50 transition-all ease-in-out duration-1000"/>
         </div>
       </div>
    </HomeLayout>
   )
}

export default Home;