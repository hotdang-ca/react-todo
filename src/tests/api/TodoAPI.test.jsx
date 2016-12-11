var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach( () => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('SetTODOs', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 1,
                text: 'Test',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);

            expect(actualTodos[0].id).toBe(1);
            expect(actualTodos[0].text).toBe('Test');
            expect(actualTodos[0].completed).toBe(false);
        });

        it('should not set invalid todos array', () => {
            var todos = {a: 'b'};
            TodoAPI.setTodos(todos);
            
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('GetTODOs', () => {
        it('should return empty array for bad localstorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            var emptyArray = [];

            expect(actualTodos).toEqual(emptyArray);
        });

        it('should return todos for valid localstorage data', () => {
            var todos = [{
                id: 1,
                text: 'Test',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'some text here',
                completed: true
            },
            {
                id: 2,
                text: 'other text here',
                completed: false
            },
            {
                id: 1,
                text: 'some text here completed',
                completed: true
            }
        ];


        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return only completed items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should return only items matching search text', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
            expect(filteredTodos.length).toBe(1);
        });

        it('should return only items matching search text (2)', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should not return completed todos matching search if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, 'completed');
            expect(filteredTodos.length).toBe(0);
        });

        it('should show non-completed items sorted at top', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

    })
});