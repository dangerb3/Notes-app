import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

function PostFilter({ filter, setFilter }) {
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
    </div>
  );
}

export default PostFilter;
