let myLibrary = []
const btn = document.querySelector('#btn')
const cards = document.querySelector('#cards')
const openEls = document.querySelector('[data-open]')
const isVisible = 'is-visible'




function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(book){
    for (let i = 0 ; i < book.length ; i++){
        console.log(book[i].title + ' ' + book[i].author + ' ' + book[i].pages)
    }
}

function createBook(x,y,z){
    const obj = new Book(x,y,z)
    myLibrary.push(obj)
}  

function createCard(a,b,c){
    const div = document.createElement('div')
    div.id = 'div_id'
    div.className = 'div_class'  

    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')

    const readBtn = document.createElement('button')
    readBtn.className = 'read-btn'
    const removeBtn = document.createElement('button')
    removeBtn.className = 'remove-btn'

    title.innerHTML = '"'+ a + '"';
    author.innerHTML = b;
    pages.innerHTML = c + " " +'pages'

    readBtn.innerHTML = 'Read'
    removeBtn.innerHTML = "Remove"

    
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(pages)
    div.appendChild(readBtn)
    div.appendChild(removeBtn)
    cards.appendChild(div)
}

  function stopSubmitForm(e) {
    e.preventDefault();
  
    const title = document.getElementById('titlu').value;
    const author = document.getElementById('autor').value;
    const pages = document.getElementById('pag').value;
    createBook(title, author, pages);
    console.log('Ultima carte adăugată:', myLibrary[myLibrary.length - 1]);
    createCard(title, author, pages);
  
    closeModalAndResetForm(); 
  }
  
  function closeModal() {
    const modal = document.querySelector('.modal.is-visible');
    if (modal) {
      modal.classList.remove(isVisible);
    }
  }
  
  function resetForm() {
    document.getElementById('titlu').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('pag').value = '';
  }
  
  function closeModalAndResetForm() {
    closeModal();
    resetForm();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    addBookToLibrary(myLibrary);
  
    openEls.addEventListener('click', function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  
    document.addEventListener('click', (e) => {
      if (e.target == document.querySelector('.modal.is-visible')) {
        closeModalAndResetForm();
      }
    });
  
    const submitButton = document.querySelector('.add-modal button[type="submit"]');
    submitButton.addEventListener('click', stopSubmitForm);
  });
  