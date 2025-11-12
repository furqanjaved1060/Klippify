import insta from '@assets/insta.png'
import facebook from '@assets/facebook.png'
import tiktok from '@assets/tiktok.png'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useState } from 'react';

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

    const [isActionOpen, setIsActionOpen] = useState<boolean>(false);
    const [actionOpenIndex, setActionOpenIndex] = useState<number|null>(null);


    return (
        <table className="w-full table-fixed text-center">

            <thead>
                <tr className="h-8 text-xxs text-[#333333A6] bg-[#f5f5f5]">
                    {tableHeadings.map((curHeading, index) => <th key={index}>{curHeading}</th>)}
                </tr>
            </thead>

            <tbody>             
                    {tableRows.map((curData, index) => {
                        const {platform, views, status} = curData;
                        return (
                            <tr key={index} className='h-11 text-xxs font-medium border-b-1 border-[#D6D6D6]'>
                                <td><img src={platform} alt="" className="size-5 m-auto"/></td>
                                <td>{views}</td>
                                <td>
                                    {status==="rejected" && <span className="text-[#FF3B3F] bg-[#FF3B3F1A] w-fit py-1 px-2 rounded-sm">Rejected</span>}
                                    {status==="approved" && <span className="text-[#2E865F] bg-[#2E865F1A] w-fit py-1 px-2 rounded-sm">Approved</span>}
                                    {status==="pending" && <span className="text-[#007EFF] bg-[#007EFF1A] w-fit py-1 px-2 rounded-sm">Pending</span>}
                                </td>
                                <td>
                                    <div className={`w-fit relative mx-auto`}>
                                        <HiOutlineDotsVertical onClick={() => {setIsActionOpen(!isActionOpen); setActionOpenIndex(index)}} className='cursor-pointer' />
                                        {isActionOpen && actionOpenIndex===index &&
                                        <div className='absolute p-2 space-y-2 w-22 right-0 rounded-md bg-white z-900' style={{boxShadow: "0px 2px 20px 0px #00000026"}}>
                                            <div className='flex items-center gap-1 cursor-pointer'><ViewDetailsIcon/><span className='text-[9px] font-normal text-[#ACACAC]'>View details</span></div>
                                            <div className='flex items-center gap-1 cursor-pointer'><DeleteIcon/><span className='text-[9px] font-normal text-[#ACACAC]'>Delete</span></div>
                                        </div>}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
            </tbody>

        </table>
    )
}

export default ManCampContTable;

const ViewDetailsIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8333 4.16683H17.5M10.8333 7.50016H15M10.8333 12.5002H17.5M10.8333 15.8335H15M2.5 4.16683C2.5 3.94582 2.5878 3.73385 2.74408 3.57757C2.90036 3.42129 3.11232 3.3335 3.33333 3.3335H6.66667C6.88768 3.3335 7.09964 3.42129 7.25592 3.57757C7.4122 3.73385 7.5 3.94582 7.5 4.16683V7.50016C7.5 7.72118 7.4122 7.93314 7.25592 8.08942C7.09964 8.2457 6.88768 8.3335 6.66667 8.3335H3.33333C3.11232 8.3335 2.90036 8.2457 2.74408 8.08942C2.5878 7.93314 2.5 7.72118 2.5 7.50016V4.16683ZM2.5 12.5002C2.5 12.2791 2.5878 12.0672 2.74408 11.9109C2.90036 11.7546 3.11232 11.6668 3.33333 11.6668H6.66667C6.88768 11.6668 7.09964 11.7546 7.25592 11.9109C7.4122 12.0672 7.5 12.2791 7.5 12.5002V15.8335C7.5 16.0545 7.4122 16.2665 7.25592 16.4228C7.09964 16.579 6.88768 16.6668 6.66667 16.6668H3.33333C3.11232 16.6668 2.90036 16.579 2.74408 16.4228C2.5878 16.2665 2.5 16.0545 2.5 15.8335V12.5002Z" stroke="#ACACAC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const DeleteIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3337 7.5V15.8333H6.66699V7.5H13.3337ZM12.0837 2.5H7.91699L7.08366 3.33333H4.16699V5H15.8337V3.33333H12.917L12.0837 2.5ZM15.0003 5.83333H5.00033V15.8333C5.00033 16.75 5.75033 17.5 6.66699 17.5H13.3337C14.2503 17.5 15.0003 16.75 15.0003 15.8333V5.83333Z" fill="#ACACAC" stroke="#ACACAC" strokeWidth="0.5"/>
        </svg>
    )
}
