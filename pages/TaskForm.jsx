import React, { useState, useEffect } from 'react';
import { View, TextInput,TouchableOpacity, Text,Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const TaskForm = ({ addTask, onCancel, existingTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        status: 'ToDo',  // Default status
        priority: 'Low',
    });

    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        if (existingTask) {
            setTask(existingTask);
        }
    }, [existingTask]);

    const handleChange = (name, value) => {
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
            setTask((prevTask) => ({ ...prevTask, dueDate: formattedDate }));
        }
    };

    const handleSubmit = () => {
        if (!task.title || !task.description  || !task.dueDate) {
            alert("All fields are required");
            return;
        }
        addTask(task);
        setTask({ title: '', description: '', dueDate: '', status: 'ToDo', priority: 'Low' });
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={task.title}
                onChangeText={(value) => handleChange('title', value)}
                required
            />
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={task.description}
                onChangeText={(value) => handleChange('description', value)}
                required
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateInput}>
                <Text style={styles.dateText}>
                    {task.dueDate || 'Select Due Date'}
                </Text>
            </TouchableOpacity>
            {showDatePicker && (
                <DateTimePicker
                    value={task.dueDate ? new Date(task.dueDate) : new Date()}
                    mode="date"
                    display={ 'default'}
                    onChange={handleDateChange}
                />
            )}
           
            <Picker
                selectedValue={task.priority}
                onValueChange={(value) => handleChange('priority', value)}
                style={styles.picker}
            >
                <Picker.Item label="Low" value="Low" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="High" value="High" />
            </Picker>
            <Picker
                selectedValue={task.status}
                onValueChange={(value) => handleChange('status', value)}
                style={styles.picker}
            >
                <Picker.Item label="To Do" value="ToDo" />
                <Picker.Item label="In Progress" value="InProgress" />
                <Picker.Item label="Completed" value="Completed" />
            </Picker>
            <Button title="Save Task" onPress={handleSubmit} />
            <Button   title="Cancel" onPress={onCancel} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 10,
    },
});

export default TaskForm;
