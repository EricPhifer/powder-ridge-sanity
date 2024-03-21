import { FaQuestionCircle as icon } from 'react-icons/fa';

export default {
  name: 'faq',
  title: 'Frequently Asked Questions',
  type: 'document',
  icon,
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'What is the question?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 100,
      },
    },
    { 
      name: 'answer', 
      title: 'Answer', 
      description: 'What is the answer to the question?',
      type: 'array',
      of: [{type: 'block'}]
    },
  ],
  preview: {
    select: {
      title: 'question',
      media: 'image',
      subtitle: 'answer',
    },
  },
};
