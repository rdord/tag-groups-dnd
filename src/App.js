import React from 'react';
import './App.css';
import { tagsData, groupsData, groupOrderData } from './data';
import Group from './components/Group';
import Tag from './components/Tag';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const handleOnDragEnd = () => {};

  const renderGroups = groupOrderData.map(groupsId => {
    const group = groupsData[groupsId];
    const tags = group.tagIds.map(tagIds => tagsData[tagIds]);

    return (
      <Group key={group.id} group={group}>
        {tags.map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} />
        ))}
      </Group>
    );
  });

  return <DragDropContext onDragEnd={handleOnDragEnd}>{renderGroups}</DragDropContext>;
};

export default App;
