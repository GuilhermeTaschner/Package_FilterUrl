# How to install</h1>
~~~javascript
npm i filter-text-urls
~~~

# How to use</h1>
<b>1. You need to call processText function inside an async function</b>
<b>2. The function takes as parameters:</b>
<li>1. arguments: file path or even texts;</li>
<li>2. validation: checks the http status of the links - it is only necessary to pass a boolean conditional;</li>
<li>3. HTTP: if you just want to do the regex for http links without references [ ] - to use it, you need to pass a boolean conditional;</li>
  <br>
  
# Example 1</h2>
<b>Create a new index.js</b></p>
  ~~~javascript
  import processText from 'filter-text-urls';
  async function TEST() {
    const result = await processText('./node_modules/filter-text-urls/archive/texto.md');
    console.log(result);
  }
  TEST()
  ~~~
  
  <b>Paste the code below and run:</b>
  ~~~javascript
   node [path/index.js]
  ~~~
  
  <div align="center">
  <h3>Expect</h3>
  <img src="https://user-images.githubusercontent.com/107483516/220483914-845293c4-9738-4161-9c7a-a7fee1ee8911.png" />
  </div>
  <br>
  
# Example 2</h2>
<b>Create a new index.js</b></p>
  ~~~javascript
 import processText from 'filter-text-urls';
  async function TEST() {
    const result = await processText('./node_modules/filter-text-urls/archive/texto.md', true /*retorna Links:*/, true /*retorna resposta http*/);
    console.log(result);
  }
  TEST()
  ~~~
  
  <b>Paste the code below and run:</b>
  ~~~javascript
   node [path/index.js]
  ~~~
  
  <div align="center">
  <h3>Expect</h3>
  <img src="https://user-images.githubusercontent.com/107483516/220488940-831cd8ed-140c-4d46-9bfa-06981aa71541.png" />
  </div>
  <br>
