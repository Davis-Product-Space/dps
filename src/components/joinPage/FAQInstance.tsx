interface FAQInstanceProps {
  question: string;
  answer: string;
}

export default function FAQInstance({ question, answer }: FAQInstanceProps) {
  return (
    <div
        className="flex flex-col"
        style={{
            display: 'flex',
            width: '456px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
    }}>
      {/* Question */}
      <h3 
        className="font-inter text-[24px] non-italic font-semibold leading-normal"
        style={{ 
          color: '#3A3A3A'
        }}
      >
        {question}
      </h3>
      
      {/* Answer */}
      <p 
        className="font-['M_PLUS_1'] text-[22.5px] non-italic font-normal leading-[32px]"
        style={{ 
          color: '#3A3A3A'
        }}
      >
        {answer}
      </p>
    </div>
  );
}
