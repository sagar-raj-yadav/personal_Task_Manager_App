import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask, loadTasksFromStorage } from '../features/store';
import TaskSection from './TaskSection';

const TaskBoard = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.tasks);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTab, setSelectedTab] = useState('ToDo');
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        loadTasksFromStorage(dispatch);
    }, [dispatch]);

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch && task.status === selectedTab;
    });

    const handleAddTask = (newTask) => {
        dispatch(addTask({ ...newTask, id: Date.now() }));
    };

    const handleEditTask = (updatedTask) => {
        dispatch(editTask(updatedTask));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const themeStyles = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={[styles.container, themeStyles.container]}>
            <View style={styles.header}>
                <Text style={[styles.headerText, themeStyles.headerText]}>
                    Task Board
                </Text>
                <View style={styles.switchContainer}>
                    <Text style={themeStyles.headerText}>
                        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={(value) => setIsDarkMode(value)}
                    />
                </View>
            </View>

            <View style={styles.filters}>
                <TextInput
                    style={[styles.input, themeStyles.input]}
                    placeholder="Search tasks by title..."
                    placeholderTextColor={isDarkMode ? '#ccc' : '#666'}
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
            </View>

            <View style={styles.tabs}>
                {['ToDo', 'InProgress', 'Completed'].map((status) => (
                    <TouchableOpacity
                        key={status}
                        onPress={() => setSelectedTab(status)}
                        style={[
                            styles.tab,
                            selectedTab === status && styles.activeTab,
                            selectedTab === status && themeStyles.activeTab
                        ]}
                    >
                        <Text style={[styles.tabText, themeStyles.tabText]}>
                            {status}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TaskSection
                title={selectedTab}
                tasks={filteredTasks}
                addTask={handleAddTask}
                editTask={handleEditTask}
                deleteTask={handleDeleteTask}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filters: {
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-around',
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#ddd',
    },
    activeTab: {
        backgroundColor: '#007BFF',
    },
    tabText: {
        fontWeight: 'bold',
    },
});

const lightStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    headerText: {
        color: '#000',
    },
    input: {
        backgroundColor: '#fff',
        color: '#000',
    },
    activeTab: {
        backgroundColor: '#007BFF',
    },
    tabText: {
        color: '#000',
    },
});

const darkStyles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
    },
    headerText: {
        color: '#fff',
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
    },
    activeTab: {
        backgroundColor: '#1A73E8',
    },
    tabText: {
        color: '#fff',
    },
});

export default TaskBoard;
