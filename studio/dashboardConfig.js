export default {
    widgets: [
    {
      name: 'structure-menu',
      layout: {
        width: "full",
      }
    },
    
        {
            name: 'document-list',
            options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page', 'project', 'post'] },
            layout: { width: 'large' }
    },
    
        {
            name: 'project-info',
            layout: {
                width:"small"
            },
        },
      
      
      {
        name: 'project-users'
      },
      {
        name: 'vercel',
        layout: {
            width:"full"
        }
      }
    ]
  }