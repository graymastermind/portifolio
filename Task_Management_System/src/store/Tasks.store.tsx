import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Task } from "../interfaces";

const defaultTasks: Task[] = [
  {
    title: "Network Hardware",
    important: false,
    description: "Install Fibre Cables",
    date: "2023-04-12",
    dir: "Main",
    delegate: "Dyke",
    completed: true,
    id: "t1",
  },
  {
    title: "Customer Service",
    important: true,
    description: "Train customers about using the landline",
    date: "2023-05-15",
    dir: "Main",
    delegate: "Gray",
    completed: true,
    id: "t2",
  },
  {
    title: "Marketing",
    important: false,
    description: "Tell customers about Telone",
    date: "2023-08-21",
    dir: "Main",
    delegate: "Gracious",
    completed: false,
    id: "t3",
  },
];

const getSavedDirectories = (): string[] => {
  let dirList: string[] = [];
  if (localStorage.getItem("directories")) {
    dirList = JSON.parse(localStorage.getItem("directories")!);
    const mainDirExists = dirList.some((dir: string) => dir === "Main");
    if (!mainDirExists) {
      dirList.push("Main");
    }
  } else {
    dirList.push("Main");
  }

  if (localStorage.getItem("tasks")) {
    const savedTasksList = JSON.parse(localStorage.getItem("tasks")!);
    let dirNotSaved: string[] = [];
    console.log(savedTasksList)
    savedTasksList.forEach((task: Task) => {
      if (!dirList.includes(task.dir)) {
        if (!dirNotSaved.includes(task.dir)) {
          dirNotSaved.push(task.dir);
        }
      }
    });
    console.log(dirList)
    dirList = [...dirList, ...dirNotSaved];
  }
  return dirList;
};

const getSavedDelegates = (): string[] => {
  let delList: string[] = [];
  if (localStorage.getItem("delegates")) {
    delList = JSON.parse(localStorage.getItem("delegates")!);
    const mainDirExists = delList.some((delegate: string) => delegate === "Dyke");
    if (!mainDirExists) {
      delList.push("Dyke");
    }
  } else {
    delList.push("Dyke");
    delList.push("Gray");
    delList.push("Gracious");
  }

  if (localStorage.getItem("tasks")) {
    const savedTasksList = JSON.parse(localStorage.getItem("tasks")!);
    let delNotSaved: string[] = [];
    console.log(delNotSaved)
    savedTasksList.forEach((task: Task) => {
      if (!delList.includes(task.delegate)) {
        if (!delNotSaved.includes(task.delegate)) {
          delNotSaved.push(task.delegate);
        }
      }
    });
    delList = [...delList, ...delNotSaved];
  }
  console.log(delList)
  return delList;
};

const initialState: {
  tasks: Task[];
  directories: string[];
  delegates: string[];
} = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : defaultTasks,
  directories: getSavedDirectories(),
  delegates: getSavedDelegates(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },
    markAsImportant(state, action: PayloadAction<string>) {
      const newTaskFavorited = state.tasks.find(
        (task) => task.id === action.payload
      );
      newTaskFavorited!.important = !newTaskFavorited!.important;
    },
    editTask(state, action: PayloadAction<Task>) {
      const taskId = action.payload.id;

      const newTaskEdited: Task = state.tasks.find(
        (task: Task) => task.id === taskId
      )!;
      const indexTask = state.tasks.indexOf(newTaskEdited);
      state.tasks[indexTask] = action.payload;
    },
    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },
    deleteAllData(state) {
      state.tasks = [];
      state.directories = ["Main"];
      state.delegates = ["Dyke"];
    },
    createDirectory(state, action: PayloadAction<string>) {
      const newDirectory: string = action.payload;
      const directoryAlreadyExists = state.directories.includes(newDirectory);
      if (directoryAlreadyExists) return;
      state.directories = [newDirectory, ...state.directories];
    },
    createDelegate(state, action: PayloadAction<string>) {
      const newDelegate: string = action.payload;
      const delegateAlreadyExists = state.delegates.includes(newDelegate);
      if (delegateAlreadyExists) return;
      state.delegates = [newDelegate, ...state.delegates];
    },
    deleteDirectory(state, action: PayloadAction<string>) {
      const dirName = action.payload;

      state.directories = state.directories.filter((dir) => dir !== dirName);
      state.tasks = state.tasks.filter((task) => task.dir !== dirName);
    },
    deleteDelegate(state, action: PayloadAction<string>) {
      const delName = action.payload;

      state.delegates = state.delegates.filter((delegate) => delegate !== delName);
      state.tasks = state.tasks.filter((task) => task.delegate !== delName);
    },
    editDirectoryName(
      state,
      action: PayloadAction<{ newDirName: string; previousDirName: string }>
    ) {
      const newDirName: string = action.payload.newDirName;
      const previousDirName: string = action.payload.previousDirName;
      const directoryAlreadyExists = state.directories.includes(newDirName);
      if (directoryAlreadyExists) return;

      const dirIndex = state.directories.indexOf(previousDirName);

      state.directories[dirIndex] = newDirName;
      state.tasks.forEach((task) => {
        if (task.dir === previousDirName) {
          task.dir = newDirName;
        }
      });
    },
    editDelegateName(
      state,
      action: PayloadAction<{ newDelegateName: string; previousDelegateName: string }>
    ) {
      const newDelegateName: string = action.payload.newDelegateName;
      const previousDelegateName: string = action.payload.previousDelegateName;
      const directoryAlreadyExists = state.delegates.includes(newDelegateName);
      if (directoryAlreadyExists) return;

      const delIndex = state.delegates.indexOf(previousDelegateName);

      state.delegates[delIndex] = newDelegateName;
      state.tasks.forEach((task) => {
        if (task.delegate === previousDelegateName) {
          task.delegate = newDelegateName;
        }
      });
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

export const tasksMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const nextAction = next(action);
    const actionChangeOnlyDirectories =
      tasksActions.createDirectory.match(action);

    const actionChangeOnlyDelegates =
      tasksActions.createDelegate.match(action);

    const isADirectoryAction: boolean = action.type
      .toLowerCase()
      .includes("directory");

    const isADelegateAction: boolean = action.type
      .toLowerCase()
      .includes("delegate");

    if (action.type.startsWith("tasks/") && !actionChangeOnlyDirectories) {
      const tasksList = store.getState().tasks.tasks;
      localStorage.setItem("tasks", JSON.stringify(tasksList));
    }
    if (action.type.startsWith("tasks/") && !actionChangeOnlyDelegates) {
      const tasksList = store.getState().tasks.tasks;
      localStorage.setItem("tasks", JSON.stringify(tasksList));
    }
    if (action.type.startsWith("tasks/") && isADirectoryAction) {
      const dirList = store.getState().tasks.directories;
      localStorage.setItem("directories", JSON.stringify(dirList));
    }
    if (action.type.startsWith("tasks/") && isADelegateAction) {
      const delList = store.getState().tasks.delegates;
      localStorage.setItem("delegates", JSON.stringify(delList));
    }

    if (tasksActions.deleteAllData.match(action)) {
      localStorage.removeItem("tasks");
      localStorage.removeItem("directories");
      localStorage.removeItem("delegates");
      localStorage.removeItem("darkmode");
    }

    if (tasksActions.removeTask.match(action)) {
      console.log(JSON.parse(localStorage.getItem("tasks")!));
      if (localStorage.getItem("tasks")) {
        const localStorageTasks = JSON.parse(localStorage.getItem("tasks")!);
        if (localStorageTasks.length === 0) {
          localStorage.removeItem("tasks");
        }
      }
    }
    return nextAction;
  };
