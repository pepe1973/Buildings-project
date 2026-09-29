async function torol(id) {
    const response = await fetch(`/api/buildings/${id}`, { method: 'DELETE' });

    const valasz = await response.json();

    if (response.ok) {
        window.alert(valasz.msg);
        window.location.href = '/api/buildings';
    } else {
        window.alert(valasz.msg);
    }
}
