var React = require('react');
var PropTypes = React.PropTypes;

var Storage = React.createClass({

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