'use strict';

/**
 * create-resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-resume.create-resume');
