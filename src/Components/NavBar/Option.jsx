
import { Link } from 'react-scroll';

export const Option = (props) => {
    const{Nav, offset} = props.data;
    return (
        <li className='Links'><Link to={Nav} activeClass='active' offset={offset} duration={1000} smooth={true} spy={true} >{Nav}</Link></li>
    )
}
