import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, FlatList } from 'react-native';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

const TaskSection = ({ title, tasks, addTask, editTask, deleteTask }) => {
    const [showForm, setShowForm] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = (task) => {
        if (editingTask) {
            editTask({ ...task, id: editingTask.id });
        } else {
            addTask({ ...task, id: Date.now() });
        }
        setShowForm(false);
        setEditingTask(null);
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setShowForm(true);
    };

    return (
        <View style={styles.taskSection}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={tasks}
                keyExtractor={(task) => task.id?.toString() || Math.random().toString()}
                renderItem={({ item }) => (
                    <TaskCard
                        task={item}
                        onEdit={() => handleEditTask(item)}
                        onDelete={() => deleteTask(item.id)}
                    />
                )}
            />
            <View style={styles.buttonContainer}>
                <Button title="Add Task" onPress={() => setShowForm(true)} />
            </View>
            <Modal
                visible={showForm}
                transparent
                animationType="slide"
                onRequestClose={() => setShowForm(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TaskForm
                            addTask={handleAddTask}
                            existingTask={editingTask}
                            onCancel={() => {
                                setShowForm(false);
                                setEditingTask(null);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    taskSection: {
        margin: 16,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        elevation: 5,
    },
});

export default TaskSection;
