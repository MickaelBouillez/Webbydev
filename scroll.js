window.addEventListener('scroll', function () {
    const logo = document.getElementById('logo');
    const scrollPosition = window.scrollY;

    // Distance de déclenchement de l'effet (par exemple, un quart de la hauteur de la fenêtre)
    const triggerDistance = window.innerHeight / 6;

    // Calcul de l'opacité en fonction de la position du logo par rapport au haut de la fenêtre
    let opacity = 1 - (scrollPosition / triggerDistance);

    // Limiter l'opacité entre 0 et 1
    opacity = Math.min(Math.max(opacity, 0), 1);

    // Appliquer l'opacité au logo
    logo.style.opacity = opacity;
});