# d3-react

Helpers for using d3 within React

## Installation

Use npm or yarn:
```bash
npm install d3-react
# or
yarn add d3-react
```

## Usage
### `useD3Ref`
Use this to create a ref and draw on it. The ref can be any element. The first parameter is a callback with the d3 object to draw on. The second parameter is a `React.DependencyList` like the one with `React.useEffect` to redraw on change.
```javascript
import {useD3Ref} from 'd3-react'

// Your array of data
const data = ...

const Page = () => {
    const ref = useD3Ref(svg => {
        svg
           .append('g')
           .selectAll('bar')
           .data(data)
           .append('rect')
           // Your actions
    }, [data.length])
    // mostly data.length because you'd want to redraw on data increase/decrease


    return <svg ref={ref} {...additionalProps}/>
}

```

## Contributing
As this a starting library project, pull requests are welcome. You can propose features and changes to the library, just open an issue to discuss details.

#### Currently missing:
- Tests
- Definitions
- CI/CD (yes, it is a small library but hopefully it will grow)

## License
[MIT](https://choosealicense.com/licenses/mit/)