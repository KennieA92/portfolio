import { ref } from 'vue'

function getProjects(id) {

    let projects = ref([
        {
            projectID: 1,
            projectTitle: "MVO Adventure",
            projectDescription:
                "A 2D Adventure game created in Unity, using simple 2D physics and combat.",
            projectURL: "https://github.com/DennP7791/MVOAdventure",
            githubURL: "https://github.com/DennP7791/MVOAdventure",
            projectCategory: "Unity",
        },
        {
            projectID: 2,
            projectTitle: "VFO",
            projectDescription:
                "An exercise app created in Unity, using a simple 2D GUI.",
            projectURL: "https://github.com/KennieA/VFO",
            githubURL: "https://github.com/KennieA/VFO",
            projectCategory: "Unity",
        },
        {
            projectID: 3,
            projectTitle: "TechhubSyd",
            projectDescription:
                "A website created in Vue.js, using simple animations and transitions.",
            projectURL: "https://techhub-exam.web.app//",
            githubURL: "https://github.com/KennieA92/Techhub-Exam",
            projectCategory: "Webpage",
        },
        {
            projectID: 4,
            projectTitle: "Trapperholt",
            projectDescription:
                "A proposed modern design to replace the current website of the danish museum Trapholt.",
            projectURL: "https://trapperholt.one/",
            githubURL: "https://github.com/KennieA92/TrapholtProject",
            projectCategory: "Webpage",
        },
        {
            projectID: 5,
            projectTitle: "Esbjerg Bryghus",
            projectDescription:
                "A commercial video made in premiere pro to the specifications of a local brewery.",
            projectURL: "https://www.youtube.com/watch?v=hjwB2KrkUzs",
            projectCategory: "Video",
        },
        {
            projectID: 6,
            projectTitle: "Terminator Parody",
            projectDescription: "A Parady of the movie Terminator. Starring a Terminator.(Me)",
            projectURL: "https://www.youtube.com/watch?v=wtuNJk1whBc",
        },

    ]);

    let filteredProjectOnId = projects.value.filter(i => i.projectID == id)

    return { projects, filteredProjectOnId }
}
export default getProjects