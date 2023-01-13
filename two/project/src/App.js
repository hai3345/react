import { useState, useRef, useCallback} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList"

const App = () => {

        const [ todos, setTodos] = useState([
            {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
            },
            {
                id: 2,
                text: "컴포넌트 스타일링 해보기",
                checked: true,    
            },
            {
                id: 3,
                text: '일정 관리 앱 만들어 보자',
                checked: false,    
            },
        ]);

        const nextId = useRef(2);
        debugger;
        const onInsert = useCallback(
            text => {
                const todo = {
                    id: nextId.current,
                    text,
                    checkd: false,
                };
                setTodos(todos.concat(todo));
                nextId.current += 1;
                
            },
            [todos],
            );

        const remove = useCallback(
            id => {
                setTodos(todos.filter(todos => todo.id !== id));
            },
            [todos],
        );

    return(
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} />
            <TodoList todos={todos} onRemove={onRemove} />
        </TodoTemplate>
    );
};

export default App;

