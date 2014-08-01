exports.config =
  # See http://brunch.io/#documentation for docs.
  notifications: on

  files:
    javascripts:
      joinTo: 'js/app.js': /^(vendor|app)/
      order: # Compile javascripts in order - legacy project :'( 
        before: [
          'vendor/modernizr-2.6.2.min.js',
          'vendor/jquery-1.10.2.min.js',
          'vendor/jquery.knob.min.js',
          'vendor/angular-animate.js',
          'vendor/jquery.maskedinput.js',
          'app/javascripts/main.js',
          'app/javascripts/plugins.js'
        ]
    stylesheets:
      joinTo:
        'css/style.css': 'app/stylesheets/style.less'

  # Disable automatic modules (legacy project)
  modules:
    wrapper: false
    definition: false

  plugins:
    autoReload:
      enabled:
        js: on
        css: on
        assets: on
    less:
      dumpLineNumbers: 'comments'
