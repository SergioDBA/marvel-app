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
    //   <div class="max-w-xs overflow-hidden rounded-lg shadow-lg">
    //   <img class="object-cover w-full h-48" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky"/>
    //   <div class="px-6 py-4">
    //     <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
    //     <p class="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
    //   </div>
    // </div>
  );
};

export default ComicItem;
