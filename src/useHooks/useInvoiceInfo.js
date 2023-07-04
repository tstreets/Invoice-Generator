import React from 'react';

const InvoiceFormContext = React.createContext();

export function InvoiceProvider({ children }) {
	const [invoiceInfo, setInvoiceInfo] = React.useState({
		filename: '',
		companyName: '',
		companyAddress: {
			street: '',
			city: '',
			state: '',
			zip: '',
		},
		companyPhone: '',
	});
	return <InvoiceFormContext.Provider value={{ invoiceInfo, setInvoiceInfo }}>{children}</InvoiceFormContext.Provider>;
}

export default function useInvoiceInfo() {
	return React.useContext(InvoiceFormContext) || {};
}
