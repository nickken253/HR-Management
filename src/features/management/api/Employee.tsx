import { axios } from '../../../lib/axios'


import { IEmployeeResponse, IEmployeeData, IEmployee } from '../../../interfaces/employee.interface';

export const getEmployeeList = async (): Promise<any> =>  {
    try {
        const response = await axios.get('/employee')
        console.log(response);
        return response;
    } catch (error: any) {
        return {
            message: error.response?.data?.message || error.message,
            code: error.response?.data?.code || null,
            error: true,
        }
    }
}
