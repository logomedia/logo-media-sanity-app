import S from '@sanity/desk-tool/structure-builder'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'project', 'route', 'post', 'partner', 'client', 'review', 'site-config'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
        S.documentTypeListItem('page').title('Pages'),
        S.documentTypeListItem('route').title('Routes'),
        S.documentTypeListItem('post').title('Posts'),
        S.documentTypeListItem('project').title('Projects'),
        S.documentTypeListItem('client').title('Clients'),
        S.documentTypeListItem('review').title('Reviews'),        
        S.documentListItem().id('global-config').schemaType('site-config').title('Site config'),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])