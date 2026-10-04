const modosit = async (event) => {
    event.preventDefault();
    const id = document.querySelector('#id-value').value;
    const nev = document.querySelector('#nev').value;
    const leiras = document.querySelector('#leiras').value;
    const regikep = document.querySelector('#regi-kep').value;
    const ujkep = document.querySelector('#uj-kep').value;
    let kep = regikep;

    if (ujkep) kep = ujkep;

    const response = await fetch(`/api/buildings/${id}`, {
        method: 'PUT',
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
};
