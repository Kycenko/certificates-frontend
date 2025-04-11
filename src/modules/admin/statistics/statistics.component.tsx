import CertificatesStatistics from './certificates-statistics'
import CountStatistics from './count-statistics'

function StatisticsComponent() {
	return (
		<div>
			<CountStatistics />
			<CertificatesStatistics />
		</div>
	)
}

export default StatisticsComponent
