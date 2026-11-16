
document.addEventListener('DOMContentLoaded', async function () {

    // Load Navbar
    try {
        const response = await fetch('../page/navbar.html');

        if (!response.ok) {
            throw new Error('Navbar file not found');
        }

        const data = await response.text();

        document.getElementById('navbar').innerHTML = data;

        // Notify Navbar loaded
        document.dispatchEvent(new Event('navbarLoaded'));

    } catch (error) {
        console.error('Navbar:', error);
    }

    // Load Footer
    try {
        const response = await fetch('../page/footer.html');

        if (!response.ok) {
            throw new Error('Footer file not found');
        }

        const data = await response.text();

        document.getElementById('footer').innerHTML = data;

    } catch (error) {
        console.error('Footer:', error);
    }

});
