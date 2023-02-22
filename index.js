
import processText from './dist/cli/index.js';
async function TEST() {
  const result = await processText('/home/taschner71/Documents/AluraProjects/Package_FilterUrl/archive/');
  console.log(result);
}
TEST()