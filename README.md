# HoloDeck
a 2D virtual card table with a tablet and smartphones

tabletop
- tabletop client for Windows/Mac (react + electron)
  tabletop client for iOS/Android (react + react native)
  dependencies:
    general multitouch support
    - (iOS/Android https://facebook.github.io/react-native/docs/gesture-responder-system.html#content
    - HammerJS (Windows/Mac)
    granular multitouch support - HammerJS
    DDP client - https://github.com/hharnisc/node-ddp-client
    animations - https://facebook.github.io/react-native/docs/animations.html#content
    3D objects - https://github.com/ProjectSeptemberInc/gl-react-native

handheld
  handheld client for iOS/Android
  handheld + tabletop client for iOS/Android
  dependencies:
    general multitouch support - https://facebook.github.io/react-native/docs/gesture-responder-system.html#content
    granular multitouch support - HammerJS
    DDP client - https://github.com/hharnisc/node-ddp-client
    animations - https://facebook.github.io/react-native/docs/animations.html#content
    3D objects - https://github.com/ProjectSeptemberInc/gl-react-native
    filesystem access
      - https://github.com/johanneslumpe/react-native-fs
      - https://github.com/cjdell/react-native-fs-test

server
  Meteor liveData
