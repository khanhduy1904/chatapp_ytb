import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  return (
    <form className="px-2 my-2">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-white
           border-gray-600 text-black"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3 text-black"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
