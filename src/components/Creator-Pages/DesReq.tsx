import Gdrive from '@assets/drive.png'

const DesReq = () => {
    return (
    <div className="space-y-2">

        <div className='space-y-1'>
          <h3 className="text-xs font-medium">Description</h3>
          <p className="text-xxs text-[#33333380]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        <div className='space-y-1'>
          <h3 className="text-xs font-medium">Requirements</h3>
          <ul className="text-xxs text-[#33333380] space-y-1">
            <li>Acceptance Criteria: <span className="font-medium text-[#000C21]">Manual</span></li>
            <li>Content Type: <span className="font-medium text-[#000C21]">Images, Videos</span></li>
            <li>Language: <span className="font-medium text-[#000C21]">English</span></li>
            <li>Audience Location Preference: <span className="font-medium text-[#000C21]">United States, Canada</span></li>
          </ul>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium">Content From Brand</p>
          <a href="https://cdn.acmeco.com/assets/breathable-basics-kit.zip" className="text-xxs text-[#007EFF] flex gap-2 items-center underline"><img src={Gdrive} alt="" className="size-5"/>https://cdn.acmeco.com/assets/breathable-basics-kit.zip</a>
        </div>

    </div>
    )
}

export default DesReq