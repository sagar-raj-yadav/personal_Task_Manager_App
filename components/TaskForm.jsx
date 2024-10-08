import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';

const TaskForm = ({ addTask, onCancel, existingTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        assignedUser: 'User A',
        priority: 'Low',
        status: 'ToDo',
    });

    useEffect(() => {
        if (existingTask) setTask(existingTask);
    }, [existingTask]);

    const handleChange = (name, value) => {
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = () => {
        if (!task.title || !task.description || !task.dueDate) {
            alert("All fields are required");
            return;
        }
        addTask(task);
    };

    return (
        <View>
            <TextInput placeholder="Title" value={task.title} onChangeText={(text) => handleChange('title', text)} />
            <TextInput placeholder="Description" value={task.description} onChangeText={(text) => handleChange('description', text)} />
            <TextInput placeholder="Due Date" value={task.dueDate} onChangeText={(text) => handleChange('dueDate', text)} />
            <Button title="Save Task" onPress={handleSubmit} />
            <Button title="Cancel" onPress={onCancel} />
        </View>
    );
};

export default TaskForm;
