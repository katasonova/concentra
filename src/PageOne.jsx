'use strict';

// Load NPM modules
import React from 'react';

// Load antDesign modules
import { Input, Table } from 'antd';

// Gets an object which has the count of letters
const getLetterCount = text => {
  const result = {};
   [...text.replace( /[^a-zA-Z]/g, "")].forEach(resultIndex =>
   result[resultIndex] ? result[resultIndex]++ : result[resultIndex] = 1);  
  return result;
};

const exampleText = 'Lor49em ipsum d90olor sit amet';
console.log(getLetterCount(exampleText));

// Define columns
const getColumns = (text, increment) => {
  const { Column, ColumnGroup } = Table;
  const data = [];  
  let dataLength = 3;    
  for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
    data.push({
        title: `${[lowerBound]} - ${[upperBound]}`,
        dataIndex: `${[lowerBound]} - ${[upperBound]}`,
    });
      
  return [
    {
      title: 'Letter',
      dataIndex: 'name',
      render: text => <b>{text}</b>
    }
  ];
};
      
console.log(getColumns('Lor49em ipsum d90olor sit amet'), 10);      

// Build entry
const getLetterRow = (letter, count, template) => {
  return {};
};

// Get row template
const getRowTemplate = (text, increment) => {
  return {};
};

// Define data source
const getDataSource = (text, increment) => {
  return [];
};

// Build text box
const buildTextBox = (state, updateState) => (
  <Input.TextArea
    rows={8}
    style={{ marginBottom: '24px' }}
    value={state.text}
    onChange={e => updateState({ text: e.target.value })}
  />
);

// Build table
const buildTable = (dataSource, columns) => (
  <Table dataSource={dataSource} columns={columns} />
);

// Define export
export default (state, updateState) => (
  <div className="page-one">
    <h2>Enter Text:</h2>
    {buildTextBox(state, updateState)}
    <h2>View Letters by Count:</h2>
    {buildTable(
      getDataSource(state.text, state.increment),
      getColumns(state.text, state.increment)
    )}
  </div>
);
