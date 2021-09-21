async function newEntryHandler() {
    event.preventDefault();

    const name = document.querySelector('input[name="entry-name"]').value;
    const zipcode = document.querySelector('input[name="entry-zipcode"]').value;
    const mask = document.querySelector('select[name="entry-mask"]').value;
    const date = document.querySelector('input[name="entry-date"]').value;
    const distance = document.querySelector('select[name="entry-distance"]').value;
    const sanitizer = document.querySelector('select[name="entry-sanitizer"]').value;
    const patrons = document.querySelector('select[name="entry-card"]').value;
    const comment = document.querySelector('input[name="entry-comment"]').value;


    const response = await fetch(`/api/entries`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            zipcode,
            date,
            mask,
            distance,
            sanitizer,
            patrons,
            comment
        }),
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// configure HTML to 
document.querySelector('.new-entry-form').addEventListener('submit', newEntryHandler)