import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Title = styled.h1`
  padding: 8px;
`;

const TagList = styled.div`
  padding: 8px;
`;

const Group = ({ group, children }) => (
  <Container>
    <Title>{group.title}</Title>
    <Droppable droppableId={group.id}>
      {provided => (
        <TagList ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </TagList>
      )}
    </Droppable>
  </Container>
);

export default Group;
