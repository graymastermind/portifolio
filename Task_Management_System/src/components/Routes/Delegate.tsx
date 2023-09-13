import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const Delegate: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const directories = useAppSelector((state) => state.tasks.delegate);
  const params = useParams();
  const navigate = useNavigate();

  useDescriptionTitle(
    `Tasks in "${params.delegate}"`,
    params.delegate ? params.delegate + " directory" : ""
  );

  const [tasksInCurrentDirectory, setTasksInCurrentDirectory] = useState<
    Task[]
  >([]);

  useEffect(() => {
    const dirExists = directories.includes(params.delegate);
    if (!dirExists) {
      navigate("/");
    }
    const tasksFiltered = tasks.filter((task: Task) => task.delegate === params.delegate);
    setTasksInCurrentDirectory(tasksFiltered);
  }, [directories, navigate, params.delegate, tasks]);

  return (
    <LayoutRoutes
      title={`${params.delegate}'s tasks`}
      tasks={tasksInCurrentDirectory}
    />
  );
};

export default Delegate;
