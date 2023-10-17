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

    npm install _D tailwindcss

...

2.Create tailwind config file

...
 
    npx tailwindcss init

...    

3. Add file extensions to tailwind config file in the contents property
``
    ["./src/**/*.{html,js,jsx,ts,tsx}"]
``

4. Add tailwind directives at the top of your `index.css` file

``

        @tailwind base;
       @tailwind components;
       @tailwind utilities;

``

