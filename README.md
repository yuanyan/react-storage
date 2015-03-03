React Storage
==============

Storage Component for React.

## Demo & Examples

Live demo: [yuanyan.github.io/react-image](http://yuanyan.github.io/react-storage/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:9999`](http://localhost:9999) in a browser.

## Installation

The easiest way to use `react-storage` is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), etc).

You can also use the standalone build by including `dist/react-storage.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-storage --save
```

## Usage

```
var React = require('react');
var Storage = require('react-storage');
var App = React.createClass({

    render: function() {
        return (
            <Storage name={"foo"} value={"bar"}/>
        );
    }

});
```

## Properties

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`name`      | *string*                  | `null`               | The key to the data stored in localforage.
`value`      | *string*                  | `null`               | The data associated with the specified name.
`useRaw`      | *boolean*                  | `false`               | If true, the value is stored and retrieved without JSON processing.
`autoSave`      | *boolean*                  | `true`               | If false, auto save is disabled.
