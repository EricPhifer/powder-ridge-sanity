import { TiDocumentText as icon } from 'react-icons/ti';

export default {
  name: 'termsconditions',
  title: 'Terms & Conditions',
  type: 'document',
  icon,
  fields: [
    { 
      name: 'title', 
      title: 'Title', 
      type: 'string',
    },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'array',
      of: [{type: 'block'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
