import { Popover, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { CmsMainMenuTab } from "../../types/cms";
import MainMenuItem from "./MainMenuItem";

const MainMenuTab = ({ attributes }: CmsMainMenuTab) => {
  const { tabName, section1, section2, section3 } = attributes;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        aria-describedby={open ? `${tabName}-popover` : undefined}
        onMouseEnter={handlePopoverOpen}
        sx={{
          padding: 2,
          border: 1
        }}
      >
        {tabName}
      </Box>
      <Popover
        id={open ? `${tabName}-popover` : undefined}
        onClose={handlePopoverClose}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '100%',
          }
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Box sx={{
            width: '30%',
          }}>
            {section1?.map((menuItem, index) => <MainMenuItem key={`menuItem-${index}`} {...menuItem}/>)}
          </Box>
          <Box sx={{
            width: '30%',
          }}>
            {section2?.map((menuItem, index) => <MainMenuItem key={`menuItem-${index}`} {...menuItem}/>)}
          </Box>
          <Box sx={{
            width: '30%',
          }}>
            {section3?.map((menuItem, index) => <MainMenuItem key={`menuItem-${index}`} {...menuItem}/>)}
          </Box>
        </Box>
      </Popover>
    </>
  )
};

export default MainMenuTab;
