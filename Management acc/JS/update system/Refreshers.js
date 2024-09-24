document.querySelectorAll('.edit-button').forEach(button => {
    button.addEventListener('click', function() {
        const row = this.parentNode.parentNode;
        const name = row.querySelector('td').textContent;
        const price = row.children[1].textContent.replace('Php ', '');
        const qty = row.children[2].textContent;
  
        document.getElementById('productName').textContent = name;
        document.getElementById('productPrice').value = price;
        document.getElementById('productQuantity').value = qty;
  
        openModal();
    });
  });
  
  function openModal() {
    document.getElementById('editModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('editModal').style.display = 'none';
  }
  
  function saveProduct() {
    const name = document.getElementById('productName').textContent;
    const price = document.getElementById('productPrice').value;
    const qty = document.getElementById('productQuantity').value;
  
    const row = document.querySelector(`[data-name='${name}']`);
    row.children[1].textContent = `Php ${price}`;
    row.children[2].textContent = qty;
  
    closeModal();
    showConfirmation();
  }
  
  function showConfirmation() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.style.display = 'block';
  
    setTimeout(() => {
        confirmationModal.style.display = 'none';
    }, 2000);
  }
  