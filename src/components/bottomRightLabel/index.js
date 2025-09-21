import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
	render() {
		let { title, onPress, rightTextStyle, testID, accessibilityLabel } = this.props;

		if (!title) {
			return null;
		}

		return (
			<Text onPress={onPress} style={[styles.text, rightTextStyle]} testID={testID} accessibilityLabel={accessibilityLabel}>
				{title}
			</Text>
		);
	}
}
