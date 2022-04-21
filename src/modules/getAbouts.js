import { ref } from 'vue'

function getAbouts(id) {

    let abouts = ref([
        {
            aboutID: 1,
            aboutTitle: "First Meeting",
            aboutDescription:
                "We meet, and we talk about your imagined project, how you want it done and what you want to achieve.",
        },
        {
            aboutID: 2,
            aboutTitle: "Brainstorming",
            aboutDescription:
                "With basis in our meeting, I start brainstorming on the project, the idea and begin outlining the important parts of the project.",
        }, {
            aboutID: 3,
            aboutTitle: "Establishing the Prototype",
            aboutDescription:
                "I start working on a small lo-fi prototype with basis in the brainstorming process, afterwhich I arrange another meeting."
        }, {
            aboutID: 4,
            aboutTitle: "Prototype Meeting",
            aboutDescription:
                "I present the prototype, and together we begin discussing the design and the functionality of the project. We figure out what works and what does not work for you.",
        }, {
            aboutID: 5,
            aboutTitle: "Continuous Development",
            aboutDescription:
                "Through the next period of time, I continue developing the project, bringing in any new ideas and features that the client wants."
        },
    ]);

    let filteredAboutOnId = abouts.value.filter(i => i.aboutID == id)

    return { abouts, filteredAboutOnId }
}
export default getAbouts