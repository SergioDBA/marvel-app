import { useReducer } from 'react';

const numberOfPages = 8;

const defaultPageState = {
  page: 1,
  pageToChange: null,
};

const pageReducer = (state, action) => {
  if (action.actionPage === 'NEXT') {
    if (state.page === numberOfPages) {
      return { page: state.page, pageToChange: null };
    }
    const page = Number(state.page) + 1;
    return { page: page, pageToChange: null };
  }
  if (action.actionPage === 'PREV') {
    if (state.page === 1) {
      return { page: state.page, pageToChange: null };
    }
    const page = Number(state.page) - 1;
    return { page: page, pageToChange: null };
  }
  if (action.actionPage === 'SELECTED') {
    const page = action.pageToChange;
    return { page: page, pageToChange: null };
  }
};

const PaginationBar = () => {
  const [actualPage, dispatchPageAction] = useReducer(pageReducer, defaultPageState);

  const nextPageHandler = () => {
    dispatchPageAction({ actionPage: 'NEXT' });
  };
  const previousPageHandler = () => {
    dispatchPageAction({ actionPage: 'PREV' });
  };
  const selectedPageHandler = (e) => {
    const page = Number(e.target.getAttribute('data-key'));
    dispatchPageAction({ actionPage: 'SELECTED', pageToChange: page });
  };
  console.log('----------------------------------', actualPage.page);

  const classesUnselected = 'h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-indigo-100';
  const classesSelected = 'h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 focus:shadow-outline';

  const paginationNumbers = [...Array(numberOfPages).keys()].map((number) => {
    return (
      <button
        key={Number(number) + 1}
        className={actualPage.page === Number(number) + 1 ? classesSelected : classesUnselected}
        data-key={Number(number) + 1}
        onClick={selectedPageHandler}
      >
        {Number(number) + 1}
      </button>
    );
  });
  console.log(paginationNumbers);
  return (
    <nav aria-label="Page navigation" className="m-9 p-2">
      <ul className="inline-flex">
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={previousPageHandler}
          >
            Prev
          </button>
        </li>
        <li>{paginationNumbers}</li>
        <li>
          <button
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
            onClick={nextPageHandler}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationBar;
