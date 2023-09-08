const Category = () => {
  return (
    <button
      className="rounded-full border-2 bg-white overflow-hidden flex flex-col items-center justify-center 
          opacity-50
      "
    >
      <img
        src={require(`../Images/Movies.png`)}
        className="h-1/2 w-1/2"
        alt=""
      />
    </button>
  );
};

export default Category;
