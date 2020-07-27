import React, { useState } from 'react';
import './App.css';
import data from './data';
import Group from './components/Group';
import Tag from './components/Tag';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
  /* display: flex; */
`;

const App = () => {
  const [groups, setGroups] = useState(data.groups);

  const handleOnDragEnd = ({ draggableId, source, destination }) => {
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startGroup = groups[source.droppableId];
    const finishGroup = groups[destination.droppableId];

    startGroup.tagIds.splice(source.index, 1);
    finishGroup.tagIds.splice(destination.index, 0, draggableId);

    setGroups(prevState => ({ ...prevState, [startGroup.id]: startGroup, [finishGroup.id]: finishGroup }));
  };

  const renderGroups = data.groupOrder.map(groupsId => {
    const group = groups[groupsId];
    const tags = group.tagIds.map(tagIds => data.tags[tagIds]);

    return (
      <Group key={group.id} group={group}>
        {tags.map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} />
        ))}
      </Group>
    );
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Container>{renderGroups} </Container>
    </DragDropContext>
  );
};

export default App;
