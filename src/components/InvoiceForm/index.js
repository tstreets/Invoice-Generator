import React from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import useInvoiceInfo from '@/useHooks/useInvoiceInfo';
import InvoiceInput from './InvoiceInput';

export default function InvoiceForm({ isMobile, currentMobileTab }) {
	const { invoiceInfo, setInvoiceInfo } = useInvoiceInfo();
	if (isMobile && Boolean(currentMobileTab)) {
		return <></>;
	}

	// Create function to format phone number to 555-555-5555 format
	function formatPhoneNumber(phoneNumberString) {
		// Strip all non-digits
		var cleaned = ('' + phoneNumberString).replace(/\D/g, '');

		// Trim the remaining string to ten characters, to preserve phone number format
		cleaned = cleaned.substring(0, 10);

		// Based upon the length of the string, we add formatting as necessary
		var char = { 0: '(', 3: ') ', 6: '-' };
		var formatted = '';
		for (var i = 0; i < cleaned.length; i++) {
			formatted += (char[i] || '') + cleaned[i];
		}

		return formatted;
	}

	// Create function that handles semantic ui onChange event for phone number
	function handlePhoneChange(e, { value }) {
		const formattedValue = formatPhoneNumber(value);
		setInvoiceInfo({ ...invoiceInfo, companyPhone: formattedValue });
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
						<InvoiceInput
							name='companyPhone'
							type='text'
							label='Company Phone'
							value={invoiceInfo.companyPhone}
							onChange={handlePhoneChange}
						/>
					</Form>
				</Segment>
			</Grid.Column>
		</>
	);
}
