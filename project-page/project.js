const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"

window.onload = () => {
    const urlParam = new URLSearchParams(window.location.search);
    const projectId = urlParam.get('uuid');

    function _getProjectdata () {
        fetch(SERVER_URL)
        .then (response => response.json())
        .then (response => {
            const [projectToShow] = response.filter(project => project.uuid === projectId )
            _updateProjectData(projectToShow) 
        })

        .catch(error => {
                alert('Project not found', error);
            });
    }

    function _updateProjectData (projectToShow) {
        const title = document.querySelector('.title');
        title.textContent = projectToShow.name;
        
        const description = document.querySelector('.description');
        description.textContent = projectToShow.description;

        const date = document.querySelector('.date');
        date.textContent = projectToShow.completed_on;

        const image = document.querySelector('.image');
        image.setAttribute("src", `${projectToShow.image}`);

        _setParaghraps(projectToShow);


    }

        function _setParaghraps(projectToShow) {
            const paragraphs = projectToShow.content.split('<br>');
            const content = document.querySelector('.text');
            content.textContent = paragraphs.shift();
            
            paragraphs.forEach(paragraph => {
                const p = document.createElement('p');
                p.textContent = paragraph;
                content.insertAdjacentElement('afterend', p);
            });
    }


    _getProjectdata()

}