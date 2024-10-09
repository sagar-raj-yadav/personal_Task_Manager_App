// TaskCard.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskCard = ({ task, onEdit, onDelete }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Title: {task.title}</Text>
            <Text style={styles.description}>Description: {task.description}</Text>
            <Text style={styles.details}>Due Date:{task.dueDate}</Text>
            <Text style={styles.details}>Assigned User:{task.assignedUser}</Text>
            <Text style={styles.details}>Priority:{task.priority}</Text>
            <Text style={styles.details}>Status:{task.status}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Edit" onPress={onEdit} color="#007BFF" />
                <Button title="Delete" onPress={onDelete} color="#FF4136" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        marginBottom: 8,
    },
    details: {
        marginBottom: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
});

export default TaskCard;
