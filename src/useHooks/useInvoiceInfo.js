import React from 'react';

const InvoiceFormContext = React.createContext();

const initialInvoiceInfo = {
	filename: 'Invoice',
	companyName: 'ABC Company',
	companyAddress: {
		street: '1234 Fake Street',
		city: 'Springfield',
		state: 'IL',
		zip: '62701',
	},
	companyPhone: '312-970-3663',
};

export function InvoiceProvider({ children }) {
	const [invoiceInfo, setInvoiceInfo] = React.useState(initialInvoiceInfo);
	return <InvoiceFormContext.Provider value={{ invoiceInfo, setInvoiceInfo }}>{children}</InvoiceFormContext.Provider>;
}

/**
 *
 * @returns {{ invoiceInfo: initialInvoiceInfo}}
 */
export default function useInvoiceInfo() {
	return React.useContext(InvoiceFormContext) || { invoiceInfo: initialInvoiceInfo };
}
