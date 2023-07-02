import React from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';

export default function InvoiceForm({ isMobile, currentMobileTab }) {
	if (isMobile && Boolean(currentMobileTab)) {
		return null;
	}
	return (
		<>
			<Grid.Column>
				<Segment>
					<Form>
						<Form.Input name='filename' type='text' label='File Name' />
					</Form>
				</Segment>
			</Grid.Column>
		</>
	);
}
