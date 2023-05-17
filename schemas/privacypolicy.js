import { TiDocumentText as icon } from 'react-icons/ti';

export default {
  name: 'privacypolicy',
  title: 'Privacy Policy',
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
