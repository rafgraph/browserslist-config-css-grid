# Browserslist Config CSS Grid

Do you use CSS Grid? Then this `browserslist` is for you!

Exports a `browserslist` of all browsers that support CSS Grid (browsers that have partial support, e.g. IE 11, are excluded).

```
npm install --save-dev browserslist-config-css-grid
```

```
  "browserslist": [
    "extends browserslist-config-css-grid"
  ]
```

### Recommended Usage

Since `browserslist-config-css-grid` includes _all_ browsers that support CSS Grid it is recommended to combine it with [`and` queries](https://github.com/browserslist/browserslist#query-composition) to further limit the supported browsers.

To combine it with Browserslist's `defaults` list use:
```
  "browserslist": [
    "extends browserslist-config-css-grid and defaults"
  ]
```

To combine it with the last 2 versions, or > 0.2%, and browsers that are not dead, use (note that `and` has to come after `or`):

```
  "browserslist": [
    "last 2 versions or > 0.3% and not dead and extends browserslist-config-css-grid"
  ]
```

After setting up the `browserslist` config in your project you can run `npx browserslist` in the root directory to see the list of browsers.

For more info on using `browserslist` see https://github.com/browserslist/browserslist
