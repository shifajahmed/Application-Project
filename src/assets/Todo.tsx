function Todo(props: { task: string; time: string }) {
    console.log(props);
    return (
        <div>
            <li>Do This Work: {props.task}</li>
            <li>Time: {props.time}</li>
        </div>
    );
};

export default Todo;