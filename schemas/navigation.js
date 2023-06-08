import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
        type: 'string' 
      },
      { 
        name: 'logo', 
        title: 'Logo', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'alt', 
        title: 'Alternative Text for Logo', 
        type: 'string' 
      },
      {
        name: 'navlinks',
        title: 'Navigation Links to Sections of the Page',
        type: 'array',
        of: [
          { type: 'PageLinks' }
        ],
      },
      { 
        name: 'login', 
        title: 'Login Title', 
        type: 'string',
    },
    { 
        name: 'loginlink', 
        title: 'Login Link', 
        type: 'string' 
    },
    ],
  }