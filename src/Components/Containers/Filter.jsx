import { useState } from 'react';
import Button from '../UI/Button';
const Filter = ({ onFilterByTag }) => {
  const [tagFilter, setTagFilter] = useState('');

  const handleFilterByTag = () => {
    onFilterByTag(tagFilter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by Tag"
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
        className="input"
      />
      <Button onClick={handleFilterByTag} className="button" >Filter</Button>
    </div>
  );
};

export default Filter;