import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import Chip from '@material-ui/core/Chip';

const Container = styled.div`
  padding: 8px;
`;

const Tag = ({ tag, index }) => {
  return (
    <Draggable draggableId={tag.id} index={index}>
      {(provided, snapshot) => (
        <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Chip
            key={tag.name}
            label={tag.name}
            style={{
              backgroundColor: snapshot.isDragging ? '#F3A308' : tag.color,
              color: 'white'
            }}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default Tag;
