// const contentful = require('contentful'); //Common JS
import { createClient } from 'contentful'; //ES6 modules

const client = createClient({
  space: 'h90yhif7nccp',
  accessToken: 'zUTQcO6Jxlq4dEOK0q_XeN9HNGCaA6_QvogMFblAFbA'
});

export default client;
