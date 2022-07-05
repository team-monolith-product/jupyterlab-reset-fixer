import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-reset-fixer extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-reset-fixer:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-reset-fixer is activated!');
  }
};

export default plugin;
