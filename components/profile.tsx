function Profile({ img, name, role, dept, ed, RI, date }: any) {
  return (
    <div className="w-auto space-x-10 p-5 rounded-xl h-auto flex items-center shadow-lg border hover:shadow-2xl hover:-translate-y-1 transition-all duration-100 ease-out">
      <div className="h-56 w-56">
        <img
          className="h-56 w-56 object-cover rounded-lg border"
          src={img}
          alt=""
        />
      </div>
      <div className="space-y-1">
        <div className="font-bold text-gat text-2xl tracking-wide">{name}</div>
        <div className="font-extralight font-mono tracking-wide">{role}</div>
        <div className="font-extralight font-mono tracking-wide">{dept}</div>
        <div className="font-extralight font-mono tracking-wide">{ed}</div>
        <div>
          <strong className="text-gat ">Research Interests : </strong> {RI}
        </div>
        <div>
          <strong className="text-gat">Date / Time : </strong>
          <span className="font-medium">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
