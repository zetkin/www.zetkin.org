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
  const { name, title, role, image, email, phone } = rest;

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
        {email && (
          <NextLink href={`mailto:${email}`} passHref>
            <Link>{email}</Link>
          </NextLink>
        )}
        {phone && <Typography>{phone}</Typography>}
      </CardActions>
    </Card>
  );
};

export default ContactCard;
