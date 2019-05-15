import React from 'react';
import WizIDE from './WizIDE';
// import { triggle } from  

export default function Editor() {
    const loadJSON = () => ({
        name: 'list',
        layout: [
            {
                component: 'input',
                props: {
                    name: 'test',
                    onChange: function() {},
                    validator: 'any'
                }
            }, 
            {
                component: 'div',
                children: [
                    {
                        component: 'h1',
                        content: 'any h1',
                        props: {
                            className: 'any-h1'
                        }
                    },
                    {
                        component: 'div',
                        children: [
                            {
                                component: 'select',
                                children: (function(){
                                    const options = [];
                                    for (let i =0; i < 10; i++) {
                                        options.push({
                                            component: 'option',
                                            content: i,
                                            props: {
                                                value: i
                                            }
                                        })
                                    }
                                    return options;
                                })()
                            }
                        ],
                        props: {
                        }
                    }
                ]
            }, 
            {
                component: 'gui-form-core.AutoForm',
                props: {
                    any: 'value'
                }
            }
        ]
    });
    return (<div className="editor"><div className="left">left input selector</div><WizIDE ui={loadJSON()} /><div className="right-props">right props</div></div>);
}