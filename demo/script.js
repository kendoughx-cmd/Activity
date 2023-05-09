const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 
  
    switch(type){
      case 'text': 
        appendText(label)
        break
      case 'button': 
        appendButton(label)
        break
      case 'radio': 
        appendRadio(label)
        break
      case 'checkbox': 
        appendCheckbox(label)
        break
  
    }
  }
  
  const appendText = (label = "No label") => {
    let el = document.createElement('input')
  
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)
  
    document.querySelector('#tnt').append(el) 
  }
  
  const appendButton = (label = "No label") => {
    let el = document.createElement('button')
  
    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label
  
    document.querySelector('#tnt').append(el)
  }
  
  const appendRadio = (label = "No label") => {
    let el = document.createElement('input')
  
    el.setAttribute('type', 'radio')
    el.setAttribute('name', 'radio-group')
    el.setAttribute('id', label)
    el.setAttribute('class', 'form-check-input')
  
    let labels = document.createElement('label')
    labels.setAttribute('for', label)
    labels.setAttribute('class', 'form-check-label')
    labels.textContent = label
  
    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el, label)
  
    document.querySelector('#tnt').append(container)
  }
  
  const appendCheckbox = (label = "No label") => {
    let el = document.createElement('input')
  
    el.setAttribute('type', 'checkbox')
    el.setAttribute('id', label)
    el.setAttribute('class', 'form-check-input')
  
    let labels = document.createElement('label')
    labels.setAttribute('for', label)
    labels.setAttribute('class', 'form-check-label')
    labels.textContent = label
  
    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el, labels)
  
    document.querySelector('#tnt').append(container)
  }
  
  const remove = () => {
    const inserted = document.querySelector('#tnt');
    inserted.remove(inserted);
  }