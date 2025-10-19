console.log('Static JavaScript file loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready - static files are working correctly!');

    // Add some interactive functionality to demonstrate JS is working
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            this.style.color = this.style.color === 'blue' ? '' : 'blue';
            console.log('Heading clicked - JavaScript is working!');
        });

        // Add a hover message
        heading.title = 'Click me to change color!';
        heading.style.cursor = 'pointer';
    }

    // Log successful static file loading
    console.log('✓ Static files demonstration complete');
    console.log('✓ CSS loaded (check the styling)');
    console.log('✓ JavaScript loaded (this message confirms it)');
});