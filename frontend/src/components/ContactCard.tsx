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
    <Card>
      <CardMedia
        alt={image.data.attributes.alternativeText}
        component="img"
        height={100}
        image={getCmsMedia(image.data.attributes.url)}
      />
      <CardContent>
        {cardTitle && <Typography>{cardTitle}</Typography>}
        <Typography>{name}</Typography>
        {role && <Typography>{role}</Typography>}
      </CardContent>
      <CardActions>
        {email && (
          <NextLink href={`mailto:${email}`} passHref>
            <Link>{email}</Link>
          </NextLink>
        )}
        {phone && (
          <NextLink href={`tel:${phone}`} passHref>
            <Link>{phone}</Link>
          </NextLink>
        )}
      </CardActions>
    </Card>
  );
};

export default ContactCard;
