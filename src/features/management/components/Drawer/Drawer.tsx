import React from 'react'
import { CustomDrawer } from '../../../../components/drawer/CustomDrawer'
import { EmployeeIcon } from '../../../../assets/svgs'
const listDrawerItems = [
    { icon: EmployeeIcon, title: 'Employee Management', to: '/management/employee' },
]
export const Drawer = () => {
    return (
        <CustomDrawer listItem={listDrawerItems} />
    )
}
