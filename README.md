This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Thinking Process

Before I start explaining my design process I would like to say, even I can imagine is not necessary, that the solution I came up with is based only on a screenshot and couple of key points ( hooks, design, tests, pagination)

Based on this I had to take some key decision in order to let the component behave as expected:

- On click of the dropdown placeholder, the Item list will appear
  - When the Item List is visible, by clicking outside the list the list will disappear
- | Select an Item
  - when the list is visible, in order to keep performance on track I decided to limit the number of Item to 20 and paginate the data from the endpoint
    - at the end of the first 20 elements a `raw` button will allow the user to load other 20 items
  - by clicking an Item from the list, it gets selected and the list will close
    - clicking again the dropdown placeholder, the list will show up again with the item matching the selected one will have a different UI ( as design suggested)
  - | Search an Item
    - when the list is visible the placeholder can be used to type and search for a specific Item name.
      - The search will filter the result based on the whole dataSet returned by the endpoint
    - If the placeholder already has a selected Item, we can still use the search input by deleting the pre-existing name in the input field.
      - as soon as we cancel a letter from the existing selected item the flag will disappear assuming that we have in the input field is a simple string.

### Those functionality and design decisions should have been part of the design process (Design + Product + Dev) which would have highlighted :

- behaviour and expectations
- UI / UX and CTA Interactions

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
