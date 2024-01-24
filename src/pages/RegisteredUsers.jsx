import Sidebar from "../components/Sidebar";
import Datatable from "../datatable/Datatable";

const RegisteredUsers = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Datatable />
      </div>
    </div>
  );
};

export default RegisteredUsers;
