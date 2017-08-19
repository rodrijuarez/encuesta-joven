import './App.css';

import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import React, { Component } from 'react';

import { Background } from './Background/Background';
import { Grafico } from './Grafico/Grafico.react';
import { Graficos } from './Graficos';
import Paper from 'material-ui/Paper';
import { TopBar } from './TopBar/TopBar';
import { withScreenSize } from '@vx/responsive';

function getGraficoByField(field) {
  return Graficos.find(grafico => grafico.field === field);
}

const paperStyles = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'transparent'
  },
  containerStyles = {
    display: '-webkit-flex',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%'
  },
  formStyles = { marginLeft: '20px' };

class App extends Component {
  state = {
    grafico: Graficos[0].field
  };

  handleChange = (event, value) => {
    this.setState({ grafico: value });
  };

  render() {
    const { screenWidth, screenHeight } = this.props;

    return (
      <div
        style={{
          height: '100%'
        }}
      >
        <Background width={screenWidth} height={screenHeight} />
        <Paper style={paperStyles}>
          <TopBar title="Encuesta Joven" />
          <div style={containerStyles}>
            <Grafico grafico={getGraficoByField(this.state.grafico)} width="500" height="500" />
            <FormControl style={formStyles}>
              <FormLabel>Gráfico</FormLabel>
              <RadioGroup aria-label="grafico" name="grafico" selectedValue={this.state.grafico} onChange={this.handleChange}>
                {Graficos.map(grafico =>
                  <FormControlLabel key={grafico.field} value={grafico.field} control={<Radio />} label={grafico.label} />
                )}
              </RadioGroup>
            </FormControl>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withScreenSize(App);
