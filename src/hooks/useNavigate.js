import { useNavigate } from 'react-router-dom';

export default function Redirect() {
  let navigate = useNavigate();
  return (function handleClick(event) {
    event.preventDefault();
    let target = event.target.href;
    navigate(`/${target}`);
    console.info('You clicked a breadcrumb.');
  })();
}
