'use strict';

import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateItemsPage from './generateItemsPage.js';
import { loadData } from './loadData.js';

generateHeader();
generateFooter();
generateCatalog();
generateItemsPage();
loadData();