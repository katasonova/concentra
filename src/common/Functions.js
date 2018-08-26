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

//call() useless for an arrow function, and if we can't change this line onClick={item => handleOnPageNavigation.call(this, item)}, we have to remember call()'s behavier; and call() is meaningful only for function, it can pass contex (but not for arrow functions)
export const handleOnPageNavigation = function (item) {
    this.setState({
        page: item.key
    });
};