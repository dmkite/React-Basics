**Desc**

use `React.useEffect` to store a selection choice from the `<ImageSelector/>` in local storage. You can store a reference to filepath, you don't have to find a way to serialize the image.

**DoD**

GIVEN I am a user
WHEN I select a profile picture
AND I refresh the page
THEN the picture is still selected

**Resources**

Below are some helpful methods for storing and reading values from local storage
`window.localStorage.setItem(<key>, <value>)`
`window.localStorage.getItem(<key>)`

Below are some helpful methods for serializing and deserializing values. Local storage can only contain stringified items.
`JSON.stringify(<val>)`
`JSON.parse(<val>)`