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
            Registration Details
          </div>
          <div className="text-3xl mt-10 tracking-widest text-gat ">
            REGISTRATION FEES
          </div>
          <div className="w-full m-5">
            <div className="">
              • UG/ PG Students/ Ph.D Scholars: Rs. 9,000/- <br />
              • Academicians: Rs.9,500/- <br />
              • Industry Delegates: Rs. 10,000/- <br />• International
              Delegates: $ 200/-
              <br />
            </div>
          </div>

          <div className="tracking-wide text-lg mb-10">
            *GST included with the amount.
          </div>
          <div className="w-full space-y-10">
            <div className="text-3xl mt-10 tracking-widest text-gat text-center">
              PAYMENT DETAILS
            </div>
            <div className="text-lg font-semibold">TO BE ANNOUNCED</div>
            <br />
          </div>
          <div className="flex flex-col w-full h-aut rounded-xl p-2 space-y-2 text-white">
            <div className=" text-2xl bg-red-600 rounded-lg p-2">
              <strong>Note : </strong>
            </div>
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              If the final manuscript in IEEE format exceeds 6 pages, Rs. 1000
              or USD 50 will be charged for each extra page. An additional
              amount of 18% to be added against GST for extra pages.
            </div>
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              In case of students, valid proof is needed at the registration.
            </div>
            {/* <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              In case of IEEE member, valid proof is needed at the registration.
            </div>
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              If the author is registered as the paper presenter in the
              conference, he/she can present another paper at the reduced fee
              @50% of the original registration fee, i.e. the total registration
              fee will be 1.5 times of the cost of registration of 1 paper. This
              discount is applicable only for one additional paper to be
              presented by the same author.
            </div> */}
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              An author registration in the conference is mandatory to have the
              paper included in the conference program and the proceedings. An
              attendee registration is not entitled for paper publication.
            </div>
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              All heads are non-refundable.
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Keynote;
