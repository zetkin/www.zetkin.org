import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NextLink from 'next/link';

import makePageUrl from '../utils/makePageUrl';

const Blurb = ({ ...rest }) => {
  const { title, content, icon, linkLabel, externalUrl, page } = rest;
  const href = externalUrl ? externalUrl : makePageUrl(page!.data.id);

  const iconSwitch = () => {
    switch (icon) {
      case 'clock':
        return <AccessTimeIcon fontSize="large" />;
      case 'info':
        return <InfoIcon fontSize="large" />;
      case 'coin':
        return <MonetizationOnIcon fontSize="large" />;
      case 'questionmark':
        return <HelpOutlineIcon fontSize="large" />;
    }
  };

  return (
    <Card>
      <CardContent>
        {icon && iconSwitch()}
        <Typography>{title}</Typography>
        {content && <Typography>{content}</Typography>}
      </CardContent>
      {linkLabel && (
        <CardActions>
          <NextLink href={href} passHref>
            <Link>{linkLabel}</Link>
          </NextLink>
        </CardActions>
      )}
    </Card>
  );
};

export default Blurb;
