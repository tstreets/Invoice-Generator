import React from 'react';
import { Form } from 'semantic-ui-react';
import useInvoiceInfo from '@/useHooks/useInvoiceInfo';

export default function InvoiceInput({ name, parentName, onChange, ...restOfProps }) {
	const { invoiceInfo, setInvoiceInfo } = useInvoiceInfo();

	function handleChange(e, { value }) {
		if (parentName) {
			setInvoiceInfo({ ...invoiceInfo, [parentName]: { ...invoiceInfo[parentName], [name]: value } });
		} else {
			setInvoiceInfo({ ...invoiceInfo, [name]: value });
		}
	}

	return (
		<Form.Input
			name={name}
			value={parentName ? invoiceInfo[parentName][name] : invoiceInfo[name]}
			onChange={onChange ? onChange : handleChange}
			{...restOfProps}
		/>
	);
}
