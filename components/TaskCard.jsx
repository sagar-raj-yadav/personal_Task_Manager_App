import React from 'react';
import { View, Text, Button } from 'react-native';

const TaskCard = ({ task, onEdit, onDelete }) => {
    return (
        <View>
            <Text>Title: {task.title}</Text>
            <Text>Description: {task.description}</Text>
            <Text>Due Date: {task.dueDate}</Text>
            <Text>Assigned User: {task.assignedUser}</Text>
            <Text>Priority: {task.priority}</Text>
            <Button title="Edit" onPress={onEdit} />
            <Button title="Delete" onPress={onDelete} />
        </View>
    );
};

export default TaskCard;
