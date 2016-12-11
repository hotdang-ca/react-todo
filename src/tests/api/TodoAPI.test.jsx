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
});