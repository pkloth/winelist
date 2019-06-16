# winelist
Code case

Some of the tools I have used:

I used [Create React App](https://github.com/facebook/create-react-app) with yarn to create the app.

For simulating API, I used [my-json-server](https://my-json-server.typicode.com/) - this is only faking the changes made, but it was to be able to simulate post of the added wine to the list.


On mobile a toggle function is used for the description to safe space - on desktip, de description is always visible.

The app is responsive and optimized for both mobile and web. 
It is devoleped and tested in chrome.


If the app had a working API, I thought about fetching data from updated APi in componentDidUpdate - and if being a part of complex solution, adding redux would be one of my first thoughts.

If having more time and a longer list, I would have done either a slider or a simple list, with clickable list items and show the clicked item onClick, in a seperate component below or beside the list.
Also picture would have been nice and absolutely something I also would add with more time.
I focused on showing my skills and understanding of structure, architecture and dealing with states and props.

Making the WineItem a seperate component, makes it useable for several purposes - both in the list view and if I did the view below or beside the list as a seperate component.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
