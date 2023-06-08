import { AiOutlineHome as icon } from 'react-icons/ai';

export default {
  name: 'ccrhero',
  title: 'Hero - CCRs',
  type: 'document',
  icon,
  fields: [
    {
      name: 'heromsg',
      title: 'Hero Message',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Home Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'heromsg',
      media: 'image',
    },
  },
};
