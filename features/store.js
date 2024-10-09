import { configureStore, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, id: Date.now() });
            saveTasksToStorage(state.tasks);
        },
        editTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
                saveTasksToStorage(state.tasks);
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            saveTasksToStorage(state.tasks);
        },
    },
});

export const { setTasks, addTask, editTask, deleteTask } = tasksSlice.actions;

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    },
});

export const loadTasksFromStorage = (dispatch) => {
    AsyncStorage.getItem('tasks')
        .then((storedTasks) => {
            if (storedTasks) {
                dispatch(setTasks(JSON.parse(storedTasks)));
            }
        })
        .catch((error) => {
            console.error('Failed to load tasks from AsyncStorage', error);
        });
};

const saveTasksToStorage = async (tasks) => {
    try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error('Failed to save tasks to AsyncStorage', error);
    }
};

export default store;
