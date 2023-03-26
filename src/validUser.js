import { useHistory } from "react-router-dom";

const IsValiduser=(user_id)=>
{
  //console.log(user_id.uid);
    const history=useHistory();
    if (sessionStorage.getItem('uid')==='' || sessionStorage.getItem('uid')==null
     || user_id.uid!==sessionStorage.getItem('uid') ) {
        sessionStorage.setItem('uid','');
        history.push('/');
      }
}

export {IsValiduser}