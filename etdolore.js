// Define a sample registry object
var formFieldRegistry = {
    // Internal storage for registered items
    _registry: {
        text: function() { return "Text Field Factory"; },
        select: function() { return "Select Field Factory"; }
    },
    
    // Method to get an item from the registry
    get: function(type, defaultValue) {
        // If the type exists in the registry, return it; otherwise, return the default value
        return this._registry[type] || defaultValue;
    },
    
    // Type definitions (for demonstration purposes)
    type: {
        text: 'text',
        select: 'select'
    }
};

// Retrieve a factory for a text field
var factory = formFieldRegistry.get(formFieldRegistry.type.text, "Default Factory");
console.log(factory);  // Output: "Text Field Factory"

// Attempt to retrieve a non-existent factory, should return the default value
var unknownFactory = formFieldRegistry.get('unknownType', "Default Factory");
console.log(unknownFactory);  // Output: "Default Factory"
