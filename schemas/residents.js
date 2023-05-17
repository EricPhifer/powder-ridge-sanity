import { GrHome as icon } from 'react-icons/gr';

export default {
  name: 'residents',
  title: 'Residents',
  description: 'A list of residents in the Powder Ridge HOA area',
  type: 'document',
  icon,
  fields: [
    {
      name: 'firstname',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'spousename',
      title: 'Spouse Name',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'nickname',
      title: 'Nickname',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'secondaddress',
      title: 'Second Address',
      type: 'string',
    },
    {
      name: 'thirdaddress',
      title: 'Third Address',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'groupmembership',
      title: 'Group Membership',
      type: 'string',
    },
    {
      name: 'organization',
      title: 'Organization',
      type: 'string',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'firstname',
      subtitle: 'lastname',
    },
  },
};
