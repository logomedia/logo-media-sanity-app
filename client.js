import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'oylpolrb',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-08-27',
})

export default client
