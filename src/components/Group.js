import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 100%;
  background-color: white;
`;

const Title = styled.h1`
  padding: 8px;
`;

const TagList = styled.div`
  padding: 8px;
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? '#FCF7C1' : 'inherit')};
  min-height: 64px;
  display: flex;
`;

const Group = ({ group, children, index }) => (
  <Draggable draggableId={group.id} index={index}>
    {(provided, snapshot) => (
      <Container ref={provided.innerRef} {...provided.draggableProps}>
        <Title {...provided.dragHandleProps}>{group.title}</Title>
        <Droppable droppableId={group.id} direction='horizontal' type='tag'>
          {(provided, snapshot) => (
            <TagList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              {children}
              {provided.placeholder}
            </TagList>
          )}
        </Droppable>
      </Container>
    )}
  </Draggable>
);

export default Group;
