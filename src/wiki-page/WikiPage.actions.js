import $ from 'jquery';




export function pageError(resp) {
  let error=(resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
  return {type: 'pageError', error: error};
}
//this.props.params.title from wikipage.js refers to the parameter in title in the fetchPage
export function fetchPage(title) {
  let asyncAction = function(dispatch) {
    $.ajax({
      method: 'GET',
      url:`http://localhost:4000/api/page/` + title
    })
    .then(data => dispatch({type: 'content', data: data}))
    .catch(resp => dispatch(pageError(resp)))
  };
  return asyncAction;
}
