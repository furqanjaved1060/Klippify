import insta from '@assets/insta.png'
import facebook from '@assets/facebook.png'
import tiktok from '@assets/tiktok.png'
import { HiOutlineDotsVertical } from 'react-icons/hi';

const ManCampContTable = () => {

    const tableHeadings = ["Platform","Views","Status","Action"];

    const tableRows = [
        {
            rowNo: 1,
            platform: insta,
            views: 15200,
            status: 'rejected',
        },
        {
            rowNo: 2,
            platform: facebook,
            views: 15200,
            status: 'approved',
        },
        {
            rowNo: 3,
            platform: tiktok,
            views: 15200,
            status: 'pending',
        },
    ]


    return (
        <table className="w-full table-fixed text-center">

            <thead>
                <tr className="h-8 text-xxs text-[#333333A6] bg-[#f5f5f5]">
                    {tableHeadings.map((curHeading) => <th>{curHeading}</th>)}
                </tr>
            </thead>

            <tbody>             
                    {tableRows.map((curData) => {
                        const {platform, views, status} = curData;
                        return (
                            <tr className='h-12 text-xxs font-medium border-b-1 border-[#D6D6D6]'>
                                <td><img src={platform} alt="" className="size-5 m-auto"/></td>
                                <td>{views}</td>
                                <td>
                                    {status==="rejected" && <span className="text-[#FF3B3F] bg-[#FF3B3F1A] w-fit py-1 px-2 rounded-sm">Rejected</span>}
                                    {status==="approved" && <span className="text-[#2E865F] bg-[#2E865F1A] w-fit py-1 px-2 rounded-sm">Approved</span>}
                                    {status==="pending" && <span className="text-[#007EFF] bg-[#007EFF1A] w-fit py-1 px-2 rounded-sm">Pending</span>}
                                </td>
                                <td><HiOutlineDotsVertical className='m-auto' /></td>
                            </tr>
                        )
                    })}
            </tbody>

        </table>
    )
}

export default ManCampContTable;