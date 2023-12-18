Simple ToDo application made using React.
Released features:
- adding task;
- adding tags for the task;
- filter by tags to display tasks with choosen filter;
- deleting tasks.

Installation:
1. Clone repository;
2. Navigate to the folder;
3. Use `npm install` -> `npm run dev` ;

Usage: 
Application doesn't allow adding empty task, so you have to enter atleast one symbol in task title input. 
![image](https://github.com/RomanK-UA/React-ToDoApp/assets/46937993/162abd85-52a0-409d-a789-d837e4d3fe40) ![image](https://github.com/RomanK-UA/React-ToDoApp/assets/46937993/5406b51c-b217-4229-bdcb-0eefde1e6a00)

Adding tags if needed. 

![image](https://github.com/RomanK-UA/React-ToDoApp/assets/46937993/f21f9880-3316-49c1-a8c4-a1379bd0f161)

Use filter input to select only those tasks with choosen tag.
Use delete button to delete task.

Project structure:
  `src` folder contains main code files including: 
  - `App.jsx`;
  - `index.css`;
  - `main.jsx`;
In the same folder there are two folders: 
  - `Components` - which contain folders for `Containers` components and `UI` (stateless) components;
  - `Styles` hold main components `.css` files.

Known issue: tags input requires comma separation if you use more than 1 word, also last word should end with comma as well. 


