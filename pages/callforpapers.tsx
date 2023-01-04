import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const callforpapers = () => {
  return (
    <>
      <div className="w-full">
        <Header />
        <div className="mt-20 tracking-wide">
          <div className="text-2xl md:text-4xl font-semibold tracking-wide text-center m-2">
            Call For Papers
          </div>
          <div className="font-semibold tracking-wide text-md md:text-lg leading-normal w-1/2 p-auto m-auto">
            Dear Prospective Author,
            <br />
            Welcome to CIISCA 2023!!!
          </div>
          <br />
          <div className="font-normal text-sm md:text-lg leading-normal w-1/2 text-justify p-auto m-auto">
            The Conference aims to provide an active platform for research
            scientists, engineers, and practitioners throughout the world to
            present their latest research findings, ideas, and applications in
            the fields of interest which fall under the scope of IEEE.
            Prospective authors are invited to submit original research papers
            (not being considered for publication elsewhere) in standard IEEE
            conference template describing new theoretical and/or experimental
            research results in the following tracks (but are not limited to)
          </div>
          <div className="text-justify">
            <div className="text-xl md:text-3xl font-medium tracking-wide text-center m-2">
              Conference Tracks
            </div>
            <div className="flex flex-col w-full ">
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Electronics Devices, Circuits and Systems -{" "}
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto">
                {" "}
                Micro and nano electronics and materials, Circuit theory and
                design, Circuit analysis and simulation, CAD; testability, fault
                tolerant design, minimisation of circuits and CAD for VLSI;
                novel or improved electronic devices for both traditional and
                emerging technologies including nanoelectronics and MEMs, device
                and process characterisation, device parameter extraction
                schemes; mathematics of circuits and systems theory; test and
                measurement techniques involving electronic circuits, circuits
                for industrial applications, sensors and transducers
              </div>
              <br />
              <div className=" font-medium tracking-wide text-sm md:text-lg w-1/2 p-auto m-auto ">
                Network Technologies and Systems -
              </div>
              <div className=" font-normal leading-normal w-1/2 p-auto m-auto text-sm md:text-lg">
                Ad-hoc Networks, Mesh Networks, Channel Modeling and
                Propagation, Coding for Wireless Systems, Diversity and
                Space-time Techniques, End-to-end Design Techniques, Error
                Control Coding, Iterative Techniques for Joint Optimization,
                Network Performance, Reliability, and Quality of Service ,
                Resource Allocation over Wireless Networks , Security,
                Authentication, and Cryptography, Ultra Wide-band Systems,
                Vehicular Networks , Wireless Multimedia Communication, Wireless
                Sensor Networks , Wireless system Architectures and
                Applications, Wireless Traffic and Routing
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Signal Processing -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Biomedical Signal and Information: Theory and Methods,
                Bio-inspired Signal Processing and System, Biomedical Circuits
                and Systems. Audio Processing, Speech Information Processing:
                Recognition, Synthesis, Modern Signal Processing Theory and
                Method, Detection and Parameter Estimation, Array Processing and
                Multi-channels, Signal and Information Processing in
                Applications. Any other topics related to signal processing and
                applications but included in the list.
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Data Mining and Big Data Analysis -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Data Preprocessing, Association mining, Clustering,
                Classification, Prediction, Regression, Optimization Clustering,
                Data Integration, Metadata Management, and Interoperability,
                DataMining and Knowledge Discovery, Feature Selection and
                Extraction, Information Fusion, Information Retrieval and
                Information Extraction, Social Networks, Social Web, Graph, and
                Personal Information Management, Knowledge and Data Engineering
                Tools and Techniques, Knowledge Reengineering, Knowledge
                Representation, Knowledge Based Software Engineering, Web-Based
                Knowledge Management, Knowledge Discovery, Models for BigData,
                BigData Processing, Architectures and Designs of Big data,
                BigData Infrastructure, Cloud/Grid/Stream Computing for BigData,
                High Performance/Parallel Computing Platforms for BigData,
                System Architectures, Platforms, Design, and Deployment for
                BigData , Energy-efficient Computing for BigData , Programming
                Models and Environments for Cluster, Cloud, and Grid Computing,
                Advanced Database and Web Applications for BigData, Data Model
                and Structure for BigData, Data Preservation, Data Management
                for Mobile, Pervasive and Grid Computing, BigData Streaming,
                BigData Machine Learning, Scalability, and Efficiency of
                Algorithms in Big data processing, BigData Search, Mining and
                Processing, Search, Store and Process BigData in Distributed,
                Grid and Cloud Systems , Semantic-based BigData Analytics and
                Processing, Multi-Structured Multi-Domain BigData, Fusion and,
                Integration Ontology Representations and Processing in BigData,
                Automatic and Machine Learning, Methods for BigData, Hadoop and
                MapReduce based Approaches for BigData Processing, BigData,
                Security and Privacy, Big data Applications.
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Communication Technologies and Systems -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Adaptive Modulation and Coding, Multiple Access Techniques, CDMA
                and Spread Spectrum, OFDM and Multiuser Communication System,
                MIMO System Design and Analysis, RF & Antenna Design, Mobile and
                Vehicular antennas, RFID antennas and systems, Broadband /
                ultra-wideband antennas, Software-defined /Cognitive Radio,
                Channel Estimation and Synchronization, Detection and Estimation
                Theory, Distributed Coding and Processing, Diversity and Fading
                Countermeasures, Multiuser Diversity, Network Coding, Power Line
                Communication, UWB Communication, Space Time Coding, Optical
                Wireless Communication, OFDM for Optical System, Optical MIMO,
                Radio over Fiber, Cooperative Communication, Dynamic Spectrum
                Management, Cross Layer Design, Green Communication
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Bioinformatics and Machine Learning Algorithms -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Next Generation Sequencing, Protein/RNA structure prediction,
                Annotation of Sequence and structural motifs, Biochemical
                pathways and biological networks, Biomedical literature mining,
                D​rug design and Modelling​, Ontology and ​Biological databases
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Multimedia Processing Technologies and Systems -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Multimedia Processing Technologies and Systems track cover all
                the areas related to image and video processing and systems
                including but not limited to: Image Processing & Video
                Processing, Image and Video communications, Electronic Imaging,
                Biomedical Imaging, Image and Video systems, Remote Sensing
                Applications, Multimedia Technology and Applications, Image
                Indexing, Retrieval, Watermarking, Steganography, Visual Secrete
                Sharing, Biometrics, Image & Video Compression Techniques, Image
                and Video Processing applications for deprived,
                differently-able, rural, and elderly peoples
              </div>
              <br />
              {/* <div className=" font-medium tracking-wide text-lg md:text-xl leading-normal w-1/2 p-auto m-auto ">
                Power Systems -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                All related areas
              </div> */}
              {/* <br /> */}
              <div className=" font-medium tracking-wide text-xl w-1/2 p-auto m-auto ">
                Language Technologies and Information Retrieval -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Language modelling, Application of language technology in
                document summarization, machine translation, automatic essay
                evaluation, etc. Tools and techniques for aprsing, chunking,
                tagging, morphological anaylysis and generation. Special
                emphasys on Indic languages. Question-answerring and recommonder
                systems. Contextual search. Any other topics related to signal
                processing and applications but included in the list.
              </div>
              {/* <br /> */}
              {/* <div className=" font-medium tracking-wide text-lg md:text-xl leading-normal w-1/2 p-auto m-auto ">
                Machines and Instrumentation -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                All related areas
              </div>
              <br /> */}
              <div className=" font-medium tracking-wide text-lg md:text-xl leading-normal w-1/2 p-auto m-auto ">
                Robotics and Artificial Intelligence -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Aerial Robotics and Unmanned aerial vehicles, Agricultural
                Robotics and Automation, Algorithms for planning and control of
                Robot motions, Algorithms for Trajectory planning, Autonomous
                Ground Vehicles and Intelligent Transportation Systems, Bio
                Robotics, Cognitive Robotics, Computer and Robot Vision,
                Haptics, Human Robot Interactions and co-ordinations, Humanoid
                robotics- Multi modal gesture based communication, Biped
                locomotion control , Kinematics, dynamics and control of
                manipulating as well as mobile robots, Mechanisms and Design,
                Model based optimization for Robotics, Networked Robotics,
                Parallel manipulators, Rehabilitation and Assistive Robotics,
                Robot learning with machine learning techniques, Robotic hands
                ,Grasping and Manipulation, Safety, Security and Rescue
                Robotics, Software Engineering for Robotics and Automation,
                Space Robotics, Surgical Robotics, Tele Robotics, Any other
                topics related to robotics but included in the list.
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Power Electronics and Control Engineering -
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                Modeling, simulations and control of power electronics circuits,
                Power electronics converters, DC-DC, DC-AC, AC-DC and AC-AC
                conversion, Chopers, Rectifiers, Inverters, Cyclo-Converters,
                Modulation methods and control, Electrical drives, control and
                applications, AC and DC motor drives, FACTS and Custom Power
                Devices, Advances in renewable energy power conversion, Wind,
                solar, biomass, Wave energy system and Fuel cell, power control,
                Physical system modeling and control, Advanced control methods,
                Adaptive and nonlinear control system, Optimal and robust
                control, Intelligent control, Neural network and Fuzzy Controls,
                Industrial process control, Digital controllers
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Security, Privacy and Digital Forensics
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                All related areas
              </div>
              <br />
              <div className=" font-medium tracking-wide text-lg md:text-xl w-1/2 p-auto m-auto ">
                Internet of Things
              </div>
              <div className=" font-normal text-sm md:text-lg leading-normal w-1/2 p-auto m-auto ">
                All related areas
              </div>
              <br />
            </div>
          </div>
        </div>
        <section className="flex w-3/5 mx-auto justify-center my-10">
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
        </section>
        <Footer />
      </div>
    </>
  );
};

export default callforpapers;
