import { GrHome as icon } from 'react-icons/gr';

export default {
  name: 'loginhome',
  title: 'Login Landing',
  type: 'document',
  icon,
  fields: [
    {
      name: 'welcome',
      title: 'Welcome Message',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Welcome Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { 
      name: 'contents', 
      title: 'Content', 
      type: 'array',
      of: [{type: 'block'}]
    },
  ],
  preview: {
    select: {
      title: 'welcome',
      media: 'image',
    },
  },
};
