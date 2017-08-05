import './App.css';

import { FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import React, { Component } from 'react';

import { Background } from './Background/Background';
import { Grafico } from './Grafico/Grafico.react';
import Paper from 'material-ui/Paper';
import { ResultadosEncuesta } from './ResultadosEncuesta';
import { TopBar } from './TopBar/TopBar';
import { withScreenSize } from '@vx/responsive';

const Graficos = [
  {
    field: 'PC_ESCRITORIO',
    label: 'PC de escritorio',
    results: getResultsForGraphic('PC_ESCRITORIO')
  },
  {
    field: 'NOTEBBOK',
    label: 'Notebook',
    results: getResultsForGraphic('NOTEBBOK')
  },
  {
    field: 'INTERNET',
    label: 'Conexión a Internet',
    results: getResultsForGraphic('INTERNET')
  },
  {
    field: 'CONSOLA_VIDEOJUEGO',
    label: 'Consola de videojuego',
    results: getResultsForGraphic('CONSOLA_VIDEOJUEGO')
  },
  {
    field: 'CELULAR_SIN_INTERNET',
    label: 'Celular sin Internet',
    results: getResultsForGraphic('CELULAR_SIN_INTERNET')
  },
  {
    field: 'CELULAR_CON_INTERNET',
    label: 'Celular con Internet',
    results: getResultsForGraphic('CELULAR_CON_INTERNET')
  },
  {
    field: 'PERSONAL_PC_ESCRITORIO',
    label: 'PC de escritorio personal',
    results: getResultsForGraphic('PERSONAL_PC_ESCRITORIO')
  },
  {
    field: 'PERSONAL_NOTEBOOK',
    label: 'Notebook personal',
    results: getResultsForGraphic('PERSONAL_NOTEBOOK')
  },
  {
    field: 'USA_INTERNET',
    label: 'Usa internet',
    results: getResultsForGraphic('USA_INTERNET')
  }
];

function getResultsForGraphic(field) {
  return ResultadosEncuesta.reduce(
    (result, item) => {
      if (item[field]) {
        result[0].value++;
      } else {
        result[1].value++;
      }
      return result;
    },
    [{ label: 'Si', value: 0 }, { label: 'No', value: 0 }]
  ).map(item => ({ label: item.label, value: item.value * 100 / ResultadosEncuesta.length }));
}

function getGraficoByField(field) {
  return Graficos.find(grafico => grafico.field === field);
}

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
        <Paper
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'transparent'
          }}
        >
          <TopBar title="Encuesta Joven" />
          <div
            style={{
              display: '-webkit-flex',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '90%'
            }}
          >
            <Grafico grafico={getGraficoByField(this.state.grafico)} width="500" height="500" />
            <FormControl style={{ marginLeft: '20px' }}>
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
