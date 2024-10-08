import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskSection = ({ title, tasks, addTask }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = async (task) => {
        addTask({ ...task, status: title });
        setShowForm(false);
    };

    return (
        <View>
            <Text>{title}</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskCard
                        task={item}
                        onEdit={() => setEditingTask(item)}
                        onDelete={() => deleteTask(item)}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <Button title="Add Task" onPress={() => setShowForm(true)} />
            {showForm && (
                <TaskForm
                    addTask={handleAddTask}
                    onCancel={() => setShowForm(false)}
                    existingTask={editingTask}
                />
            )}
        </View>
    );
};

export default TaskSection;
