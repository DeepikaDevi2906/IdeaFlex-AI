import {
    HiDocumentText
} from "react-icons/hi2";

function ReportViewer({ reports = [] }) {

    return (

        <div className="report-container">

            {
                reports.length === 0 ? (

                    <div className="empty-report-state">

                        <div className="empty-report-icon">
                            <HiDocumentText />
                        </div>

                        <h3>
                            No Reports Generated
                        </h3>

                        <p>
                            Generate startup analysis reports
                            using AI agents and they will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="report-list">

                        {
                            reports.map((report, index) => (

                                <div
                                    className="report-card"
                                    key={index}
                                >

                                    <div className="report-left">

                                        <div className="report-file-icon">
                                            <HiDocumentText />
                                        </div>

                                        <div className="report-info">

                                            <h3>
                                                {report.title}
                                            </h3>

                                            <p>
                                                {report.date}
                                            </p>

                                        </div>

                                    </div>

                                    <div
                                        className={
                                            report.status === "Running"
                                            ? "report-status running"
                                            : "report-status completed"
                                        }
                                    >
                                        {report.status}
                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>
    );
}

export default ReportViewer;