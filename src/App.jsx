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


  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProj ect onAddProject={handleAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
