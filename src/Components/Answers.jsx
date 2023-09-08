const Answers = () => {
  return (
    <div className="w-1/2 p-10 flex flex-col items-center justify-center">
      <ul>
        <li className="bg-white p-5 border-2 shadow-sm transition-all duration-200 cursor-pointer mb-2 rounded-2xl text-xl text-center hover:shadow-xl">
          Answer
        </li>
      </ul>
      <button className="bg-green-500 mt-5 w-1/2 text-xl text-white p-2 rounded-xl hover:scale-110 transition-all duration-200">
        Submit
      </button>
    </div>
  );
};

export default Answers;
