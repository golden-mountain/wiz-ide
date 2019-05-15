import React from 'react';
import { useCommand } from './commander'

// 
const map = loadMaps();

function createElements(layout) {
    return layout.map((element, id) => {
        const component = map[element.component] ? map[element.component] : element.component;
        const [newIdeProps, ] = useCommand();

        if (element.children) {
            return React.createElement(component, {key: id, ide: newIdeProps, ...element.props}, createElements(element.children) );
        }
        return React.createElement(component, {key: id, ide: newIdeProps, ...element.props}, element.content || null );
    });
}

export default function WizIDE(props) {
    const { noOutline, ...p} = props;
    return (<div>
        {createElements(props.ui.layout)}
    </div>)
}
