function displayData() {
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
  
    const userList = document.getElementById('user-data');
  
    userList.innerHTML = '';

    userData.forEach((user, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email} - ${user.phone}`;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        // Remove the user data item from the userData array
        userData.splice(index, 1);

        localStorage.setItem('userData', JSON.stringify(userData));
        displayData();
      });
  
      listItem.appendChild(deleteButton);

      userList.appendChild(listItem);
    });
  }
  
  
  displayData();
  