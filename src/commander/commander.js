// TODO list
// commands center
// 1. func
// 2. wrapper
// 3. inspector
// this function will be called by editor
/*
userCommand = [{
    command: 'dnd',
    content: {
         id: 'table1',
         type: 'Table',
         target: 'table2'
    },
    
}]
*/
export function triggle(userCommand) {
    // convert userCommand to executable command
    const appCommand = {
        type: 'hoc',
        content: function() {
           // lifecycle
           // event /update
           return <DndSource />
        },
        props: {}
    };
    return useCommand(appCommand);
}

// send command to bottom containers
export function useCommand(ideCommand) {
    // return props which send to 3rd apps
    return {};
}
