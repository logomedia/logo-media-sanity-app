import client from "../client";

export async function getProjects() {
    const data = await client.fetch(`*[_type == "project"]`)
    
    return data
  }
  export async function getProjectRoutes() {
    const projects = await getProjects();
    
    return projects.map((project) => {
      return {
        params: {
          slug: project.slug.current,
        }
      }
    })
  }
  export async function getProjectData(route) {
    const projects = await getProjects()
    const getProject = (route) => {
      return projects.find(project => project.slug.current === route)
    }
    let projectData = getProject(route, 10)
    
    return {
      route,
      ...projectData
    }
  }
