import { useState } from 'react';
import LoginPageOne from './LoginPageOne';
import LoginPageTwo from './LoginPageTwo';
import LoginPageThree from './LoginPageThree';
import LoginPageFour from './LoginPageFour';
import LoginPageFive from './LoginPageFive';
import LoginPageSix from './LoginPageSix';
import LoginPageSeven from './LoginPageSeven';
import LoginPageEight from './LoginPageEight';
import LoginPageNine from './LoginPageNine';

function MainLogin() {
  const [page, setPage] = useState(1);

  const loginPages = [
    <LoginPageOne />,
    <LoginPageTwo />,
    <LoginPageThree />,
    <LoginPageFour />,
    <LoginPageFive />,
    <LoginPageSix />,
    <LoginPageSeven />,
    <LoginPageEight />,
    <LoginPageNine />,
  ];

  console.log('Current page:', page);

  return (
    <div className="max-w-md mx-auto py-12">
      {loginPages[page - 1]}

      <div className="flex justify-center gap-x-2 mt-4">
        {[...Array(loginPages.length)].map((_, index) => (
          <button
            key={index}
            className={`border p-2 rounded ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainLogin;