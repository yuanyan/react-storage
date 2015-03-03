require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-storage":[function(require,module,exports){
var React = require('react');
var PropTypes = React.PropTypes;

var Storage = React.createClass({displayName: "Storage",

    statics: {
        set: function(name, value){
            localStorage.setItem(name, value);
        },

        has: function(name){
            return Storage.get(name) !== undefined
        },

        get: function(name){
            return localStorage.getItem(name);
        },

        getAll: function(){
            var ret = {}
            Storage.forEach(function(key, val) {
                ret[key] = val
            })
            return ret
        },

        clear: function(){
            localStorage.clear()
        },

        forEach: function(callback) {
            for (var i=0; i<localStorage.length; i++) {
                var key = localStorage.key(i)
                callback(key, Storage.get(key))
            }
        }
    },

    propTypes: {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        useRaw: PropTypes.bool,
        autoSave: PropTypes.bool
    },

    getDefaultProps: function(){
        return {
            useRaw: false,
            autoSave: true
        };
    },

    save: function(){
        var value = this.props.useRaw ? this.props.value : JSON.stringify(this.props.value);
        Storage.set(this.props.name, value);
    },

    componentWillUpdate: function(){
        if(this.props.autoSave){
            this.save();
        }
    },

    // Invoked immediately before mounting occurs.
    componentWillMount: function () {
        this.save();
    },

    render: function () {
        return null
    }
});

module.exports = Storage;
},{"react":undefined}]},{},[]);
