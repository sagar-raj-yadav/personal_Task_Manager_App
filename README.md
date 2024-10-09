# Task Management App

## Project Overview
This Task Management App is a simple and efficient tool for managing tasks, designed to help users keep track of their work in a status-oriented manner. It allows users to create tasks, edit them, change their status, and automatically organizes tasks based on their current status. With built-in support for a dark/light mode toggle and storage of tasks locally on the device, this app ensures a seamless and user-friendly experience. It’s built using the React Native with Redux for state management, and `@react-native-async-storage/async-storage` for persisting data.

## App Features
### 1. **Task Status Management**
   - The app categorizes tasks into three statuses:
     - **ToDo**: Tasks that are yet to be started.
     - **InProgress**: Tasks that are currently being worked on.
     - **Completed**: Tasks that have been finished.
   - Users can switch between these categories using tabs, allowing them to view tasks based on their current progress status.

### 2. **Add New Tasks**
   - Users can add new tasks using the "Add Task" button.
   - When adding a task, a pop-up form appears, allowing users to:
     - Enter the task title and description.
     - Select the initial status for the task (ToDo, InProgress, or Completed).
     - Choose a due date using a date picker.
   - The newly created task is then displayed in the section corresponding to its selected status.
   
### 3. **Edit Tasks**
   - Users can edit any existing task by selecting it.
   - Clicking on a task opens an editing form where users can:
     - Modify the task title or description.
     - Change the status (e.g., move a task from ToDo to InProgress).
     - Update the due date if necessary.
   - When the status of a task is changed during editing, the task is automatically re-arranged into the correct section based on its new status.

### 4. **Delete Tasks**
   - Users have the option to delete tasks that are no longer needed.
   - The "Delete" option can be accessed directly from the task details.
   - Once deleted, a task is removed from the list and cannot be recovered.

### 5. **Task Storage with Local Storage**
   - The app uses `@react-native-async-storage/async-storage` to store tasks locally on the user's device.
   - This ensures that all tasks are retained even if the app is closed or the device is restarted.
   - Tasks are loaded from local storage when the app is started, making it convenient for users to continue from where they left off.

### 6. **Search and Filter Tasks**
   - A search bar is provided at the top of the screen, allowing users to quickly find tasks by their title.
   - As users type into the search bar, the task list is filtered in real-time to display only matching tasks, making it easy to locate specific tasks even in large lists.

### 7. **Dark/Light Mode Toggle**
   - The app includes a toggle switch that allows users to switch between dark mode and light mode.
   - Dark mode offers a comfortable viewing experience in low-light conditions, while light mode is ideal for daytime use.
   - The selected mode is retained even if the app is closed and reopened.

## Setup Instructions
### Prerequisites
   - Make sure you have **Node.js** installed on your system.
   - Install **React Native CLI** and **Expo CLI** if you plan to use Expo.
   - Ensure that **Android Studio** or **Xcode** is set up if running the app on a physical or virtual device.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   - For React Native CLI:
     ```bash
     npx react-native run-android
     ```
     or
     ```bash
     npx react-native run-ios
     ```
   - For Expo:
     ```bash
     npx expo start
     ```

### Running Tests
   - To run unit tests, use the following command:
     ```bash
     npm test
     ```

## Explanation of Key Design Decisions
### 1. **Redux for State Management**
   - Redux is used to manage the application's state, particularly the list of tasks and their statuses.
   - Using Redux makes it easier to manage the state across different components, ensuring consistency and predictability.

### 2. **Local Storage with AsyncStorage**
   - The choice to use `@react-native-async-storage/async-storage` allows the app to store tasks locally on the device, avoiding the need for constant server communication.
   - This provides a faster and more reliable experience for users as their data remains available even without internet connectivity.

### 3. **User Experience and UI**
   - The task board design follows a clear and intuitive interface, with tabs for different task statuses (ToDo, InProgress, Completed) and easy-to-access buttons for adding and managing tasks.
   - The dark/light mode feature enhances usability by providing options for different lighting environments.

### 4. **Seamless Task Organization**
   - Automatically sorting tasks into categories based on their status ensures that the user can focus on tasks relevant to their current stage.
   - Editing a task's status moves it to the appropriate section without manual intervention, offering a smooth user experience.

### 5. **Date Picker for Task Due Dates**
   - Including a date picker for setting due dates makes it easy for users to specify deadlines.
   - This feature allows users to better manage time-sensitive tasks and prioritize their work.

## Conclusion
This Task Management App is a powerful yet simple tool for organizing tasks based on their progress. With features for creating, editing, deleting, and automatically sorting tasks, it provides a streamlined experience for users looking to enhance productivity. The use of local storage ensures data persistence, while a polished UI and dark mode support make it user-friendly. The app's design decisions emphasize ease of use, data reliability, and a pleasant user experience.

![screehshot 1](https://github.com/user-attachments/assets/c6e95203-24b9-44d8-8ec5-6bcf70b17a77)

![screenshot 2 ](https://github.com/user-attachments/assets/15cbca7a-2a70-4ada-805b-7409d3730df5)

![screenshot 3](https://github.com/user-attachments/assets/a3271e58-b653-444a-ad5c-433445693e03)

![screenshot 4](https://github.com/user-attachments/assets/db95471f-0959-4b88-8f1e-a1602972b9fa)

![screenshot 5](https://github.com/user-attachments/assets/e0a3d611-6780-4446-a7e8-5d55a65334c8)

![screenshot 6](https://github.com/user-attachments/assets/aca4724d-dcb8-4583-9ef9-82a30af4184b)
