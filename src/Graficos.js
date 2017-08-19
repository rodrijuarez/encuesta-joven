import { ResultadosEncuesta } from './ResultadosEncuesta';

export const Graficos = [
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
