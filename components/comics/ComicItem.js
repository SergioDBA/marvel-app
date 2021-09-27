const ComicItem = () => {
  return (
    // <li>
    //   <div>img</div>
    //   <div>
    //     <h3>Name</h3>
    //     <p>Edition</p>
    //     <p>Creator</p>
    //   </div>
    //   <div>add to cart</div>
    // </li>

    <li className="shadow flex flex-col bg-gray-200 rounded-lg m-2">
      <div className="h-72 bg-gray-400 rounded-lg">img</div>
      <div className="flex flex-col items-start mt-4 p-5">
        <h4 className="text-xl font-semibold">Comic Name</h4>
        <p className="text-sm w-64">Edition</p>
        <p className="text-sm w-64">Creator</p>
        <button className="m-5 inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800"></button>
      </div>
    </li>
  );
};

export default ComicItem;
