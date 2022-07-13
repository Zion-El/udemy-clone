function nextPage(){
    let current_page = document.getElementsByClassName('thispage').value
    let nextPage = document.getElementsByClassName('nextpage').value
    new_this_page = current_page + 1
    new_next_page = nextPage + 1
    document.getElementsByClassName('thispage').value = new_this_page
    document.getElementsByClassName('nextpage').value = new_next_page
}