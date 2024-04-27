import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-600 p-4 flex flex-col w-full p-20 rounded-lg shadow-md bg-white">
      <h1 className="text-2xl font-semibold text-left text-black">Chats</h1>

      <div className="mt-5"></div>
      <SearchInput />

      <div className="divider px-1"></div>
      <Conversations />

      <LogoutButton />
    </div>

    // <div className="flex flex-col border-r border-slate-600 items-center h-full mx-auto bg-white">
    //   {/* <div className="w-full p-4 rounded-lg shadow-md "> */}
    //   <h1 className="text-2xl font-semibold text-left text-black">Chats</h1>

    //   <div className="mt-5"></div>

    //   <SearchInput />

    //   <div className="divider px-1"></div>

    //   <Conversations />

    //   <LogoutButton />
    //   {/* </div> */}
    // </div>
  );
};

export default Sidebar;
