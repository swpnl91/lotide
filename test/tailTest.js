
const assert = require('chai').assert;
//const assertEqual = require('../assertEqual')
const tail = require('../tail')


describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });

  it("returns ['Chandler', 'Joey', 'Rachel'] for ['Monica', 'Chandler', 'Joey', 'Rachel']", () => {
    assert.deepEqual(tail(['Monica', 'Chandler', 'Joey', 'Rachel']), ['Chandler', 'Joey', 'Rachel']);
  });

}); 
