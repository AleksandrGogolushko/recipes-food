import * as React from 'react';
import './NavigationLink.css';
import { NavLink, useParams } from 'react-router-dom';

export const NavigationLink = React.memo((props: any) => {
  const [activeNav, setActiveNav] = React.useState('my-profile');
  const path = useParams();

  React.useEffect(()=>{
    setActiveNav(path['sections']);
  }, []);

  return (
    <>
      {props.NavigationLink.map((el)=> {
        return (
          <NavLink to={`/my-account/${el.urlPath}`} key={el.id}>
            <li
              onClick={() => setActiveNav(el.urlPath)}
              className={`Account_navigation__list 
              ${activeNav == el.urlPath ? 'Account_navigation__list_active' : ''}`}>
              {activeNav == el.urlPath ? el.icon.iconSelect : el.icon.iconElement}
              {el.nameLink}
            </li>
          </NavLink>
        );
      })}
    </>
  );
});
