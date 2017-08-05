import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export class TopBar extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

TopBar.propTypes = {
  title: PropTypes.string
};
