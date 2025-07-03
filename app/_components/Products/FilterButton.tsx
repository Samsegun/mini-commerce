import { Dispatch, SetStateAction } from 'react';

type FilterProps = {
    filter: string;
    isActive: boolean;
    onClick: Dispatch<SetStateAction<string>>;
};

const FilterButton = ({ filter, isActive, onClick }: FilterProps) => (
    <button
        onClick={() => onClick(filter)}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            isActive
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
        {filter}
    </button>
);

export default FilterButton;
