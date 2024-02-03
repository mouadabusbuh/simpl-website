function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    }
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
    document.querySelector('.content').style.marginLeft = '0';
}
