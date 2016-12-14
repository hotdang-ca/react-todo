var expect = require('expect');
var actions = require('actions');

describe('Redux Actions', () => {
    it('should generate SET_SEARCH_TEXT action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });

    it('should generate ADD_TODO action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Some Todo Text'
        };

        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });

    it('should generate TOGGLE_SHOW_COMPLETED action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };

        var res = actions.toggleShowCompleted(action.text);
        expect(res).toEqual(action);

    });

    it('should generate TOGGLE_TODO action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 69
        };
        var res = actions.toggleTodo(69);
        expect(res).toEqual(action);
    });
});