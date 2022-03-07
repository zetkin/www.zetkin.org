import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NextLink from 'next/link';
import { Box } from '@mui/system';

const Blurb = ({ ...rest }) => {
  const { title, content, icon, linkLabel, externalUrl, page } = rest;
  const href = externalUrl ? externalUrl : `/${page!.data.id}`;

  const iconSx = {
    borderRadius: '50%',
    width: 150,
    height: 150,
  };

  const iconSwitch = () => {
    switch (icon) {
      case 'clock':
        return <AccessTimeIcon sx={iconSx} />;
      case 'info':
        return <InfoIcon sx={iconSx} />;
      case 'coin':
        return <MonetizationOnIcon sx={iconSx} />;
      case 'questionmark':
        return <HelpOutlineIcon sx={iconSx} />;
    }
  };

  return (
    <Card
      sx={{
        width: { lg: '23rem' },
        minHeight: { lg: '10rem' },
        marginBottom: { lg: '4rem' },
        display: { lg: 'flex' },
        flexDirection: { lg: 'column' },
        justifyContent: { lg: 'space-between' },
        alignItems: 'center',
        boxShadow: 0,
      }}
    >
      {icon && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {iconSwitch()}
        </Box>
      )}
      <CardContent>
        <Typography align="center" variant="h4" fontWeight="bold">
          {title}
        </Typography>
        {content && (
          <Typography align="center" fontSize="20px" sx={{ marginTop: '1em' }}>
            {content}
          </Typography>
        )}
      </CardContent>
      {linkLabel && (
        <CardActions>
          <NextLink href={href} passHref>
            <Button sx={{ borderRadius: '2em' }} variant="contained">
              {linkLabel}
            </Button>
          </NextLink>
        </CardActions>
      )}
    </Card>
  );
};

export default Blurb;
