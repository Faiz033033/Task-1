function storeData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const userData = JSON.parse(localStorage.getItem('userData')) || [];

    userData.push({ name, email, phone });
  
    localStorage.setItem('userData', JSON.stringify(userData));
 
    displayData();
}

function displayData() {
  
    const userData = JSON.parse(localStorage.getItem('userData')) || [];
  
    const userList = document.getElementById('user-data');
  
    userList.innerHTML = '';
    
    userData.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} - ${user.email} - ${user.phone}`;
      userList.appendChild(listItem);
    });
}
  
  
  displayData();
  