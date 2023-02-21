# How to install</h1>
~~~javascript
npm i filter-text-urls
~~~

# How to use</h1>
<b>1. You need to call processText function inside an async function</b>
<b>2. The function takes as parameters:</b>
<li>1. arguments: file path, directory path or even texts;</li>
<li>2. validation: checks the http status of the links - it is only necessary to pass a boolean conditional;</li>
<li>3. HTTP: if you just want to do the regex for http links without references [ ] - to use it, you need to pass a boolean conditional;</li>
  <br>
  
# Example 1</h2>
<b>Create a new index.js</b></p>
<b>Paste the code below and run:</b> node [path to index.js]</p>
<b>!Important: Don't forget to type the path/index.js</b></span>

  ~~~javascript
  import processText from './dist/cli/index.js';
  async function TEST() {
    const result = await processText('./node_modules/filter-text-urls/archive/texto.md');
    console.log(result);
  }
  TEST()
  ~~~
  
  <div align="center">
  <h3>Expect</h3>
  <img src="https://user-images.githubusercontent.com/107483516/220187605-f50d6129-fd55-483f-bbb2-bb73147b6a45.png" />
  </div>
  <br>
