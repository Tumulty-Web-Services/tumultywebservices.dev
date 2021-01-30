require('dotenv').config()
const sanityClient = require('@sanity/client')

module.exports = async function() {
    try {
        const options = {
            dataset: 'production',
            projectId: process.env.SANITY_PROJECT_ID,
            useCdn: process.env.NODE_ENV === 'production',
          }
          
        const client = sanityClient(options);

        const query = `*[_type == "post" && categories[] -> title[0] == 'Content Management Systems' || categories[] -> title[0] == 'JAMstack']
        | order(date desc){
            title,
            'slug': slug.current,
            'category':categories[]->title[0],
            'date':publishedAt
          }`
        const posts = await client.fetch(query).then(posts => posts.map(post => post));
   
        return posts;
    } catch(error) {
      console.error(error)
    }
  }
