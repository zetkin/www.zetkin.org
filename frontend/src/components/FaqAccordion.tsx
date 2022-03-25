import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { CmsAccordionItem } from '../types/cms';
import TextBlock from './TextBlock';

const FaqAccordion = ({ ...rest }) => {
  const { accordionItems } = rest;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (itemIndex: string) => {
    return (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? itemIndex : false);
    };
  };

  return (
    <Box
      sx={{
        marginBottom: '4rem',
        width: { lg: '60%' },
        color: 'palette.text.secondary',
      }}
    >
      {accordionItems.map((item: CmsAccordionItem, index: number) => {
        return (
          <Accordion
            expanded={expanded === `item-${index}`}
            key={`accordionItem-${index}`}
            onChange={handleChange(`item-${index}`)}
          >
            <AccordionSummary>
              <Typography variant="h5" fontWeight="bold">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextBlock {...item} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FaqAccordion;
