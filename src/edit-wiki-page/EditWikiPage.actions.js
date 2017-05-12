import $ from 'jquery';

export function changeState(value, field) {
  return{
    type: 'changeState',
    content: value,
    field: field

  }
}

export function savePage(title, editBody) {
  let asyncAction = function(dispatch) {
    $.ajax({
      type: "PUT",
      url: "http://localhost:4000/api/page/" + title,
      contentType: 'application/json',
      data: JSON.stringify({content: editBody})
    })
    .then(result => dispatch({type: 'success'}))
    .catch(error => dispatch({type: 'error'}));
  };
  return asyncAction;
}
