import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

function more() {
  return (
    <>
      <div className="w-full">
        <Header />
        <section className="w-full z-10">
          <div className=" w-full h-screen">
            <img
              src="https://scontent.fblr1-6.fna.fbcdn.net/v/t1.6435-9/86490460_3005661836145800_6880224449241546752_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=NMraWHwIWA8AX8HBV1E&_nc_ht=scontent.fblr1-6.fna&oh=00_AfCQ7e-yXaVz3bUYD6bc5b9c3_CPk9kDhiLav7NwPyJEWA&oe=63DB2AB1"
              className="w-full h-[100vh] object-cover opacity-100"
            />
            <div className="w-full h-[100vh] bg-indigo-900 absolute inset-0 opacity-70 object-contain"></div>
            <div className="w-full h-[100vh] flex bg-transparent absolute inset-0 items-center justify-center  object-contain">
              <div className="text-center mt-40 !font-semibold tracking-widest !text-yellow-500 mb-36">
                <h1 className="!font-semibold"> - TO BE UPDATED - </h1>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default more;
