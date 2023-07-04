import React from 'react';
import useInvoiceInfo from '@/useHooks/useInvoiceInfo';
import InvoiceInput from '../InvoiceInput';

export default function CompanyContact() {
	const { invoiceInfo, setInvoiceInfo } = useInvoiceInfo();

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
			<InvoiceInput
				name='companyPhone'
				type='text'
				label='Company Phone'
				value={invoiceInfo.companyPhone}
				onChange={handlePhoneChange}
			/>
		</>
	);
}
