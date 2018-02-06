exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
      },

      framework: 'jasmine',

      specs: ['test_spec.js'],

      jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
      }
}