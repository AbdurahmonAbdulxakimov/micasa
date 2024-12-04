const projectsFilters = document.querySelectorAll(".projects__filter li a");
const projectsWrapper = document.querySelector(".projects__wrapper");


const projects = [
    {
        img: "../assets/images/projects/Minimal Bedroom.png",
        title: "Minimal Bedroom",
        category: "Decor / Architecture"
    },
    {
        img: "../assets/images/projects/Light Minimal.png",
        title: "Light Bedroom",
        category: "Decor / Architecture"
    },
    {
        img: "../assets/images/projects/Classic Minimal.png",
        title: "Classic Minimal Bedroom",
        category: "Decor / Architecture"
    },
    {
        img: "../assets/images/projects/Modern Bedroom.png",
        title: "Modern Minimal",
        category: "Decor / Architecture"
    },
    {
        img: "../assets/images/projects/Minimal Table.png",
        title: "Minimal Table",
        category: "Decor / Architecture"
    },
    {
        img: "../assets/images/projects/System Table.png",
        title: "System Table",
        category: "Decor / Architecture"
    },
]


projectsFilters.forEach((el) => {
    el.addEventListener("click", (event) => {
        event.preventDefault()

        // Clear all elements if active
        projectsFilters.forEach(el => el.classList.remove("active-filter"))

        // If not already active set active-filter
        !el.classList.contains("active-filter") && el.classList.add("active-filter")

        // Imitate status on data fetching
        projectsWrapper.innerHTML = "<h3 style=\"text-align: center; width: 100%;\">Loading ...</h3>"

        // Generate Projects Cards HTML
        left = ""
        right = ""
        projects.forEach((project, index) => {
            const card = `
            <div class="project-card">
                <a href="">
                    <img src="${project.img}" alt="">
                    <div class="projects-card__footer">
                        <div>
                            <h4>${project.title}</h4>
                            <p>${project.category}</p>
                        </div>
                        <div class="icon-wrapper">
                            <img src="assets/icons/More.svg" alt="icon">
                        </div>
                    </div>
                </a>
            </div>
            `
            if (index % 2 == 1) {
                left += card;
            } else {
                right += card;
            }
        })

        // Imitate data fetching with timeout
        setTimeout(() => {
            html = `
            <div class="left">${left}</div>
            <div class="right">${right}</div>
            `
            projectsWrapper.innerHTML = html;
        }, 500);
    })
})
