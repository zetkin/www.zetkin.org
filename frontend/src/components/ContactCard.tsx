import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

import getCmsMedia from '../utils/getCmsMedia';

const ContactCard = ({ ...rest }) => {
  const { name, cardTitle, role, image, email, phone } = rest;

  return (
    <Card
      sx={{
        backgroundColor: 'secondary.light',
        width: { lg: '60%' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: { lg: '5em' },
        marginBottom: '4em',
        paddingBottom: '1em',
        overflow: 'visible',
      }}
    >
      <CardMedia
        alt={image.data.attributes.alternativeText}
        component="img"
        image={getCmsMedia(image.data.attributes.url)}
        sx={{
          marginTop: '-100px',
          borderRadius: '50%',
          width: 200,
          height: 200,
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {cardTitle && (
          <Typography variant="h4" fontWeight="bold" p="1em">
            {cardTitle}
          </Typography>
        )}
        <Typography fontSize={24} fontWeight="bold">
          {name}
        </Typography>
        {role && <Typography fontSize={20}>{role}</Typography>}
      </CardContent>
      <CardActions>
        {email && (
          <NextLink href={`mailto:${email}`} passHref>
            <Link underline="none">
              <Typography fontSize={20} fontWeight="bold">
                {email}
              </Typography>
            </Link>
          </NextLink>
        )}
        {phone && (
          <NextLink href={`tel:${phone}`} passHref>
            <Link underline="none">
              <Typography fontSize={20} fontWeight="bold">
                {phone}
              </Typography>
            </Link>
          </NextLink>
        )}
      </CardActions>
    </Card>
  );
};

export default ContactCard;
