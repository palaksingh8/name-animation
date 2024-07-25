document.addEventListener("DOMContentLoaded", function() {
    const manish = document.getElementById('manish');
    let position = 0;
    let direction = 1;

    function animate() {
        position += 5 * direction;
        manish.style.transform = `translateX(${position}px)`;

        if (position >= 200 || position <= 0) {
            direction *= -1; // Change direction
        }

        requestAnimationFrame(animate);
    }

    animate();
});
