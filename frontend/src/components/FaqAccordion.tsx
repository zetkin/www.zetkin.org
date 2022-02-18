import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { CmsAccordionItem } from '../types/cms';

const FaqAccordion = ({ ...rest }) => {
  const { accordionItems } = rest;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (itemIndex: string) => {
    return (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? itemIndex : false);
    };
  };

  return accordionItems.map((item: CmsAccordionItem, index: number) => {
    return (
      <Accordion
        expanded={expanded === `item-${index}`}
        key={`accordionItem-${index}`}
        onChange={handleChange(`item-${index}`)}
      >
        <AccordionSummary>
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{item.content}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
};

export default FaqAccordion;
