import  {Link} from 'react-router-dom'
// import logo from '../assets/imagem.png'

const Nav = () => {
  return (
    <header>
      <nav>
        {/* <img src={} alt="logo" /> */}
        <ul>
          <li>
            <Link to='/'>Home</Link>
            
          </li>
          <li>
            <Link to='/Cliente'>Cliente</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav