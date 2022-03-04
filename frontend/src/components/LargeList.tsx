import {
  Avatar,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import { CmsListItem } from '../types/cms';
import getCmsMedia from '../utils/getCmsMedia';

const LargeList = ({ ...rest }) => {
  const { title, listItems } = rest;

  return (
    <List>
      {title && <Typography variant="h4">{title}</Typography>}
      {listItems.map((item: CmsListItem, index: number) => {
        return (
          <ListItem key={`listItem-${index}`}>
            <ListItemAvatar>
              <Avatar>{index + 1}</Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography={true}
              primary={<Typography variant="h5">{item.title}</Typography>}
              secondary={
                <>
                  {item.content && <Typography>{item.content}</Typography>}
                  {item.image?.data && (
                    <Image
                      alt={item.image.data.attributes.alternativeText}
                      height={item.image.data.attributes.height}
                      src={getCmsMedia(item.image.data.attributes.url)}
                      width={item.image.data.attributes.width}
                    />
                  )}
                  {item.externalUrl && (
                    <NextLink href={item.externalUrl} passHref>
                      <Link>
                        {item.linkLabel ? item.linkLabel : item.externalUrl}
                      </Link>
                    </NextLink>
                  )}
                  {item.page?.data && (
                    <NextLink href={`/${item.page.data.id}`} passHref>
                      <Link>
                        {item.linkLabel
                          ? item.linkLabel
                          : item.page.attributes?.title}
                      </Link>
                    </NextLink>
                  )}
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default LargeList;
