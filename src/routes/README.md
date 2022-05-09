## Routes 

### Lazy Load 

``` js
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
function MyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    );
}
```


### Switch vs Routes 
- Renders the first child <Route> or <Redirect> that matches the location.

- `<Switch>` is unique in that it renders a route exclusively.
- `<Route>`  matches the location renders inclusively.

```js
    import { Route } from "react-router";
    let routes = (
      <div>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/:user">
          <User />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </div>
    );
```
If the URL is /about, then `<About>`, `<User>`, and `<NoMatch>` will all render because they all match the path. This is by design, allowing us to compose `<Route>s` into our apps in many ways, like sidebars and breadcrumbs, bootstrap tabs, etc.

Occasionally, however, we want to pick only one `<Route>` to render. If we’re at /about we don’t want to also match /:user (or show our “404” page). Here’s how to do it with Switch:
```js
    import { Route, Switch } from "react-router";
    let routes = (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/:user">
                <User />
            </Route>
            <Route>
                 <NoMatch />
            </Route>
        </Switch>
    );
```

Now, if we’re at `/about`,` <Switch>` will start looking for a matching `<Route>`.
`<Route path="/about"/>` will match and `<Switch>` will stop looking for matches and render `<About>`. Similarly, if we’re at `/michael` then `<User>` will render.

This is also useful for animated transitions since the matched `<Route>` is rendered in the same position as the previous one.

### Sidebar : https://v5.reactrouter.com/web/example/sidebar