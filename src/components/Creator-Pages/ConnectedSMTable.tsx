import edit from '@assets/edit2.png'
import tiktok from '@assets/tiktok.png'
import facebook from '@assets/facebook.png'
import x from '@assets/x.png'
import snapchat from '@assets/snapchat.png'



const ConnectedSMTable = () => {
    return (
        <table className='w-full'>

            <thead className=''>
                <tr className='h-8 bg-[#F9F9F9]'>
                    <th className='px-3 font-normal text-[#333333A6] text-start'>Platform</th>
                    <th className='px-3 font-normal text-[#333333A6] text-start'>Username</th>
                </tr>
            </thead>

            <tbody>
                <tr className='border-b-1 border-[#D6D6D6]'>
                    <td className='px-3 py-2'><img src={tiktok} alt="" className='size-5'/></td>
                    <td className='px-3 py-2 flex items-center gap-2'>@creator123<button><img src={edit} alt="" className='size-4'/></button></td>
                </tr>
                <tr className='border-b-1 border-[#D6D6D6]'>
                    <td className='px-3 py-2'><img src={facebook} alt="" className='size-5'/></td>
                    <td className='px-3 py-2 flex items-center gap-2'>@creator123<button><img src={edit} alt="" className='size-4'/></button></td>
                </tr>
                <tr className='border-b-1 border-[#D6D6D6]'>
                    <td className='px-3 py-2'><img src={x} alt="" className='size-5'/></td>
                    <td className='px-3 py-2 flex items-center gap-2'>@creator123<button><img src={edit} alt="" className='size-4'/></button></td>
                </tr>
                <tr className=''>
                    <td className='px-3 py-2'><img src={snapchat} alt="" className='size-5'/></td>
                    <td className='px-3 py-2 flex items-center gap-2'>@creator123<button><img src={edit} alt="" className='size-4'/></button></td>
                </tr>
            </tbody>
            
        </table>
    )
}

export default ConnectedSMTable