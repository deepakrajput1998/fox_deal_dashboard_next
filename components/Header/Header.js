import classes from './Header.module.css'
import logox from '../../Assest/Images/logox.png'
import Image from "next/image";
const Header = ({ siderdrawerOpenHandler, siderdrawerCloseHandler ,...rest}) => {
  return (
    <div className={classes.header_main}>
      <span
        onClick={() => {
          siderdrawerOpenHandler();
        }}
      >
        <div className={classes.header_main_brand_image}>
          <Image
            className={classes.brand_image}
            width={50}
            height={50}
            src={logox}
            srcSet=""
          />
        </div>
      </span>
    </div>
  );
};

export default Header
