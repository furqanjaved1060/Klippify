import type { JSX } from "react";



type TableProps = {
    headings: string[];
    rows: JSX.Element[];
    scroll?: boolean;
}

const Table: React.FC<TableProps> = ({headings, rows, scroll}) => {
    return (
        <table className={`w-full  ${scroll && 'min-w-[600px]'}`}>
        
            <thead>
                <tr className='h-8 text-xxs text-[#333333A6] bg-[#f5f5f5]'>
                    {headings.map((curHeading, index) => {
                        return (
                            <th key={index} className={`px-3 font-normal text-[#333333A6] ${index>1 ? 'text-center':'text-start'}`}>{curHeading}</th>
                        )
                    })}
                </tr>
            </thead>

            <tbody>
                
                    {rows.map((curRow) => {
                        return (
                            <tr className='h-11 text-xxs font-medium border-b-1 border-[#D6D6D6]'>
                                {curRow}
                            </tr>
                        )
                    })}
            </tbody>
                    
        </table>
    )
}

export default Table;