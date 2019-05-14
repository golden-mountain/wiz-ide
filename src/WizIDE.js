import React from 'react';
const map = {
    autoform: function(props) {
        return <div {...props}>hello autoform</div>;
    }
};


function createElements(layout) {
    return layout.map((element, id) => {
        const component = map[element.component] ? map[element.component] : element.component;
        if (element.children) {
            return React.createElement(component, {key: id, ...element.props}, createElements(element.children) );
        }
        return React.createElement(component, {key: id, ...element.props}, element.content || null );
    });
}

export default function WizIDE(props) {
    const { noOutline, ...p} = props;
    return (<div>
        {createElements(props.ui.layout)}
    </div>)
}


// TODO list
// commands center
// 1. func
// 2. wrapper
// 3. inspector
// this function will be called by editor
export function triggle(userCommand) {
    return '';
}

// send command to bottom containers
export function sendCommand(ideCommand) {
    return '';
}

// UI Schema management
// remote management
// user command: { type: 'schema', content: 'revert' }
class UISchemaManager {

    revert() {
        const previousJson =  {

        }
        return previousJson;
    }

    renew() {

        return {}
    }

    toJSON() {

    }

    showStack() {}

}


// UI Schema Service
class UISchemaService {
        // remote save
        save() {}

        delete() {}
}