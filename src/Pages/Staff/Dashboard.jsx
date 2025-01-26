import React from 'react'
import TokenTable from '../../Components/UI/TokenTable'
import AdminHeader from '../../Components/Layouts/AdminHeader'

const StaffDashboard = () => {
    return (
        <>
            <AdminHeader />
            <div className='py-[20px]'>
                <TokenTable />
            </div>
        </>
    )
}

export default StaffDashboard