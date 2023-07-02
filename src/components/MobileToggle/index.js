import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default function MobileToggle({ isMobile, currentMobileTab, setCurrentMobileTab }) {
	return (
		<>
			<Grid.Row textAlign='center' style={{ display: isMobile ? undefined : 'none' }}>
				<Grid.Column>
					<Button.Group>
						<Button content='Form' secondary={!Boolean(currentMobileTab)} onClick={setCurrentMobileTab.bind(null, 0)} />
						<Button content='Preview' secondary={Boolean(currentMobileTab)} onClick={setCurrentMobileTab.bind(null, 1)} />
					</Button.Group>
				</Grid.Column>
			</Grid.Row>
		</>
	);
}
