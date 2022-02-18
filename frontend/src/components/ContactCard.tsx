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
  const { name, title, role, contact, image } = rest;

  return (
    <Card>
      <CardMedia
        alt={image.data.attributes.alternativeText}
        component="img"
        height={100}
        image={getCmsMedia(image.data.attributes.url)}
      />
      <CardContent>
        {title && <Typography>{title}</Typography>}
        <Typography>{name}</Typography>
        {role && <Typography>{role}</Typography>}
      </CardContent>
      <CardActions>
        {contact.email && (
          <NextLink href={`mailto:${contact.email}`} passHref>
            <Link>{contact.email}</Link>
          </NextLink>
        )}
        {contact.phone && <Typography>{contact.phone}</Typography>}
        {contact.websiteUrl && (
          <NextLink href={contact.websiteUrl} passHref>
            <Link>{contact.websiteName? contact.websiteName : contact.websiteUrl}</Link>
          </NextLink>
        )}
      </CardActions>
    </Card>
  );
};

export default ContactCard;
