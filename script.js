document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Skills';
    toggleButton.style.display = 'block';
    toggleButton.style.margin = '20px auto';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#4CAF50';
    toggleButton.style.color = 'white';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';

    toggleButton.addEventListener('click', function() {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });

    document.body.appendChild(toggleButton);
});
