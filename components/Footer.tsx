import Link from "next/link";

function Footer() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 w-full bg-black py-10 text-white px-20 gap-10">
      {/* <div></div> */}
      <div className="w-full">
        <div className="text-lg tracking-wider">CIISCA 2023</div>
        <div className=" w-4/5 mt-8 text-left">
          CIISCA 2023 is an International Conference focused exclusively on
          academicians, industrialist and students to present their latest
          research results, ideas, developments, and applications in all areas
          of Information Sciences, Security and Communication.
        </div>
      </div>
      <div className=" w-full">
        <div className="text-lg tracking-wider">Useful Links</div>
        <div className="flex flex-col space-y-4 tracking-wider mt-8 text-left">
          <Link href="/keynote">Speakers</Link>
          <Link href="/callforpapers">CFP</Link>
        </div>
      </div>
      <div className=" w-full">
        <div className="text-lg tracking-wider">About</div>
        <div className="flex flex-col space-y-4 tracking-wider mt-8 text-left">
          <Link href="/gat">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="https://goo.gl/maps/h8otqP7Zxnvinwh16">Locate Us</Link>
        </div>
      </div>
      <div className=" w-full">
        <div className="text-lg tracking-wider">Have questions?</div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
