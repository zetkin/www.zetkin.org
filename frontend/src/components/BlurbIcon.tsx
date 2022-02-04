import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';

const BlurbIcon = ({icon}: {icon: string}) => {
  switch (icon) {
    case 'clock':
      return <AccessTimeIcon fontSize='large'/>
    case 'coin':
      return <MonetizationOnIcon fontSize='large'/>
    case 'info':
      return <InfoIcon fontSize='large'/>
    default:
      return <></>
  }
};

export default BlurbIcon;
