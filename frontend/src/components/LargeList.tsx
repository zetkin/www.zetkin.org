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
import makePageUrl from '../utils/makePageUrl';

const LargeList = ({ ...rest }) => {
  const { title, listItems } = rest;

  return (
    <List>
      {title && <Typography>{title}</Typography>}
      {listItems.map((item: CmsListItem, index: number) => {
        return (
          <ListItem key={`listItem-${index}`}>
            <ListItemAvatar>
              <Avatar>{index + 1}</Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography={true}
              primary={`${item.title}`}
              secondary={
                <>
                  {item.content && <Typography>{item.content}</Typography>}
                  {item.image?.data && (
                    <Image
                      alt={item.image.data.attributes.alternativeText}
                      height={100}
                      src={getCmsMedia(item.image.data.attributes.url)}
                      width={100}
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
                    <NextLink href={makePageUrl(item.page.data.id)} passHref>
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
