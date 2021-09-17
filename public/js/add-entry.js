async function newEntryHandler() {
    event.preventDefault();
  
    const name = document.querySelector('input[name="post-title"]').value;
    const zipcode = document.querySelector('input[name="post-title"]').value;
    const mask = document.querySelector('input[name="post-title"]').value;
    const distance = document.querySelector('input[name="post-title"]').value;
    const sanitizer = document.querySelector('input[name="post-title"]').value;
    const patrons = document.querySelector('input[name="post-title"]').value;
    const comment = document.querySelector('input[name="post-title"]').value;

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