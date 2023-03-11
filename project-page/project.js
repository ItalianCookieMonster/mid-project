const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

window.onload = () => {
    const urlParam = new URLSearchParams(window.location.search);
    const projectId = urlParam.get('uuid');

    function _getProjectdata () {
        fetch(SERVER_URL)
        .then (response => response.json())
        .then (response => {
            const [projectToShow] = response.filter(project => project.uuid === projectId )
            _updateProjectData(projectToShow);
        })
    }

    function _updateProjectData (projectToShow) {
        const title = document.querySelector('.title');
        title.textContent = projectToShow.name;
        
        const description = document.querySelector('.description');
        description.textContent = projectToShow.description;

        const date = document.querySelector('.date');
        date.textContent = projectToShow.completed_on;

        const image = document.querySelector('.image');
        image.textContent = projectToShow.image;

        const content = document.querySelectorAll('.text');
        content.textContent = projectToShow.content;

    }


    _getProjectdata()

}