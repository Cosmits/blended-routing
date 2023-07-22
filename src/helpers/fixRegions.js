//{ id: 'africa', value: 'africa', name: 'Africa' },

export function fixRegions(arr) {
  return arr.map((el) => {
    el.id = el.region.toLowerCase();
    el.value = el.region.toLowerCase();
    el.name = el.region;
    return el;
  })  
}