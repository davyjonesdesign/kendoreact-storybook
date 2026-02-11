import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar as KendoAppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '../buttons/Button';
import wheelsLogo from '../assets/wheels-logo.svg';

import '../assets/index.scss';
export const AppBar = ({ ...props }) => {

  return (
    <>
      <KendoAppBar {...props}>
        <AppBarSection>


          <img src={wheelsLogo} alt='Wheels Logo' style={{ width: '48px', height: 'auto', objectPosition: 'left', borderRadius: '0', padding: '20px 0' }} />
        </AppBarSection>
        <AppBarSpacer
          style={{
            width: 4,
          }}
        />

        <AppBarSection>
          <Button
            label="Client"
            size="medium"
            fillMode="link"
            type="button" />

          <AppBarSpacer
            style={{
              width: 15,
            }}
          />
          <AppBarSection>
            <span className="k-appbar-separator" />
          </AppBarSection>
          <AppBarSpacer
            style={{
              width: 15,
            }}
          />
          <Button
            label="Division"
            size="medium"
            fillMode="link"
            type="button" />
        </AppBarSection>


        <AppBarSpacer />

        <AppBarSection className="actions">
          <Button
            className="k-icon-button"
            fillMode="link"
            size='large'
            rounded="full"
            type="button"
            icon="search"
            togglable={true}
            showIcon={true} />
        </AppBarSection>
        <AppBarSection>
          <BadgeContainer>
            <Button
              className="k-icon-button"
              fillMode="link"
              size='large'
              rounded="full"
              type="button"
              icon="notification"
              togglable={true}
              showIcon={true} />
            <Badge
              themeColor="error"
              positionMode="top-end"
              style={{ top: '5px', right: '5px' }}
            >
              3
            </Badge>
          </BadgeContainer>
        </AppBarSection>


        <AppBarSection>
          <Button
            className="k-icon-button"
            fillMode="link"
            size='large'
            rounded="full"
            type="button"
            icon="star"
            togglable={true}
            showIcon={true} />
        </AppBarSection>

        <AppBarSection>
          <Button
            className="k-icon-button"
            fillMode="solid"
            size='large'
            rounded="full"
            type="button"
            icon="profile"
            togglable={true}
            showIcon={true} />
        </AppBarSection>
        {/* <AppBarSection className='w-burger-menu-control'>
          <Button
            className="k-icon-button"
            fillMode="link"
            size='large'
            // label='hello'
            rounded="full"
            type="button"
            icon="burger"
            togglable={true}
            showIcon={true} />
        </AppBarSection> */}
        

      </KendoAppBar>
      
    </>
    
  );
};

AppBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom']),
  positionMode: PropTypes.oneOf(['static', 'sticky', 'fixed']),
  style: PropTypes.any,
  themeColor: PropTypes.oneOf(['light', 'dark', 'inherit'])
};

AppBar.defaultProps = {
};
