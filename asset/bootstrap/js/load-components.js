
document.addEventListener('DOMContentLoaded', function () {

    // Load Navbar
    fetch('../page/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error('Navbar file not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Navbar:', error));

    // Load Footer
    fetch('../page/footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer file not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Footer:', error));

});
