import { useHistory } from "react-router-dom";

const IsValidSession=()=>
{
    const history=useHistory();
    if (sessionStorage.getItem('uid')==='' || sessionStorage.getItem('uid')==null ) {
        sessionStorage.setItem('uid','');
        history.push('/');
      }
}

export {IsValidSession}

    


