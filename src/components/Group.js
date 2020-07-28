import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  padding: 14px 0 1px 17px;
  margin: 0;
  font-size: 17px;
  font-weight: 400;
`;

const TagList = styled.div`
  padding: 8px;
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? '#FCF7C1' : 'inherit')};
  min-height: 64px;
  display: flex;
`;

const Handle = styled.div`
  display: flex;
  align-items: center;
`;

const Group = ({ group, children, index }) => (
  <Draggable draggableId={group.id} index={index}>
    {(provided, snapshot) => (
      <Container ref={provided.innerRef} {...provided.draggableProps}>
        <Content>
          <Droppable droppableId={group.id} direction='horizontal' type='tag'>
            {(provided, snapshot) => (
              <TagList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                {children}
                {provided.placeholder}
              </TagList>
            )}
          </Droppable>
        </Content>
        <Handle {...provided.dragHandleProps}>
          <DragIndicatorIcon />
        </Handle>
      </Container>
    )}
  </Draggable>
);

export default Group;
