import { MenuGroups } from 'components';
import linkPersonal from 'assets/json/linkPersonal.json';
const AboutPersonalLayout = () => {
  return <MenuGroups linkArray={linkPersonal} lable="personl-info" />;
};
export default AboutPersonalLayout;
