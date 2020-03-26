'use strict';

// making alterations based on solution displayed here
// https://courses.thinkful.com/interactive-web-apps-v1/checkpoint/4#versus-spaghetti-code

// $(document).ready
$(function() {
  createItem();
  toggleCheck();
  deleteItem();
});


function createItem() {
  $('#js-shopping-list-form').submit(event => {
    // to prevent the default form submission behaviour
    event.preventDefault();
    // capture what was submitted
    const userItem = $('#shopping-list-entry').val();
    // clear input for user
    $('#shopping-list-entry').val('')
    // generate an html list item
    // instead of .append'ing item at the end of the <ul> element
    // gonna .preprend item to the beginning, b/c I prefer the UX ;P
    if (userItem !== '') {
      $('.shopping-list').prepend(`<li> <span class="shopping-item">${userItem}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span></button> </div> </li>`);
    }
    // console.log(event.type, event.currentTarget); // test
  });
}

// NOTE: Event Delegation approach for both toggleCheck() and deleteItem()
// to ensure future post-DOM loading createItem()s will have functionality, too.

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
    // ^^^^ this = event.currentTarget 
    // but no fat arrow function syntax allowed
    // note: ESLint is in error when it 'event' is never used because it fails to recognise `this` as `event.currentTarget`
  });
}

function toggleCheck() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').children('span').toggleClass('shopping-item__checked');
  });
}




// PSEUDOCODE INSTRUCTIONS /////////////////////////////////////////
// per: https://courses.thinkful.com/interactive-web-apps-v1/checkpoint/3#shopping-list-challenge

// 1
// Create <li> item 
// by entering text into <form> <input>
// and hitting 'Return' .keydown
// or .click'ing on 'Add item' <button>

// 2
// within <li> items
// check and uncheck (toggle) items text (strikethru style)
// by .click'ing the 'Check' <button>

// 3
// permanently remove <li> item by .clicking'ing 'Delete' button

// HINT
// consider these jQuery methods 
// .submit()
// .preventDefault()
// .toggleClass()
// .closest()