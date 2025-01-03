// This file contains the JavaScript code for the website.

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'GC Basic Website';

    const button = document.getElementById('clickMe');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});