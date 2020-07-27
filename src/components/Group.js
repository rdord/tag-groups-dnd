import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 100$;
`;

const Title = styled.h1`
  padding: 8px;
`;

const TagList = styled.div`
  padding: 8px;
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? '#FCF7C1' : 'white')};
  min-height: 64px;
  display: flex;
`;

const Group = ({ group, children }) => (
  <Container>
    <Droppable droppableId={group.id} direction='horizontal'>
      {(provided, snapshot) => (
        <TagList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
          {children}
          {provided.placeholder}
        </TagList>
      )}
    </Droppable>
  </Container>
);

export default Group;
