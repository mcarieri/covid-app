const logoutHandler = async function(event) {
    event.preventDefault();
  
    const response = await fetch("/api/users/logout", {
      method: "post",
    })
    if (response.ok) {
        console.log('LOGOUT ROUTE');
        document.location.replace("/dashboard");
      } else { 
        alert(response.statusText);
      }
    };
  
  document
    .querySelector("#logout")
    .addEventListener("click", logoutHandler);
  