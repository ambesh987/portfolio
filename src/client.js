import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/client";
//
// const client = require("@sanity/client");

// export const sanityClient = client({
//   projectId: "hg23zhju",
//   dataset: "production",
//   useCdn: false,
//   token:
//     "skdTcYRUJFFBpwpXZ8uSSdu3ssnyDpkjYwvs2gqs77pRXORn63eulahbzUZLhC3O7MeaUlf0HLa3XLYBfolrsRZYQ4Fr7DbHVY4rk2uvOy64LuQoErw7aZdHBb51BUCfFxZWmNehUov7oMF4bvvGxKHOMMM7TRFGmQFSb8VJwtidyvfFYKN6",
// });

// const client = sanityClient({
//   projectId: 'yourproject-id',
//   dataset: 'your dataset',
//   token: 'Sanity build token',
//   apiVersion: 'v1',
//   useCdn: false // `false` if you want to ensure fresh data
// })

const client = sanityClient({
  token:
    "skdTcYRUJFFBpwpXZ8uSSdu3ssnyDpkjYwvs2gqs77pRXORn63eulahbzUZLhC3O7MeaUlf0HLa3XLYBfolrsRZYQ4Fr7DbHVY4rk2uvOy64LuQoErw7aZdHBb51BUCfFxZWmNehUov7oMF4bvvGxKHOMMM7TRFGmQFSb8VJwtidyvfFYKN6",
  projectId: "hg23zhju",
  dataset: "production",
  useCdn: true,
  apiVersion: "v1",
  ignoreBrowserTokenWarning: true,
});

export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
