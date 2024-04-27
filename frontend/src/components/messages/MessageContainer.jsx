import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[650px]  flex flex-col bg-white">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-gray-100 border-r  border-gray-600 px-4 py-2 h-15">
            <span className="label-tex text-1xl text-black">To:</span>{" "}
            <span className="text-gray-900 font-bold text-2xl ">John doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  //   const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full bg-blend-saturation">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Khanh Duy ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
