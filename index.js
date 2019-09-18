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
import Koji from '@withkoji/vcc';

// render app
const render = () => {
    document.body.innerHTML = `
        <h1>
            ${Koji.config.settings.name}
        </h1>
    `
};

// render
render();
