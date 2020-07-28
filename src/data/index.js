export default {
  tags: {
    'tag-1': { id: 'tag-1', name: 'Tag 1', color: '#2B4D7E' },
    'tag-2': { id: 'tag-2', name: 'Tag 2', color: '#2B4D7E' },
    'tag-3': { id: 'tag-3', name: 'Tag 3', color: '#2B4D7E' },
    'tag-4': { id: 'tag-4', name: 'Tag 4', color: '#2B4D7E' }
  },
  groups: {
    'group-1': {
      id: 'group-1',
      tagIds: ['tag-1', 'tag-2']
    },
    'group-2': {
      id: 'group-2',
      tagIds: ['tag-3']
    },
    'group-3': {
      id: 'group-3',
      tagIds: ['tag-4']
    }
  },
  groupOrder: ['group-1', 'group-2', 'group-3']
};
