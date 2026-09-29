const feltoltBtn = document.querySelector('#feltolt');

feltoltBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const nev = document.querySelector('#nev').value;
    const leiras = document.querySelector('#leiras').value;
    const kep = document.querySelector('#kep').value;

    const response = await fetch('/api/new-building', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nev, leiras, kep }),
    });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.href = '/api/buildings';
    } else {
        window.alert(valasz.msg);
    }
});
