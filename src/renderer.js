document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('crud-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const user_role_id = document.getElementById('user_role_id').value;
        const partner_company_id = document.getElementById('partner_company_id').value;
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const phone = document.getElementById('phone').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch('http://localhost:8000/api/user-shipper', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                user_role_id: user_role_id,
                partner_company_id: partner_company_id,
                first_name: first_name,
                last_name: last_name,
                phone: phone,
                username: username,
                password: password,
             })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Item created:', data);
            fetchItems(); // Função para atualizar a lista de itens
        })
        .catch(error => console.error('Error:', error));
    });

    function fetchItems() {
        fetch('http://localhost:8000/api/users')
        .then(response => response.json())
        .then(data => {
            const itemsList = document.getElementById('items-list');
            itemsList.innerHTML = '';
            console.log(data.data);
            data = data.data;
            if (Array.isArray(data)) {
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.email+' - '+item.first_name+' '+item.last_name+' - '+item.id;
                    itemsList.appendChild(li);
                });
            } else {
                console.error('Expected an array but got', data);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    fetchItems(); // Para carregar os itens ao iniciar
});
