import { RocketIcon } from '@sanity/icons'

export default {
  name: 'client',
  type: 'document',
  title: 'Clients',
  icon: RocketIcon,
  
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'name',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url',
      description: 'Client website Url',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Client Logo',
      description: 'Client Logo',
      
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
}
