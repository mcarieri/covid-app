async function newEntryHandler() {
    event.preventDefault();

    const name = document.querySelector('input[name="entry-name"]').value;
    const zipcode = document.querySelector('input[name="entry-zipcode"]').value;
    const mask = document.querySelector('input[name="entry-mask"]').value;
    const distance = document.querySelector('input[name="entry-distance"]').value;
    const sanitizer = document.querySelector('input[name="entry-sanitizer"]').value;
    const patrons = document.querySelector('input[name="entry-patrons"]').value;
    const comment = document.querySelector('input[name="entry-comment"]').value;

    const response = await fetch(`/api/entries`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            zipcode,
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