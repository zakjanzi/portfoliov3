import React from 'react';

interface FiltersProps {
  setFilter: (filter: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ setFilter }) => {
  const filters = ["Web3", "Algorithms", "QA", "Automation", "Frontend", "Backend"];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 bg-white rounded-full ${filter === 'selected' ? 'bg-black text-white' : 'hover:bg-gray-100'} transition-colors duration-300 ease-in-out`}
          onClick={() => setFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
