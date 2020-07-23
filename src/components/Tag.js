import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Tag = ({ tag, index }) => {
  return (
    <Draggable draggableId={tag.id} index={index}>
      {provided => (
        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          {tag.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Tag;
