import SelectionButtons from "@components/Creator-Pages/SelectionButtons";
import Table from "@components/Brand-Pages/Table";
import Tatiana from "@assets/Tatiana.png"
import Martin from "@assets/Martin.png"
import Corey from "@assets/Corey.png"
import insta from "@assets/insta.png"
import tiktok from "@assets/tiktok.png"
import facebook from "@assets/facebook.png"
import x from "@assets/x.png"
import { useState } from "react";



const ManageCreatorsSection = () => {

    const [activeBtn, setActiveBtn] = useState<string>("joined");

    type RowsDataJoinedCreatorsObj = {
        name: string,
        avatar: string,
        userName: string,
        totalEarnings: string,
        totalViews: string,
    }

    const rowsDataJoinedCreators: RowsDataJoinedCreatorsObj[] = [
        {
            name: "Tatiana Press",
            avatar: Tatiana,
            userName: "@creator123",
            totalEarnings: "$1,500",
            totalViews: "15,200",
        },
        {
            name: "Corey Bergson",
            avatar: Corey,
            userName: "@creator123",
            totalEarnings: "$2,500",
            totalViews: "15,200",
        },
        {
            name: "Martin Mango",
            avatar: Martin,
            userName: "@creator123",
            totalEarnings: "$1,500",
            totalViews: "15,200",
        },
    ]

    type RowsDataRequestedCreatorsObj = {
        name: string,
        avatar: string,
        userName: string,
        platform: string[]
    }

    const rowsDataRequestedCreators: RowsDataRequestedCreatorsObj[] = [
        {
            name: "Tatiana Press",
            avatar: Tatiana,
            userName: "@creator123",
            platform: ["instagram","tiktok"],
        },
        {
            name: "Corey Bergson",
            avatar: Corey,
            userName: "@creator123",
            platform: ["facebook","x"],
        },
        {
            name: "Martin Mango",
            avatar: Martin,
            userName: "@creator123",
            platform: ["instagram","facebook"],
        },
    ]

    return (
        <section className="space-y-3">

            <h3 className="text-sm font-medium leading-none">Manage Creators</h3>

            <SelectionButtons 
            buttons={["joined", "requested"]}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}/>

            <div className="overflow-x-scroll">

                {activeBtn==="joined" &&

                    <Table
                    scroll={true}
                    headings={["Creators", "Username", "Total Earnings", "Total Views", "Action"]}
                    rows={
                        rowsDataJoinedCreators.map((curRowData) => {

                            const {name, avatar, userName, totalEarnings, totalViews} = curRowData;

                            return (
                                <>
                                <td className="px-3"><div className="flex items-center gap-1"><img src={avatar} alt="" className="size-5" />{name}</div></td>
                                <td className="px-3">{userName}</td>
                                <td className="px-3 text-center">{totalEarnings}</td>
                                <td className="px-3 text-center">{totalViews}</td>
                                <td className="px-3 text-center">
                                    <button type='button' className="p-[1px] bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md cursor-pointer">
                                        <div className="px-3 py-1.5 bg-white text-[#007EFF] rounded-md leading-none">
                                            view details
                                        </div>
                                    </button>
                                </td>
                                </>
                            )
                        })
                    }/>
                }

                {activeBtn==="requested" &&

                    <Table
                    scroll={true}
                    headings={["Creators", "Platform", "Username", "Actions"]}
                    rows={
                        rowsDataRequestedCreators.map((curRowData) => {

                            const {name, avatar, userName, platform} = curRowData;

                            return (
                                <>
                                <td className="px-3"><div className="flex items-center gap-1"><img src={avatar} alt="" className="size-5" />{name}</div></td>
                                <td className="px-3">
                                    <div className="flex items-center gap-2">
                                        {platform.map((curPlatform) => (
                                            <img 
                                            src={curPlatform === "instagram" ? insta : curPlatform === "tiktok" ? tiktok : curPlatform === "facebook" ? facebook : curPlatform === "x" ? x : ""} 
                                            alt="" 
                                            className="size-4" />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-3 text-center">{userName}</td>
                                <td className="px-3 text-center">
                                    <div className="space-x-2">
                                        <button type='button' className="py-1.5 px-3 text-[white] bg-gradient-to-r from-[#333EFF] to-[#5BCAFF] rounded-md leading-none cursor-pointer">Accept</button>
                                        <button type='button' className="py-1.25 px-3 border-1 border-[#D6D6D6] rounded-md leading-none cursor-pointer">Reject</button>
                                    </div>
                                </td>
                                </>
                            )
                        })
                    }/>
                }

            </div>

        </section>
    )
}

export default ManageCreatorsSection;
