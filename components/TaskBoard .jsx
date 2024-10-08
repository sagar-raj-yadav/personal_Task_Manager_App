import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskSection from './TaskSection ';

const TaskBoard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedPriority, setSelectedPriority] = useState('All');
    const [assignedUser, setAssignedUser] = useState('All');
    const [tasks, setTasks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [limit] = useState(10);  

    useEffect(() => {
        fetchTasks();  // Load tasks from AsyncStorage on component mount
    }, [selectedStatus, currentPage]);

    const fetchTasks = async () => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
            setTasks(parsedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const saveTasksToStorage = async (newTasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
            setTasks(newTasks);
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        saveTasksToStorage(updatedTasks);
    };

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPriority = selectedPriority === 'All' || task.priority === selectedPriority;
        const matchesUser = assignedUser === 'All' || task.assignedUser === assignedUser;
        return matchesSearch && matchesPriority && matchesUser;
    });

    const tasksByStatus = {
        'ToDo': filteredTasks.filter(task => task.status === 'ToDo'),
        'InProgress': filteredTasks.filter(task => task.status === 'InProgress'),
        'Completed': filteredTasks.filter(task => task.status === 'Completed'),
    };

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Search tasks by title..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    style={{ borderWidth: 1, padding: 5, margin: 10 }}
                />
                <Button title="Add Task" onPress={() => setShowForm(true)} />
            </View>

            <TaskSection title="To Do" tasks={tasksByStatus['ToDo']} addTask={addTask} />
            <TaskSection title="In Progress" tasks={tasksByStatus['InProgress']} addTask={addTask} />
            <TaskSection title="Completed" tasks={tasksByStatus['Completed']} addTask={addTask} />
        </View>
    );
};

export default TaskBoard;
