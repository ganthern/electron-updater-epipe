## Demonstrates a bug in electron-updater v6.0.0-alpha.8

* https://github.com/electron-userland/electron-builder/issues/7393
* Reproduced on Ubuntu 22.04.1

* run `npm i`
* run `npm run setup` to build two versions of the app and run a server
* start `electron-update-epipe-linux.AppImage` and see an error pop up after update installation
* optionally use `npm run kill` to remove the leftover zombie processes