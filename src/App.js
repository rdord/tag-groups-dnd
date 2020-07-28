import React, { useState } from 'react';
import './App.css';
import data from './data';
import Group from './components/Group';
import Tag from './components/Tag';
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  /* display: flex; */
`;

const App = () => {
  const [groups, setGroups] = useState(data.groups);
  const [groupOrder, setGroupOrder] = useState(data.groupOrder);

  const handleOnDragEnd = ({ draggableId, source, destination, type }) => {
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'group') {
      const newGroupOrder = Array.from(groupOrder);
      newGroupOrder.splice(source.index, 1);
      newGroupOrder.splice(destination.index, 0, draggableId);

      setGroupOrder(newGroupOrder);
    }

    if (type === 'tag') {
      const startGroup = groups[source.droppableId];
      const finishGroup = groups[destination.droppableId];

      startGroup.tagIds.splice(source.index, 1);
      finishGroup.tagIds.splice(destination.index, 0, draggableId);

      setGroups(prevState => ({ ...prevState, [startGroup.id]: startGroup, [finishGroup.id]: finishGroup }));
    }
  };

  const renderGroups = groupOrder.map((groupsId, index) => {
    const group = groups[groupsId];
    const tags = group.tagIds.map(tagIds => data.tags[tagIds]);

    return (
      <Group key={group.id} group={group} index={index}>
        {tags.map((tag, index) => (
          <Tag key={tag.id} tag={tag} index={index} />
        ))}
      </Group>
    );
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='all-groups' type='group'>
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {renderGroups}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
