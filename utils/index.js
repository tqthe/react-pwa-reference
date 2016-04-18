/***
 * Copyright (c) 2015, 2016 Alex Grant (@localnerve), LocalNerve LLC
 * Copyrights licensed under the BSD License. See the accompanying LICENSE file for terms.
 */
import FluxibleRouteTransformer from './FluxibleRouteTransformer';
import codes from './codes';
import node from './node';

/**
 * Factory to create a FluxibleRouteTransformer object.
 *
 * @param {Object} options - Options to control the object creation.
 * @param {Object} options.actions - The actions available for use in route transformations, and thus in the backend.
 */
export function createFluxibleRouteTransformer (options) {
  options = options || {};
  return new FluxibleRouteTransformer(options.actions);
}

export const nodeCall = node.nodeCall;
export const conformErrorStatus = codes.conformErrorStatus;

export default {
  createFluxibleRouteTransformer,
  conformErrorStatus,
  nodeCall
};