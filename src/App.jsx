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

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
