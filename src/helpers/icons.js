import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterest,
    faYoutube,

    faCopyright
  );
};

export default Icons;
