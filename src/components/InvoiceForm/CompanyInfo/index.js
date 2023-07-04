import React from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import InvoiceInput from '../InvoiceInput';
import CompanyContact from './CompanyContact';

export default function InvoiceForm({ isMobile, currentMobileTab }) {
	if (isMobile && Boolean(currentMobileTab)) {
		return <></>;
	}

	return (
		<>
			<Grid.Column>
				<Segment>
					<Form>
						<InvoiceInput name='filename' type='text' label='File Name' />

						{/* Add fields for company name, address, contact phone number */}
						<InvoiceInput name='companyName' type='text' label='Company Name' />
						<Form.Group grouped as='fieldset'>
							<legend>Company Address</legend>
							<InvoiceInput name='street' type='text' label='Street Address' parentName='companyAddress' />
							<Form.Group>
								<InvoiceInput name='city' type='text' label='City' width={12} parentName='companyAddress' />
								<InvoiceInput name='state' type='text' label='State' width={4} parentName='companyAddress' />
							</Form.Group>
							<InvoiceInput name='zip' type='text' label='Zip Code' parentName='companyAddress' />
						</Form.Group>
						<CompanyContact />
					</Form>
				</Segment>
			</Grid.Column>
		</>
	);
}
