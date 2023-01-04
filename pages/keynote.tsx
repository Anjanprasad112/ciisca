import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/profile";

function Keynote() {
  return (
    <>
      <div className="w-full z-0">
        <Header />
        <section className="mt-10 w-4/5 h-full bg-white flex flex-col items-center py-10 mx-auto">
          <div className="text-4xl font-semibold tracking-wide text-gat">
            Keynote Speakers
          </div>
          <div className="flex flex-col mt-10 space-y-5">
            <div className="flex space-x-5 items-center justify-center">
              <Profile
                img="https://www.csa.iisc.ac.in/~susheela/faculty-susheela.jpg"
                name="Dr. V. Susheela Devi
"
                role="Principal Research Scientist
"
                dept="Department of Computer Science and Automation "
                ed="Indian Institute of Science, Bengaluru"
                RI="Soft Computing, Machine Learning and Optimization Algorithms"
                date="10:00 to 11:00 AM (IST), June 23, 2023"
              />
              <Profile
                img="https://cstcp.iiita.ac.in/assets/img/gallery/shekhar.png"
                name="Dr. Shekhar Verma"
                role="Professor"
                dept="Department of Information Technology"
                ed="Indian Institute of Information Technology, Allahabad"
                RI="Wireless Networks, Cryptography, Multimedia, Machine Learning"
                date="01:30 to 02:30 PM (IST), June 23, 2023"
              />
            </div>
            <div className="flex space-x-5 items-center justify-center">
              <Profile
                img="https://idronline.org/wp-content/uploads/2020/12/Shankara-Prasad-profile.jpg"
                name="Dr. Shankara Prasad"
                role="Founder and Managing Trustee"
                dept=""
                ed="Sampoorna Swaraj Foundation, Bengaluru"
                RI="Block Chain, Six Sigma Technology"
                date="01:30 to 02:30 PM (IST), June 24, 2023"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Keynote;
