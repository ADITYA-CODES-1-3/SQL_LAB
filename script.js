function showExp(id, el) {
    // Hide all blocks
    document.querySelectorAll('.content-block').forEach(b => b.classList.remove('active'));
    // Show selected
    document.getElementById(id).classList.add('active');
    
    // Update menu style
    document.querySelectorAll('.menu li').forEach(l => l.classList.remove('active'));
    el.classList.add('active');
    
    // Scroll top
    document.querySelector('.main-content').scrollTop = 0;
}

function copyCode(btn) {
    const code = btn.parentElement.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    
    const original = btn.innerText;
    btn.innerText = "Copied!";
    btn.style.color = "#059669";
    btn.style.borderColor = "#059669";
    
    setTimeout(() => {
        btn.innerText = original;
        btn.style.color = "";
        btn.style.borderColor = "";
    }, 2000);
}