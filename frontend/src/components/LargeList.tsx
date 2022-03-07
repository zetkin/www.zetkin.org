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
    <List
      sx={{
        width: { lg: '60%' },
      }}
    >
      {title && (
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
      )}
      {listItems.map((item: CmsListItem, index: number) => {
        return (
          <ListItem
            key={`listItem-${index}`}
            sx={{
              display: { lg: 'flex' },
              flexDirection: { lg: 'row' },
              alignItems: { lg: 'flex-start' },
            }}
          >
            <ListItemAvatar
              sx={{
                paddingTop: { lg: '0.3em' },
              }}
            >
              <Avatar
                sx={{
                  backgroundColor: 'primary.main',
                }}
              >
                {index + 1}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography={true}
              primary={
                <Typography variant="h5" fontWeight="bold">
                  {item.title}
                </Typography>
              }
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
