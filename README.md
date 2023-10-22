# LMS Frontend

### Setup instruction

1.Clone the Project

...

    git clone https://github.com/NIKHIL-1905-Y/lms-frontend.git

...
    

2.Move into the directory

...

     cd lms-frontend
....


3. install dependencies

...

    npm i

...

4.run the server 

...
    
    npm run dev

...


### Setup instructions for tailwind
[Tail wind Official instruction doc] https://tailwindcss.com/docs/installation


1.Install tailwindcss
...

    npm install -D tailwindcss postcss autoprefixer

...

2.Create tailwind config file

...
 
    npx tailwindcss init -p

...    

3. Add file extensions to tailwind config file in the contents property
``
    ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"]
``

4. Add tailwind directives at the top of your `index.css` file

``

        @tailwind base;
       @tailwind components;
       @tailwind utilities;

``
5.Add the following details in the plugin property of tailwind config 
...
    

     plugins: [require("daisyui"),require("@tailwindcss/line-clamp")],

...


### Adding plugins and dependencies

...
   
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

 ...   


### Configure auto import sort eslint

1.Install simple import sort eslint
...

    npm install -D eslint-plugin-simple-sort
...
2.Add rule and plugins in `.eslint.cjs`
...
     
     plugins: [...,'simple-import-sort'],
    rules: {
    'simple-import-sort/imports':'error'}
   
...

3. To enable auto import sort on file save in vscode

    -Open 'settings.json'
    -add the following config
...

     "editor.codeActionOnSave":{
        "source.fixAll.eslint":true
     }

...

4. Added React Hot Toast