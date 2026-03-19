function openNextPage() {
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
}

function goBack() {
    document.getElementById('secondPage').style.display = 'none';
    document.getElementById('firstPage').style.display = 'block';
}