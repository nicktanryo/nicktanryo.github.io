function project(title, imageSource, previewSource, githubLink, demoLink, tags) {
	return { title, imageSource, previewSource, githubLink, demoLink, tags };
}

export const PROJECTS_INFO = [
	project(
        "Money Share", 
        "money-sharing-app-logo.png", 
        "money-sharing-app-preview.png", 
        null, 
        "http://moneyshareapp.herokuapp.com/", 
        ["JavaScript", "React", "Bootstrap"]
    ),
	project(
        "Ride Sharing", 
        "ride-sharing-system-logo.png", 
        "ride-sharing-system-preview.png", 
        "https://github.com/nicktanryo/ride-sharing-system", 
        null, 
        ["Java", "Database", "MySQL"]
    ),
	project(
		"Path Finding Visualizer",
		"path-finding-visualizer-logo.png",
		"path-finding-visualizer-preview.png",
		"https://github.com/nicktanryo/path-finding-visualizer",
		"https://nicktanryo.github.io/path-finding-visualizer/",
		["Data Structure", "Algorithm", "Graph Theory"]
	),
	project(
		"COVID 19 Tracker",
		"covid-19-tracker-logo.png",
		"covid-19-tracker-preview.png",
		"https://github.com/nicktanryo/covid-19-tracker",
		"https://nicktanryo.github.io/covid-19-tracker/",
		["TypeScript", "React", "Leaflet", "MaterialUI", "API"]
	),
	project(
        "TodoApp", 
        "todoapp-logo.png", 
        "todoapp-preview.png", 
        "https://github.com/nicktanryo/todoapp-ts", 
        "https://todoapp-ts.herokuapp.com", 
        ["TypeScript", "React", "Express", "MongoDB"]
    ),
];
