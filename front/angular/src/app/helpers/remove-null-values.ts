export function RemoveNullObject (values:object):object {
    Object.keys(values).forEach(key => {
      if (values[key] && typeof values[key] === 'object') RemoveNullObject (values[key]);
      else if (values[key] == null || !(String (values[key]).trim()).length) delete values[key];
    });
  return values;
}