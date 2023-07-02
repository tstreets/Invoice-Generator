import { InvoicePdfPreview } from '@/components/InvoicePdf';
import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import useDimensions from '@/useHooks/useDimensions';
import InvoiceForm from '@/components/InvoiceForm';
import MobileToggle from '@/components/MobileToggle';

export default function LandingPage() {
	const [currentMobileTab, setCurrentMobileTab] = React.useState(0);
	const { width } = useDimensions();
	const isMobile = width < 700;
	return (
		<>
			<h1>Landing Page</h1>
			<Segment basic>
				<Grid columns={isMobile ? '1' : '2'}>
					<MobileToggle isMobile={isMobile} currentMobileTab={currentMobileTab} setCurrentMobileTab={setCurrentMobileTab} />
					<InvoiceForm isMobile={isMobile} currentMobileTab={currentMobileTab} />
					<InvoicePdfPreview isMobile={isMobile} currentMobileTab={currentMobileTab} />
				</Grid>
			</Segment>
		</>
	);
}
