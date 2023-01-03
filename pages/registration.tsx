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
          <div className="w-full rounded-lg border-zinc-300 border my-10">
            <table className="w-full table-auto shadow-lg shadow-gray-300 rounded-lg ">
              <thead className="w-full bg-gat h-14 rounded-t-lg">
                <td
                  colSpan={9}
                  className="text-2xl text-white font-semibold tracking-wide  rounded-t-lg"
                >
                  Indian Delegates (INR)
                </td>
              </thead>
              <tbody className="font-normal text-base rounded-r text-left">
                <tr>
                  <th rowSpan={3}>Category</th>
                  <th colSpan={4} className="text-center">
                    Early Bird Registration{" "}
                  </th>
                  <th
                    colSpan={4}
                    className="text-center border-l-4  bored border-l-gray-300"
                  >
                    Normal Registration
                  </th>
                </tr>
                <tr>
                  {/* <td></td> */}
                  <th colSpan={2} className="text-center bg-misc-1">
                    Academia/Professionals
                  </th>
                  <th colSpan={2} className="text-center bg-misc-1">
                    Students
                  </th>
                  <th
                    colSpan={2}
                    className="text-center bg-misc-1 border-l-4 bored border-l-gray-300"
                  >
                    Academia/Professionals
                  </th>
                  <th colSpan={2} className="text-center bg-misc-1">
                    Students
                  </th>
                </tr>
                <tr className="text-center ">
                  {/* <td></td> */}
                  <th className="bg-misc-2" colSpan={1}>
                    IEEE{" "}
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    Non IEEE
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    IEEE{" "}
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    Non IEEE
                  </th>
                  <th
                    className="bg-misc-2 border-l-4 border-l-gray-300"
                    colSpan={1}
                  >
                    IEEE{" "}
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    Non IEEE
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    IEEE{" "}
                  </th>
                  <th className="bg-misc-2" colSpan={1}>
                    Non IEEE
                  </th>
                </tr>
                <tr>
                  <th>Presenter</th>
                  <td>9000</td>
                  <td>10000</td>
                  <td>7000</td>
                  <td>8000</td>
                  <td className="border-l-4 bored border-l-gray-300">9000</td>
                  <td>10000</td>
                  <td>7000</td>
                  <td>8000</td>
                </tr>
                <tr>
                  <th>Listener</th>
                  <td>4000</td>
                  <td>5000</td>
                  <td>3000</td>
                  <td>4000</td>
                  <td className="border-l-4 bored border-l-gray-300">4000</td>
                  <td>5000</td>
                  <td>3000</td>
                  <td>4000</td>
                </tr>
                <tr>
                  <th>Ph.D. Colloquium</th>
                  <td>2500</td>
                  <td>2500</td>
                  <td>2500</td>
                  <td>2500</td>
                  <td className="border-l-4 bored border-l-gray-300">2500</td>
                  <td>2500</td>
                  <td>2500</td>
                  <td>2500</td>
                </tr>
                <tr className="bg-gat">
                  <td
                    colSpan={9}
                    className="text-2xl text-white font-semibold tracking-wide text-center"
                  >
                    Foreign Delegates (USD)
                  </td>
                </tr>
                <tr>
                  <th>Presenter</th>
                  <td>300</td>
                  <td>400</td>
                  <td>200</td>
                  <td>300</td>
                  <td className="border-l-4 bored border-l-gray-300">300</td>
                  <td>400</td>
                  <td>200</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>Listener</th>
                  <td>150</td>
                  <td>200</td>
                  <td>100</td>
                  <td>150</td>
                  <td className="border-l-4 bored border-l-gray-300">150</td>
                  <td>200</td>
                  <td>100</td>
                  <td>150</td>
                </tr>
                <tr>
                  <th className="rounded-bl-md">Ph.D. Colloquium</th>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                  <td className="border-l-4 bored border-l-gray-300">100</td>
                  <td>100</td>
                  <td>100</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tracking-wide text-lg mb-10">
            *GST included with the amount.
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
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              In case of IEEE member, valid proof is needed at the registration.
            </div>
            <div className="flex items-center w-full h-auto p-2  text-base tracking-wide font-normal bg-red-600 rounded-lg">
              If the author is registered as the paper presenter in the
              conference, he/she can present another paper at the reduced fee
              @50% of the original registration fee, i.e. the total registration
              fee will be 1.5 times of the cost of registration of 1 paper. This
              discount is applicable only for one additional paper to be
              presented by the same author.
            </div>
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
