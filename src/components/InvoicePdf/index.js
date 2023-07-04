import { Document, Page, usePDF, PDFViewer, Text } from '@react-pdf/renderer/lib/react-pdf.browser.cjs';
import { Button, Grid, Header, Segment } from 'semantic-ui-react';
import PdfCompanyInfo from './CompanyInfo';
import useInvoiceInfo from '@/useHooks/useInvoiceInfo';

/**
 * @type {import('react-native/types').ViewStyle}
 */
const previewStyle = {
	width: '100%',
	height: '70vh',
};

function InvoicePdfDocument({ invoiceInfo }) {
	return (
		<Document>
			<Page style={{ marginHorizontal: 24, marginVertical: 36 }}>
				<PdfCompanyInfo {...invoiceInfo} />
			</Page>
		</Document>
	);
}

export function useInvoicePdf(props) {
	const [pdfInfo] = usePDF({ document: InvoicePdfDocument(props) });
	return pdfInfo;
}

export function InvoicePdfPreview({ isMobile, currentMobileTab, ...props }) {
	const { invoiceInfo } = useInvoiceInfo();
	const { url } = useInvoicePdf({ ...props, invoiceInfo });
	if (isMobile && !Boolean(currentMobileTab)) {
		return <> </>;
	}
	return (
		<Grid.Column>
			<Segment>
				<Header as='h2' content='Invoice Preview' />
				<Button content='Download' as='a' download={invoiceInfo.filename.replace('.pdf', '').concat('.pdf')} href={url} />
				<PDFViewer style={previewStyle} showToolbar={false}>
					<InvoicePdfDocument {...props} invoiceInfo={invoiceInfo} />
				</PDFViewer>
			</Segment>
		</Grid.Column>
	);
}
