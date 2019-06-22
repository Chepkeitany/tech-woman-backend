/**
 * Heroine.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:         { type:'string', required:true, unique:true },
    photo_url:    { type:'string', required:true, unique:true },
    description:  { type:'string', required:true, unique:true },
    period_alive: { type:'string' },
    category:     { type: 'string',required: true,
      isIn: ['pioneer', 'unsung_hero', 'modern'] }
  },

};

