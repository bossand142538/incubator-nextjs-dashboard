import { Suspense } from "react";
import { fetchCardData, fetchLatestInvoices, fetchRevenue } from "../../lib/data";
import {Card} from "../../ui/dashboard/cards";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "../../ui/skeletons";

export default async function Dashboard() {
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
    } = await fetchCardData();
    const revenue = await fetchRevenue();
    return (
        <div className="w-full">
            Dashboard
            <div className="grid grid-cols-4 mx-auto gap-4 w-full mt-6">
                <Card title="Collected" value={totalPaidInvoices} type="invoices"/>
                <Card title="Pending" value={totalPendingInvoices} type="invoices"/>
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>
                <Card title="Total Customer" value={numberOfCustomers} type="invoices"/>
            </div>
            <div className="gap-4 grid grid-cols-2 mt-6">
                <div>
                    <Suspense fallback={<RevenueChartSkeleton/>}/>
                    <RevenueChart revenue={revenue}/>
                </div>
                <div>
                    <Suspense fallback={<LatestInvoicesSkeleton/>}/>
                    <LatestInvoices latestInvoices={latestInvoices}/>
                </div>
            </div>
        </div>
    )
}