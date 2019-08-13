# @mwatson/useWindowWidth


# How to Use

In order to use this module, import it at the top of a component.

```jsx
import React from 'react'
import { useWindowWidth } from '@mwatson/usewindowwidth'

// ...

```

Then, within the component definition, destructure the `windowWidth` variable and the necessary size variables, `XS`, `SM`, `MD`, and `LG`.


```jsx
export const SomeComponent = ({ children }) => {
    const { windowWidth, XS, SM, MD, LG } = useWindowWidth()

    // ...
}
```

The `windowWidth variable is a number corresponding to the window widht in pixels, that one would obtain from `window.innerWidth`. The size variables are integers corresponding to common breakpoints.

Three examples follow illustrating common use cases.

## 1. Alter inline styles according to window width

```jsx
//...
<ul style={{
    display: 'flex',
    flexDirection: windowWidth <= XS ? 'column' : 'row',
}}>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
```

## 2. Pass window-width-based booleans to styled components

```jsx            
const Block = styled.div`
    padding: ${ props => props.compact ? '2rem' : '1rem' };
`

const SomeComponent = props => (
    <Block compact={ windowWidth > SM }>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi tempora error repudiandae facilis! Ipsum enim fuga sunt accusantium natus, quae ea quo nulla cum iure. Rem a dicta, iste porro.
    </Block>
)
```

## 3. Conditionally show different components based on window size

Suppose you have two menus--a mobile menu component called `<MobileMenu />` and a menu component for larger screens called `<Menu />`.

Then they can be conditionally rendered as show below:

```jsx
    <div>
        { windowWidth <= SM && <MobileMenu /> }
        { windowWidth > SM && <Menu /> }
    </div>
}
```

or

```jsx
    <div>
        { windowWidth <= SM ? <MobileMenu /> : <Menu /> }
    </div>
```