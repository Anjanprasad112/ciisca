import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full z-0">
        <Header />
        <section>
          <div className="w-full h-11/12">
            <img
              src="https://scontent.fblr1-6.fna.fbcdn.net/v/t1.6435-9/86490460_3005661836145800_6880224449241546752_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=NMraWHwIWA8AX8HBV1E&_nc_ht=scontent.fblr1-6.fna&oh=00_AfCQ7e-yXaVz3bUYD6bc5b9c3_CPk9kDhiLav7NwPyJEWA&oe=63DB2AB1"
              className="w-full h-[95vh] object-cover"
            />
          </div>
        </section>
        <section className="w-3/5 h-full bg-white flex flex-col items-center py-10 mx-auto">
          <div className="text-4xl font-semibold tracking-wide ">
            About CIISCA
          </div>
          <div className="py-10 font-normal leading-9">
            CIISCA 2023 is an International Conference focused exclusively on
            academicians, industrialist and students to present their latest
            research results, ideas, developments, and applications in all areas
            of Information Sciences, Security and Communication. The main
            objective of this conference is to bring together thought leaders
            from industry, academia, government agencies and other institutions
            to exchange information and ideas on advancing the state-of-the-art
            in these fields. It will be a catalyst for bringing together
            participants from academia and industry to help foster new
            connections and ideas. Incremental adoption of Computational
            Intelligence has demonstrated value creation. It offers exciting
            capabilities that enable new set of opportunities, starting from
            OPEX optimization, customized products and services, and many more,
            that can only be imagined. The conference focuses on incremental
            adoption of these maximizing the value to customers and resolves the
            challenges in knitting the technology together
          </div>
          <div className="w-full rounded-lg border-zinc-300 border">
            <table className="w-full table-auto shadow-lg shadow-gray-300 rounded-lg ">
              <thead className="w-full bg-gat h-14 rounded-t-lg">
                <th
                  colSpan={2}
                  className="text-2xl text-white font-semibold tracking-wide  rounded-t-lg"
                >
                  Important Dates
                </th>
              </thead>
              <tbody className="font-normal text-base rounded-r text-left">
                <tr className="w-full h-14 rounded-r">
                  <td className="px-10 rounded-l">
                    Last Date for Paper Submission
                  </td>
                  <td className="px-10 rounded-r">20th May, 2023</td>
                </tr>
                <tr className="w-full h-14 bg-zinc-300 rounded-r">
                  <td className="px-10 rounded-l">
                    Notification of acceptance
                  </td>
                  <td className="px-10 rounded-r">31 May, 2022</td>
                </tr>
                <tr className="w-full h-14 rounded-r">
                  <td className="px-10 rounded-l">
                    Camera Ready Paper Submission
                  </td>
                  <td className="px-10 rounded-r">8th June, 2023</td>
                </tr>
                <tr className="w-full h-14 bg-zinc-300 rounded-r">
                  <td className="px-10 rounded-l">
                    Last Date for Registration
                  </td>
                  <td className="px-10 rounded-r">11th June, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="w-3/5 h-full bg-white flex flex-col items-center py-10 mx-auto">
          <div className="text-4xl font-semibold tracking-wide ">
            Conference Tracks
          </div>
          <div className="flex w-full self-center justify-self-center my-10 space-x-4">
            <div className="w-full text-left  space-y-2">
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Electronics Devices, Circuits and Systems</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Network Technologies and Systems</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Signal Processing</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Data Mining and Big Data Analysis</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Communication Technologies and Systems</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Bioinformatics and Machine Learning Algorithms</div>
            </div>
            <div className="w-full text-left space-y-2">
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Multimedia Processing Technologies and Systems</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Language Technologies and Information Retrieval</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Robotics and Artificial Intelligence</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Power Electronics and Control Engineering</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Security, Privacy and Digital Forensics</div>
              <div className='h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal '>Internet of Things</div>
            </div>
          </div>
        </section>
        <footer className='grid grid-cols-4 grid-rows-1 w-full bg-gat py-10 text-white px-20 gap-10'>
          {/* <div></div> */}
          <div className='w-full'>
            <div className='text-lg tracking-wider'>
              CIISCA 2023
            </div>
            <div className=" w-4/5 mt-8 text-left">
              CIISCA 2023 is an International Conference focused exclusively on
              academicians, industrialist and students to present their latest research
              results, ideas, developments, and applications in all areas of
              Information Sciences, Security and Communication.
            </div>
          </div>
          <div className=' w-full'>
            <div className='text-lg tracking-wider'>
              Useful Links
            </div>
            <div className="flex flex-col space-y-4 tracking-wider mt-8 text-left">
              <Link href='/keynote'>Speakers</Link>
              <Link href='/call-for-papers'>CFP</Link>
            </div>
          </div>
          <div className=' w-full'>
            <div className='text-lg tracking-wider'>
              About
            </div>
            <div className="flex flex-col space-y-4 tracking-wider mt-8 text-left">
              <Link href='/gat'>About Us</Link>
              <Link href='/contact'>Contact Us</Link>
              <Link href='https://goo.gl/maps/h8otqP7Zxnvinwh16'>Locate Us</Link>
            </div>
          </div>
          <div className=' w-full'>
            <div className='text-lg tracking-wider'>
              Have question?
            </div>
            <div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
