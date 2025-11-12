
type Props = {
    title: string;
    value: string;
    img: string;
    clr: string;
    bgClr: string;
}

const CreatorDashboardItem: React.FC<Props> = ({title, value, img, clr, bgClr}) => {
    return (
      <li className={`px-2.5 py-4 flex items-center justify-between rounded-lg border-l-1`} style={{backgroundColor: bgClr, borderColor: clr,}}>
        <div>
          <p className={`text-xs font-medium`} style={{color:clr}}>{title}</p>
          <p className='text-base font-medium'>{value}</p>
        </div>
        <div className={`size-10 rounded-[50%] flex items-center justify-center`} style={{backgroundColor: clr}}>
          <img src={img} alt="" className='size-6' />
        </div>
      </li>
    )
}
export default CreatorDashboardItem;