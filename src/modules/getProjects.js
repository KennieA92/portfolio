import { ref } from 'vue'

export default function getProjects() {

    let projects = ref([
        {
            projectID: 1,
            projectTitle: "MVO Adventure",
            projectDescription:
                "A 2D Adventure game created in Unity, using simple 2D physics and combat.",
            projectURL: require("../assets/img/logo/unity.svg"),
            githubURL: "https://github.com/DennP7791/MVOAdventure",
            projectCategory: "Unity",
        },
        {
            projectID: 2,
            projectTitle: "MVO Island Survival",
            projectDescription:
                "A 3D Multiplayer Island Survival game created in Unity, using simple animations.",
            projectURL: require("../assets/img/logo/unity.svg"),
            githubURL: "https://github.com/KennieA92/MVOIslandSurvival",
            projectCategory: "Unity",
        },
        {
            projectID: 3,
            projectTitle: "Trapperholt",
            projectDescription:
                "A proposed modern design to replace the current website of the danish museum Trapholt",
            projectURL: require("../assets/img/logo/html.svg"),
            githubURL: "https://github.com/KennieA92/TrapholtProject",
            projectCategory: "Webpage",
        },
        {
            projectID: 4,
            projectTitle: "Esbjerg Bryghus",
            projectDescription:
                "A commercial video made in premiere pro to the specifications of a local brewery.",
            projectURL: require("../assets/img/logo/premiere-pro.svg"),
            projectCategory: "Video",
        },
        {
            projectID: 5,
            projectTitle: "Card Two",
            projectDescription: "Lorem ipsum, text is very nice. Much wow2",
            projectURL: require("../assets/img/logo/html.svg"),
        },

    ]);
    // let project = ref(projects.value.filter(project => project.projectID === id));
    return { projects }
}