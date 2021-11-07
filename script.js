const projectsUrl = "https://api.github.com/users/vrfdivino/repos";
const userUrl = "https://api.github.com/users/vrfdivino";

fetch(userUrl, { headers: {} })
    .then(response => response.json())
    .then(data => {
        const profile = document.getElementById("profile");
        profile.innerHTML = `<img src="${data.avatar_url}" alt="${data.name}" />`;
    });



fetch(projectsUrl, { headers: {} })
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${element.html_url}">${element.name}</a> - <em>${element.description}</em>`;
            document.getElementById("projects").appendChild(li);
        });
    });