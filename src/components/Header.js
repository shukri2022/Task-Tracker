import {useLocation} from 'react-router-dom';

import Button from "./Button";
const Header = ({title,onAdd,showAdd}) => {
  const location = useLocation()
 
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname=== '/'&& <Button color ={showAdd ? 'red' :'green'} text ={showAdd ? 'close' : 'add'} onClick={onAdd} />}
      
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}
// css in js
// const headingStyle = {
//   color:"red",backgroundColor:'beige'
// }

export default Header;
