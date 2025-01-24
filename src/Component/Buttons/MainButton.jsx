import { useState } from 'react';
import ButtonOne from './ButtonOne'; // Replace with your actual Button components
import ButtonTwo from './ButtonTwo';
import ButtonThree from './ButtonThree';
import ButtonFour from './ButtonFour';
import ButtonFive from './ButtonFive';
import ButtonSix from './ButtonSix';

function MainButton() {
  const [button, setButton] = useState(1);

  // List of buttons to show, similar to loginPages
  const buttons = [
    <ButtonOne />,
    <ButtonTwo />,
    <ButtonThree />,
    <ButtonFour />,
    <ButtonFive />,
    <ButtonSix />,
  ];

  console.log('Current button:', button);

  return (
    <div className="max-w-md mx-auto py-12">
      {/* Render the current button */}
      {buttons[button - 1]}

      {/* Navigation buttons to switch between the buttons */}
      <div className="flex justify-center gap-x-2 mt-4">
        {[...Array(buttons.length)].map((_, index) => (
          <button
            key={index}
            className={`border p-2 rounded ${button === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => setButton(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainButton;
