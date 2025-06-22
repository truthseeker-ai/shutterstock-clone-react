import React from 'react';

const keywords = [
  'Dog', 'Happy', 'Smile', 'Cute', 'Puppy', 'Joy', 'Background', 'Animal',
  'Portrait', 'Yellow', 'Concept', 'Studio', 'Beauty'
];

const RelatedKeywords = () => {
  return (
    <div className="flex flex-wrap gap-2 px-6 py-3 bg-white border-b border-gray-300">
      <span className="font-semibold mr-2">Related keywords:</span>
      {keywords.map((keyword) => (
        <button
          key={keyword}
          className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm cursor-pointer"
        >
          {keyword}
        </button>
      ))}
    </div>
  );
};

export default RelatedKeywords;
