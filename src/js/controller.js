import * as model from './model.js'; // import the inner workings
import view from './view.js'; // import the outer workings

// use both inner & outer workings
view.renderMessage(model.jane.greet());
view.renderMessage(model.john.greet());
