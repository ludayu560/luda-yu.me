import './Header.css'

function Header(props: any) {
  return (
    <div className='header-div'>
        <h1 className='content'>{props.content}</h1>
    </div>
  );
}

export default Header;