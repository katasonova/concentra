'use strict';

import _ from 'lodash';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
    return _.startCase(text);
};

// Handles page navigation
/*export const handleOnPageNavigation = item =>
  this.setState({
    page: item.key
  });*/

//Temporary 
export const handleOnPageNavigation = function (item) {
    this.setState({
        page: item.key
    });
};