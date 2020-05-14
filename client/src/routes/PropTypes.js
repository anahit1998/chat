import PropTypes from 'prop-types';

export const matchPT = PropTypes.shape({
  params: PropTypes.shape({}).isRequired,
  isExact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const locationPT = PropTypes.shape({});
