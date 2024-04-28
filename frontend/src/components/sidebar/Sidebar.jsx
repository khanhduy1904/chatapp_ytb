import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import SettingButton from "./SettingButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-600 p-4 flex flex-col w-full p-20 rounded-lg shadow-md bg-white">
      <div className="flex items-end gap-40">
        <h1 className="text-2xl font-semibold text-left  text-black">Chats</h1>
        <div className="flex items-end gap-2">
          <LogoutButton />
          <SettingButton />
        </div>
      </div>

      <div className="mt-5"></div>

      <SearchInput />

      <div className="divider px-1"></div>

      <Conversations />
    </div>
  );
};

export default Sidebar;
