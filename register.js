document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('fom')

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const authmsg = document.getElementById('auth-msg');

    form.addEventListener('submit', async(e)=>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:3200/api/register.html',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username, email, password})
            })
            const data = await response.json();
            console.log(data);

            if(!response.ok){
                authmsg.textContent = data;
            } 
            else{
                authmsg.textContent = data;
            }
        }
        catch(err){
            authmsg.textContent = data;
        }
    })
   
})