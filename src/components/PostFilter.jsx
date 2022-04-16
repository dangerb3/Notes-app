import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function PostFilter({
  filter, setFilter, limit, setLimit, infinityScroll
}) {
  return (
    <div>
      <MyInput
        type="text"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Find..."
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By description' },
        ]}
      />
      {!infinityScroll && (
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Items count on page"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Show all' }
        ]}
      />
      )}
    </div>
  );
}

export default PostFilter;
