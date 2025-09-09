interface RecruitmentStepProps {
  title: string;
  description: string;
}

export default function RecruitmentStep({ title, description }: RecruitmentStepProps) {
  return (
    <div 
      className="flex justify-between items-center"
      style={{
        display: 'flex',
        width: '1064px',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      {/* Left text box - Step title */}
      <h3 
        className="font-inter text-[32px] font-semibold leading-[48.75px]"
        style={{ 
          color: '#3A3A3A',
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}
      >
        {title}
      </h3>
      
      {/* Right text box - Description with 90px gap */}
      <p 
        className="font-['M_PLUS_1'] text-[22.5px] font-normal leading-[32px]"
        style={{ 
          color: '#3A3A3A',
          width: '644px',
          flexShrink: 0,
          marginLeft: '90px'
        }}
        dangerouslySetInnerHTML={{
          __html: description.replace(
            /"([^"]+)"/g, 
            '<span style="color: #9965B7; text-decoration: underline;">$1</span>'
          )
        }}
      />
    </div>
  );
}
