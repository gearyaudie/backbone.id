import React, { useState } from 'react';

const FAQComponent = ({ items }: any) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="accordion-arrow-icon" data-accordion="open">
      {items.map((item: any, index: number) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
              data-accordion-target={`#accordion-arrow-icon-body-${index + 1}`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-arrow-icon-body-${index + 1}`}
              onClick={() => onTitleClick(index)}
            >
              <span>{item.title}</span>
              <svg
                className={`w-4 h-4 shrink-0 ${activeIndex === index ? 'rotate-180' : ''}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-arrow-icon-body-${index + 1}`}
            className={`${activeIndex === index ? '' : 'hidden'} p-5 border border-b-0 border-gray-200 dark:border-gray-700`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;