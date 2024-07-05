import React from 'react'
import Card from './Card';

function Recent() {

    const projects = [
        {
          name: "Breaking Bulletin",
          img:"https://marketplace.canva.com/EAFb37lMoYo/2/0/1131w/canva-black-vintage-newspaper-birthday-party-poster--O5Os9QgMBE.jpg",
          description: "A web application for managing newspaper.",
          coreFeatures: [
            "Secure payment integration",
            "Advanced product search",
            "Comprehensive reporting tools"
          ],
          technologyUsed: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Stripe",
            "Firebase",
            "ImgBB Hosting"
          ],
          projectLinks: {
            live: "https://project-alpha-live.com",
            githubClient: "https://github.com/username/project-alpha-client",
            githubServer: "https://github.com/username/project-alpha-server"
          }
        },
        {
          name: "Ninja Explore Hub",
          img:"https://www.detourista.com/wp/wp-content/uploads/Unorganized/Bohol-Attractions-Featured-Image.jpg",
          description: "An tourist platform for adding and managing desire tourist spots.",
          coreFeatures: [
            "Secure Login integration",
            "Advanced product search",
            "User reviews and ratings"
          ],
          technologyUsed: [
            "React",
            "Spring Boot",
            "MySQL",
            "Stripe API",
            "Elasticsearch"
          ],
          projectLinks: {
            live: "https://project-beta-live.com",
            githubClient: "https://github.com/username/project-beta-client",
            githubServer: "https://github.com/username/project-beta-server"
          }
        },
        {
          name: "Novel Nest",
          img:"https://images.unsplash.com/photo-1568667256531-7d5ac92eaa7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeSUyMGJvb2tzfGVufDB8fDB8fHwy&w=1000&q=80",
          description: "A social networking site for connecting professionals.",
          coreFeatures: [
            "User profiles and connections",
            "Job postings and applications",
            "Messaging and notifications"
          ],
          technologyUsed: [
            "Vue.js",
            "Django",
            "PostgreSQL",
            "Redis",
            "GraphQL"
          ],
          projectLinks: {
            live: "https://project-gamma-live.com",
            githubClient: "https://github.com/username/project-gamma-client",
            githubServer: "https://github.com/username/project-gamma-server"
          }
        }
      ];
      
  return (
    <div>
        <h1 className='text-5xl font-bold text-purple-400 text-center my-12'>Recent Works</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-5'>
      {projects.map((project,idx)=><Card project={project} key={idx}></Card>)}
    </div>
    </div>
  )
}

export default Recent
