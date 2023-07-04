import { View, Text } from '@react-pdf/renderer/lib/react-pdf.browser.cjs';
import { regularText, headerText, courierFontFamily } from './pdfStyles';

export default function PdfCompanyInfo({ companyAddress: { state, street, city, zip }, companyName, companyPhone }) {
	return (
		<View>
			<Text style={{ ...headerText, fontFamily: courierFontFamily }}>{companyName || '{COMPANY_NAME}'}</Text>
			<Text style={regularText}>{street || '{STREET_ADDRESS}'}</Text>
			<Text style={regularText}>
				{city || '{CITY}'}, {state || '{STATE}'} {zip || '{ZIP_CODE}'}
			</Text>
			<Text style={regularText}>{companyPhone || '{COMPANY_PHONE}'}</Text>
		</View>
	);
}
