/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import GenAIGrid from '../../../shared/storybook/Grid/GenAIGrid';
import GenAIContainer from '../../../shared/storybook/Container/GenAIContainer';
import GenAIAppBar from '../../../shared/storybook/AppBar/GenAIAppBar';
import GenAIBox from '../../../shared/storybook/Box/GenAIBox';
import Logo from '../../../assets/icons/genAiLogo.svg';
import UserIcon from '../../../assets/icons/user-icon.svg';
import DownArrow from '../../../assets/icons/Down-arrow.svg';
import './Appbar.scss';
import { GenAIButtonContained } from '../../../shared/storybook/Buttons/GenAIButtonContained';

const Appbar = () => (
  <GenAIAppBar className="gen-ai-header">
    <GenAIContainer className="headerContainer" maxWidth={false}>
      <GenAIGrid container>
        <GenAIGrid item className="logoContainer" xs={1}>
          <Tabs value={1} indicatorColor={null} disableGutters disableRipple>
            <Tab
              disableRipple
              component={Link}
              className="iconImage"
              icon={<img src={Logo} alt="genAI logo" />}
            ></Tab>
          </Tabs>
        </GenAIGrid>
        <GenAIGrid item xs={8}>
          <GenAIBox className="headerTabWrapper">
            <GenAIBox>
              <Tabs>
                <Tab className="headerTabs" label="Page 1" component={Link} />
                <Tab className="headerTabs" label="Page 2" component={Link} />
                <Tab className="headerTabs" label="Page 3" component={Link} />
              </Tabs>
            </GenAIBox>
          </GenAIBox>
        </GenAIGrid>
        <GenAIGrid className="userWrapper" item xs={3}>
          <Stack className="userWrapper-row" direction="row">
            <div>
              <Button
                className="userButton"
                disableRipple
                id="composition-button"
                size="small"
              >
                <GenAIBox className="userIcon">
                  <img src={UserIcon} alt="user icon" />
                </GenAIBox>
                Achyuth
                <GenAIBox className="userDownArrow">
                  <img src={DownArrow} alt="down arrow" />
                </GenAIBox>
              </Button>
              <Popper
                className="userPopper"
                role={undefined}
                placement="bottom-end"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom',
                    }}
                    className="userOption"
                  >
                    <Paper>
                      <ClickAwayListener>
                        <MenuList
                          id="composition-menu"
                          aria-labelledby="composition-button"
                        >
                          <MenuItem>
                            <h4>My Account</h4>
                          </MenuItem>
                          <GenAIButtonContained>Sign Out</GenAIButtonContained>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </Stack>
        </GenAIGrid>
      </GenAIGrid>
    </GenAIContainer>
  </GenAIAppBar>
);

export default Appbar;
