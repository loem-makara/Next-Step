async function loadComponents() {
    // Load Navbar
    const navbarResponse = await fetch("navbar.html");
    const navbarHTML = await navbarResponse.text();

    document.getElementById("navbar").innerHTML = navbarHTML;

    // Active Navbar
    let currentPage = window.location.pathname.split("/").pop().toLowerCase();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    // Check all Navbar links
    document.querySelectorAll("#navbar a[href]").forEach(link => {
        const linkPage = link.getAttribute("href")
            .split("/")
            .pop()
            .split("?")[0]
            .split("#")[0]
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");

            // Activate parent dropdown for submenu links
            const dropdown = link.closest(".dropdown");

            if (dropdown && !link.classList.contains("dropdown-toggle")) {
                const parentLink = dropdown.querySelector(":scope > .dropdown-toggle");

                if (parentLink) {
                    parentLink.classList.add("active");
                }
            }
        }
    });

    // Load Footer
    const footerResponse = await fetch("footer.html");
    const footerHTML = await footerResponse.text();

    document.getElementById("footer").innerHTML = footerHTML;
}

loadComponents();