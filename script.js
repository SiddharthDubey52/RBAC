document.addEventListener('DOMContentLoaded', function() {
    const roleList = document.getElementById('role-list');
    const userList = document.getElementById('user-list');
    const roleSelect = document.getElementById('role-select');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    function addRole() {
        const newRole = document.getElementById('role-input').value;
        if (newRole) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${newRole}</span><button onclick="removeRole(this)">Remove</button>`;
            roleList.appendChild(li);

            const option = document.createElement('option');
            option.value = newRole;
            option.textContent = newRole;
            roleSelect.appendChild(option);

            document.getElementById('role-input').value = '';
        }
    }

    function addUser() {
        const newUser = document.getElementById('user-input').value;
        const assignedRole = roleSelect.value;
        if (newUser && assignedRole) {
            const li = document.createElement('li');
            li.innerHTML = `<span>${newUser} - ${assignedRole}</span><button onclick="removeUser(this)">Remove</button>`;
            li.classList.add('fade-in');
            userList.appendChild(li);

            document.getElementById('user-input').value = '';
            roleSelect.value = '';
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    }

    window.addRole = addRole;
    window.addUser = addUser;
    window.toggleDarkMode = toggleDarkMode;
    window.removeRole = function(button) {
        const li = button.parentElement;
        const role = li.querySelector('span').textContent;
        roleSelect.querySelector(`option[value="${role}"]`).remove();
        li.remove();
    };
    window.removeUser = function(button) {
        button.parentElement.remove();
    };
});