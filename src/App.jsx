import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected'
import { useState } from 'react';

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(project) {
    const newProject = { ...project, id: Date.now() }
    setProjectState(prev => {
      return {
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject ]
      }
    })
  }

  function handleCancel() {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
      }
    })
  }


  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
