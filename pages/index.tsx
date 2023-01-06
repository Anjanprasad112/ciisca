import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
// import logo from '/assets/ciiscalogo.jpeg';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CIISCA</title>
      </Head>
      <div className="w-full">
        <Header />
        <section className="w-full z-10">
          <div className=" w-full h-11/12">
 
            <img
              src="https://scontent.fblr1-6.fna.fbcdn.net/v/t1.6435-9/86490460_3005661836145800_6880224449241546752_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=102&ccb=1-7&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_ohc=NMraWHwIWA8AX8HBV1E&_nc_ht=scontent.fblr1-6.fna&oh=00_AfCQ7e-yXaVz3bUYD6bc5b9c3_CPk9kDhiLav7NwPyJEWA&oe=63DB2AB1"
              className="w-full h-[95vh] object-cover opacity-95 " 
            />
            <div className="w-full h-[95vh] bg-blue-900 absolute inset-0 opacity-50 object-contain">
              <div className="text-center mt-40 text-bold">

            <h1>23<sup>rd</sup> & 24<sup>th</sup> JUNE 2023-Bengaluru.</h1><br/>
              </div>
              <div>
                <h1>
                Computational Intelligence for <br/>Information, Security and<br/> Communication Applications
                </h1>
                <br/>
                <h1>CIISCA - 2023</h1>
              </div>
            </div>
            
            
          </div>
         
        </section>
        <section className="w-3/5 h-full bg-white flex flex-col items-center py-10 mx-auto z-1">
          <div className="text-4xl font-semibold tracking-wide ">About GAT</div>
          <div className="py-10 font-normal leading-9 text-justify">
            About GAT Global Academy of Technology (GAT), is an Autonomous
            Institute affiliated to VTU, Belagavi established in the year 2001
            located in a sprawling campus of 10-acre land in Bengaluru,
            Karnataka. The institute has built a reputation for having set high
            benchmarks in Quality education and commitment of an ideal campus
            for students to hone their academics by providing ample
            opportunities & immense focus on hand-on learning. The campus brims
            with more than 3500 students and 300 experienced staffs involved in
            effective Teaching and Learning Process. GAT has all the
            state-of-the-art infrastructure and aims at bridging the gap between
            academia and industry by signing MoUs like the ones with Infosys,
            Power research and development consultants, Lema Labs, Advanced
            Electronics systems, Toyota Ltd, etc. GAT has inculcated research
            activities with academics to enhance the scholastic standards in
            teaching and the quality of output by offering 9 UG (BE) Programmes
            and also MBA Programme. It offers research assistance to the faculty
            in collaboration with institutions of repute like IIIT Allahabad &
            Mahatma Gandhi University, Kottayam.
          </div>
          <div className="text-4xl font-semibold tracking-wide ">
            About Department
          </div>
          <div className="py-10 font-normal leading-9 text-justify">
            The Department of Artificial Intelligence & Data Science (AI & DS)
            is the youngest branch of Global Academy of Technology, established
            in 2020. The department has fostered excellence in undergraduate
            education while advancing research that pushes the boundaries of
            Machine Learning and Artificial Intelligence. The curriculum of the
            AI&DS program is designed to provide necessary basics in Computer
            science engineering with specialized knowledge and skills in
            Artificial Intelligence, Machine Learning, Deep Learning, Data
            Mining, Big Data and Natural Language Processing. The department
            comprises of faculty members with long academic experience in the
            domain and pursuing research activities in all related disciplines
            of Artificial Intelligence and Data Science. The key highlights of
            AI & DS are: Research oriented teaching, Student centric through
            early internship opportunities in IITs, NITs and in IIITs, promoting
            innovative research and development in Artificial Intelligence and
            Data Science and its allied fields in collaboration with industries.
            As a result of this students are actively involved in research
            publications and Mini Projects. Department of AI & DS focuses on to
            prepare the students for solving real-world problems using AI by
            imparting engineering skills through experiential learning mode and
            to provide a pleasant environment in pursuit of excellence by
            keeping high personal and professional values and ethics.
          </div>

          <div className="text-4xl font-semibold tracking-wide ">
            About CIISCA
          </div>
          <div className="py-10 font-normal leading-9 text-justify">
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
          <div className="w-full rounded-lg border-zinc-300 border select-none">
            <table className="w-full table-auto shadow-lg shadow-gray-300 rounded-lg ">
              <thead className="w-full bg-gat h-14 rounded-t-lg">
                <th
                  colSpan={2}
                  className="text-2xl bg-gat text-white font-semibold tracking-wide  rounded-t-lg"
                >
                  Important Dates
                </th>
              </thead>
              <tbody className="font-normal text-base rounded-r text-left">
                <tr className="w-full h-14 rounded-r">
                  <td className="px-10 rounded-l">
                    Last Date for Paper Submission
                  </td>
                  <td className="px-10 rounded-r">15th May, 2023</td>
                </tr>
                <tr className="w-full h-14 bg-zinc-300 rounded-r">
                  <td className="px-10 rounded-l">
                    Notification of acceptance
                  </td>
                  <td className="px-10 rounded-r">31st May, 2022</td>
                </tr>
                <tr className="w-full h-14 rounded-r">
                  <td className="px-10 rounded-l">
                    Camera Ready Paper Submission
                  </td>
                  <td className="px-10 rounded-r">5th June, 2023</td>
                </tr>
                <tr className="w-full h-14 bg-zinc-300 rounded-r">
                  <td className="px-10 rounded-l">
                    Last Date for Registration
                  </td>
                  <td className="px-10 rounded-r">6th June, 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 flex flex-col justify-center mx-auto py-4 tracking-wide">
            <div className="flex flex-row">
              <div>Conference Brochure : </div>
              <Link
                href="/assets/brochure.pdf"
                className="text-blue-500 ml-2 cursor-pointer"
                download
              >
                Click here
              </Link>
            </div>
            <div className="flex flex-row">
              <div>Conference Poster : </div>
              <Link
                href="/assets/poster.pdf"
                className="text-blue-500 ml-2 cursor-pointer"
                download
              >
                Click here
              </Link>
            </div>
            <div className="flex flex-row">
              <div>For paper Submission :</div>
              <Link
                href="https://easychair.org/conferences/?conf=ciisca2023
"
                className="text-blue-500 ml-2 cursor-pointer"
              >
                Click here
              </Link>
            </div>
            <div className="flex flex-row">
              <div>For Templates and Instructions : </div>
              <Link
                href="https://www.ieee.org/conferences/publishing/templates.html"
                className="text-blue-500 ml-2 cursor-pointer"
              >
                Click here
              </Link>
            </div>
            <div className="flex flex-row">
              <div className="cursor-pointer">
                For any queries contact:
                <a
                  className="text-blue-500 ml-2 cursor-pointer"
                  href="mailto:ciisca2023@gmail.com"
                >
                  ciisca2023@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-3/5 h-full bg-white flex flex-col items-center mx-auto">
          <div className="text-4xl font-semibold tracking-wide ">
            Conference Tracks
          </div>
          <div className="flex w-full self-center justify-self-center my-10 space-x-4">
            <div className="w-full text-left  space-y-2">
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate ">
                Electronics Devices, Circuits and Systems
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Network Technologies and Systems
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal  truncate">
                Signal Processing
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Data Mining and Big Data Analysis
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Communication Technologies and Systems
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Bioinformatics and Machine Learning Algorithms
              </div>
            </div>
            <div className="w-full text-left space-y-2">
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Multimedia Processing Technologies and Systems
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Language Technologies and Information Retrieval
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Robotics and Artificial Intelligence
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Power Electronics and Control Engineering
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Security, Privacy and Digital Forensics
              </div>
              <div className="h-10 w-full bg-gat bg-opacity-30 rounded-lg items-center flex px-10 text-lg font-normal truncate">
                Internet of Things
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-3/5 h-40 flex mx-auto my-10">
            <div className="h-full w-1/2 m-4 flex flex-col justify-center items-center">
              <div className="text-2xl font-semibold tracking-wide">In Association With</div>
              <img
                src="https://file.keoaeic.org/uploads/ueditor/image/20191226/IEEE-CS-CPS.jpg"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
            <div className="h-full w-1/2 m-4 flex flex-col justify-center items-center">
              <div className="text-2xl font-semibold tracking-wide">Endrosed By</div>
              <img
                src={'/assets/ciiscalogo.jpeg'}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="h-full w-1/2 m-4 flex flex-col justify-center items-center">
              <div className="text-2xl font-semibold tracking-wide">Academic Partner</div>
              <img
                src="https://bussinfo.iiita.ac.in/images/favicon.gif"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
        <section>
          <img src="/assets/CIISCA-Poster.pdf" alt="" />
        </section>
        <Footer />
      </div>
    </>
  );
}

//  https://easychair.org/conferences/?conf=ciisca2023
// paper-templates https://www.ieee.org/conferences/publishing/templates.html.
//
