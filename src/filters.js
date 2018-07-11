const {first, reduce} = require("lodash");

const {productContentTypes} = require('../additionalContentTypes');

const allowMultipleFacets = (contentTypes, entry, facetName) => {
  const entryType = entry.sys.contentType.sys.id;
  const x = contentTypes.filter(cT => cT.sys.id === entryType);
  const y = first(x).fields.filter(f => f.id === facetName);

  if(!first(y))
    return true;

  return !first(y).validations.length;
};

const filterProductValues = (values, type) => {
  if (type === 'sku') {
    return reduce(values, (agg, val, key) => {
      if (!productContentTypes.includes(key) || key === 'sticker')
        agg.push({
          'key': key,
          'value': val[0]
        });

      return agg;
    }, []);
  }

  return reduce(values, (agg, val, key) => {
    if (productContentTypes.includes(key))
      agg.push({
        'key': key,
        'value': val[0]
      });

    return agg;
  }, []);
};

module.exports = {
  allowMultipleFacets,
  filterProductValues
};