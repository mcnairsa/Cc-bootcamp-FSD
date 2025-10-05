const scheduleData = [
    {
        key: 1,
        weekNumber: 1,
        sessionNumber: 1,
        startTime: "0:12",
        moduleNumber: 1,
        completed: false,
        moduleTopic: "HTML Fundamentals",
        moduleSubTopic: "Onboarding + IDE [1:00], AI for Learning [1:18], Intro to Web Development [0:38]"
    },
    {
        key: 2,
        weekNumber: 1,
        sessionNumber: 1,
        startTime: "1:34",
        moduleNumber: 2,
        completed: false,
        moduleTopic: "HTML Fundamentals",
        moduleSubTopic: "HTML5 Document Structure, Doctype, Elements, Attributes, Emmet, W3C Validator"
    }
]

export default function Schedule(){
    return (
        <>
            <h1>This is the start of it all</h1>
            <h2>Module One</h2>
            <p>{scheduleData[0].weekNumber}</p>
            <p>{scheduleData[0].sessionNumber}</p>
            <p>{scheduleData[0].startTime}</p>
            <p>{scheduleData[0].moduleNumber}</p>
            <p>{scheduleData[0].completed ? "Yup! She's done!" : 'Not completed'}</p>
            <p>{scheduleData[0].moduleTopic}</p>
            <p>{scheduleData[0].moduleSubTopic}</p>
            <h2>Module Two</h2>
            <p>{scheduleData[1].weekNumber}</p>
            <p>{scheduleData[1].sessionNumber}</p>
            <p>{scheduleData[1].startTime}</p>
            <p>{scheduleData[1].moduleNumber}</p>
            <p>{scheduleData[1].completed ? "Yup! She's done!" : 'Not completed'}</p>
            <p>{scheduleData[1].moduleTopic}</p>
            <p>{scheduleData[1].moduleSubTopic}</p>
        </>
    );
}

/*{Approximately 100 hour of free tuition over approximately 40 courses here:
https://www.codecademy.com/catalog/subject/web-development
There's 74  courses listed but I dis-counted the Velo/Wix, PHP, TypeScript and anything else I didn't see as directly relevant to bootcamp. It's by no means only HTML, CSS and basic JS. The list includes React, Redux, Node, and MongoDB.
At the bottom you find links to the 'articles' and 'cheatsheets' pages. Life's too short (what's left of my life at least) to list everything contained therein but here you go in case anybody's interested:
https://www.codecademy.com/articles/subject/web-development
https://www.codecademy.com/resources/cheatsheets/subject/web-development

Am I saying that everyone coming to bootcamp should be expected to do 100 hours of self-study before they start? No! My point is that a carefully curated list of maybe 1/2 dozen entry-level courses would mean that everyone has the chance to hit the ground running and that more people would be able to go further into 'camp without feeling overwhelmed and that the sessions could be more supportive because I, for example, would not be desperately trying to keep up because I blinked and missed the important step of 'npm create vite@latest w-t-whatever-is-going-on-here-app -- --template react' and ...
... Nobody expects the Spanish Inquisition}*/