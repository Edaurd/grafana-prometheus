// DONT NEED THIS BUT MAYBE EXPORT THIS TO CORE PROM

import { DataSourcePlugin } from '@grafana/data';

import PromCheatSheet from './components/PromCheatSheet';
import PromQueryEditorByApp from './components/PromQueryEditorByApp';
import { ConfigEditor } from './configuration/ConfigEditor';
import { PrometheusDatasource } from './datasource';

console.log("initialized from moduke.ts");

export const plugin = new DataSourcePlugin(PrometheusDatasource)
  .setQueryEditor(PromQueryEditorByApp)
  .setConfigEditor(ConfigEditor)
  .setQueryEditorHelp(PromCheatSheet);

