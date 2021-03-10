// const contentful = require('contentful'); //Common JS
import { createClient } from 'contentful'; //ES6 modules

const client = createClient({
  space: '8njl2v06no74',
  accessToken: 'NIe3Z7p-Tbtc5QbyLgZyqzOjoeJcV-wq5ItuOQA-gbw'
});

export default client;
