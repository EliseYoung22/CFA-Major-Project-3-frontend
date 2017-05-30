import React from 'react';
import PropTypes from 'prop-types';


const BrandList = (props) => {
	return (
		<ul>
			{props.brand.map((brand, i) => <li key={i}>{brand.name}</li>)}
		</ul>
	)
};

BrandList.propTypes = {
	name: PropTypes.string.isRequired
};

export default BrandList;
