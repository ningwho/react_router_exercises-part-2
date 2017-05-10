import $ from 'jquery';

export function pageError(resp) {
  let error=(resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return {type: 'pageError', error: error};
}

export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url:`http://localhost:4000/api/pages`
    })
    .then(data => dispatch({type: 'content', data: data}))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
