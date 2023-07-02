import { Document, Page, usePDF, View, Text, PDFViewer } from '@react-pdf/renderer/lib/react-pdf.browser.cjs';
import { Grid, Header, Segment } from 'semantic-ui-react';

/**
 * @type {import('react-native/types').ViewStyle}
 */
const previewStyle = {
	width: '100%',
	height: '70vh',
};

/**
 * @type {import('react-native/types').ViewStyle[]} List of styles for different view types
 */
const [] = [];

/**
 * @type {import('react-native/types').TextStyle[]} List of stlyes from different text types
 */
const [] = [];

function InvoicePdfDocument() {
	return (
		<Document>
			<Page>
				<View>
					<Text>Invoice</Text>
				</View>
			</Page>
		</Document>
	);
}

export function useInvoicePdf(props) {
	const [pdfInfo] = usePDF({ document: InvoicePdfDocument(props) });
	return pdfInfo;
}

export function InvoicePdfPreview({ isMobile, currentMobileTab, ...props }) {
	if (isMobile && !Boolean(currentMobileTab)) {
		return null;
	}
	return (
		<Grid.Column>
			<Segment>
				<Header as='h2' content='Invoice Preview' />
				<PDFViewer style={previewStyle}>
					<InvoicePdfDocument {...props} />
				</PDFViewer>
			</Segment>
		</Grid.Column>
	);
}
