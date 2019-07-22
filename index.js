/** 
 * index.js
 * 
 * What it Does:
 *   This file sets up our react app to render inside of the root html
 *   file. The global css file is included here as well as our service
 *   worker is registered.
 * 
 * Things to Change:
 *   Anything outside of react that needs to be included in your project
 *   can go here. If you want additional CSS files you can include them
 *   here.
 */

// import styles
import './index.css';

// import and load koji configs
import Koji from 'koji-tools'
Koji.pageLoad()

// set app name
const config = Koji.config;

// listen for config change events
Koji.on('change', (scope, key, value) => {

    // update configs and re-render
    config[scope][key] = value
    render();
})

// render app
const render = () => {
    document.body.innerHTML = `
        <h1>
            ${config.settings.name}
        </h1>
    `
};

// render
render();

/*
// hot module reload example
if (module.hot) {

    // hot module update app.js
    module.hot.accept('script-loader!app.js', () => {
        // callback
        // render();
    });

}
*/